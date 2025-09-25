package com.fahd.cleanPR.handler;

import com.fahd.cleanPR.model.PullRequest;
import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.model.Status;
import com.fahd.cleanPR.repository.PullRequestRepository;
import org.springframework.stereotype.Component;

import java.time.OffsetDateTime;
import java.util.Date;
import java.util.Map;

@Component
public class PullRequestHandler extends BaseEventHandler{

    private final PullRequestRepository pullRequestRepository;

    public PullRequestHandler(PullRequestRepository pullRequestRepository) {
        this.pullRequestRepository = pullRequestRepository;
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

    private void handleOpenedPullRequest(Map<String, Object> webHookPayload) {
        // 1) create pull request model
        PullRequest pullRequest = (PullRequest) createPullRequest(webHookPayload);

        // 2) insert to db
        pullRequestRepository.save(pullRequest);

        // 3) get github api access token

        // 4) fetch the pr file paths

        // 5) get all the files in pr and the code diff

        // 6) prompt chatgpt for a code summary and code comments

        // 7) post chat gpts response in the pr

        // 8) change the status of pr to reviewed

    }

    public PullRequest createPullRequest(Map<String, Object> webHookPayload) {
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
