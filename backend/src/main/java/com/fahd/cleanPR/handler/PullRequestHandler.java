package com.fahd.cleanPR.handler;

import com.fahd.cleanPR.model.Installation;
import com.fahd.cleanPR.model.PullRequest;
import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.model.Status;
import com.fahd.cleanPR.repository.InstallationRepository;
import com.fahd.cleanPR.repository.PullRequestRepository;
import com.fahd.cleanPR.repository.RepoRepository;
import com.fahd.cleanPR.until.GitHubServiceCaller;
import com.fahd.cleanPR.until.TokenService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Component
public class PullRequestHandler extends BaseEventHandler{

    private final PullRequestRepository pullRequestRepository;

    private final TokenService tokenService;

    private final InstallationRepository  installationRepository;

    private final RepoRepository repoRepository;
    private final GitHubServiceCaller gitHubServiceCaller;

    public PullRequestHandler(final PullRequestRepository pullRequestRepository,
                              final TokenService tokenService,
                              final InstallationRepository installationRepository,
                              final RepoRepository repoRepository,
                              final GitHubServiceCaller gitHubServiceCaller) {

        this.pullRequestRepository = pullRequestRepository;
        this.tokenService = tokenService;
        this.installationRepository = installationRepository;
        this.repoRepository = repoRepository;
        this.gitHubServiceCaller = gitHubServiceCaller;
    }

    @Override
    public void triggerEvent(Map<String, Object> webHookPayload, String action) {
        logInfo(String.format("event triggered for action={ %s }", action));

        try {
            switch (action) {
                case "opened":
                    handleOpenedPullRequest(webHookPayload);
                    break;
                case "closed":
                    // TODO: change the status of the pr
                    break;
                default:
                    logInfo(String.format("no handler for this action={ %s }", action));
            }
        } catch (Exception e) {
            logError(String.format("error while handling action={ %s }, error={ %s } ",  action, e.getMessage()));
        }
    }

    private void handleOpenedPullRequest(Map<String, Object> webHookPayload) throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        // 1) create pull request model
        PullRequest pullRequest = (PullRequest) createPullRequest(webHookPayload);

        // 2) insert to db
        pullRequestRepository.save(pullRequest);

        Optional<Installation> installation = Optional.of(installationRepository.getReferenceById(pullRequest.getInstallationId()));

        Optional<Repo> repo = repoRepository.findById(pullRequest.getRepoId());

        if (installation.isEmpty()) {
            logError(String.format("installation not found for pullRequestId={ %s }, installationI={ %s }", pullRequest.getId(), pullRequest.getInstallationId()));
            throw new EntityNotFoundException("Installation not found");
        }

        if (repo.isEmpty()) {
            logError(String.format("installation not found for pullRequestId={ %s }, installationI={ %s }", pullRequest.getId(), pullRequest.getInstallationId()));
        }

        // 3) get github api access token
        String accessToken = tokenService.getAccessToken(installation.get().getAccessTokenUrl());

        // 4) fetch the pr file paths
        int pullRequestNumber = (int) webHookPayload.get("number");
        String url = String.format("/repos/%s/pulls/%d/files", repo.get().getRepoName(), pullRequestNumber);
        JsonNode filePaths = gitHubServiceCaller.fetchFromGitHub(accessToken, url);

        List<Map<String, Object>> filePathObjects = convertFilePathJsonToListOfMap(filePaths);
        List<String> rawUrls = getContentUrl(filePathObjects);
        List<String> codePatches = getCodePatches(filePathObjects);

        // 5) get all the files in pr and the code diff
        List<String> prFiles = gitHubServiceCaller.fetchFileContent(rawUrls, accessToken);

        // 6) prompt chatgpt for a code summary and code comments

        // 7) post chat gpts response in the pr

        // 8) change the status of pr to reviewed

    }

    // adding all the code patches to a list
    private List<String> getCodePatches(List<Map<String, Object>> filePathObjects) {
        List<String> codePaths = new ArrayList<>();

        for (Map<String, Object> filePath : filePathObjects) {
            codePaths.add("Filename: " + filePath.get("filename") + "\n " + "code patch: " + filePath.get("patch"));
        }

        return codePaths;
    }

    private List<Map<String, Object>> convertFilePathJsonToListOfMap(JsonNode filePaths) {
        ObjectMapper mapper = new ObjectMapper();
        List<Map<String, Object>> filePathObjects = mapper.convertValue(
                filePaths,
                new TypeReference<List<Map<String, Object>>>() {}
        );
        return filePathObjects;
    }


    /**
     * extracting the contentUrl from the list of object
     * converting the list of objects to a list<String>
     * */
    private List<String> getContentUrl(List<Map<String, Object>> filePaths) {
        return filePaths.stream()
                .map(obj -> (String) obj.get("contents_url"))
                .toList();
    }

    private PullRequest createPullRequest(Map<String, Object> webHookPayload) {
        Map<String, Object> pullRequest = (Map<String, Object>) webHookPayload.get("pull_request");
        Map<String, Object> author = (Map<String, Object>) pullRequest.get("user");
        Map<String, Object> pullRequestHead = (Map<String, Object>) pullRequest.get("head");
        Map<String, Object> repo = (Map<String, Object>) pullRequestHead.get("repo");
        Map<String, Object> owner = (Map<String, Object>) repo.get("owner");
        Map<String, Object> installation = (Map<String, Object>) webHookPayload.get("installation");

        // 1) build pr model
        long pullRequestId = (long) pullRequest.get("id");
        String title = (String) pullRequest.get("title");
        int repoOwnerId = (int) owner.get("id");
        int authorId = (int) author.get("id");
        String authorName = (String) author.get("login");
        int repoId = (int) repo.get("id");
        int installationId = (int) installation.get("id");
        String url = (String) pullRequest.get("html_url");
        String openedAt = (String) pullRequest.get("created_at");
        String apiUrl = (String) pullRequest.get("url");

        return PullRequest.builder()
                .Id(pullRequestId)
                .title(title)
                .repoOwnerId(repoOwnerId)
                .authorId(authorId)
                .authorName(authorName)
                .repoId(repoId)
                .installationId(installationId)
                .status(Status.OPEN)
                .openedAt(OffsetDateTime.parse(openedAt))
                .url(url)
                .build();

    }
}
