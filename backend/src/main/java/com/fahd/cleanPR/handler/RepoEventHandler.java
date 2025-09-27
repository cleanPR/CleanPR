package com.fahd.cleanPR.handler;

import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.repository.PullRequestRepository;
import com.fahd.cleanPR.repository.RepoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class RepoEventHandler extends BaseEventHandler {

    private final RepoRepository repoRepository;

    private final PullRequestRepository pullRequestRepository;

    @Autowired
    public RepoEventHandler(final RepoRepository repoRepository,
                            final PullRequestRepository pullRequestRepository) {
        this.repoRepository = repoRepository;
        this.pullRequestRepository = pullRequestRepository;
    }

    @Override
    public void triggerEvent(Map<String, Object> webHookPayload, String action) {
        logInfo(String.format("event triggered for action={ %s }", action));

        Map<String, Object> installationData = (Map<String, Object>) webHookPayload.get("installation");
        Map<String, Object> account = (Map<String, Object>) installationData.get("account");

        int installationId = (int) installationData.get("id");
        int userId = (int) account.get("id");

        List<Map<String, Object>> repositoriesAdded = (List<Map<String, Object>>) webHookPayload.getOrDefault("repositories_added", null);
        List<Map<String, Object>> repositoriesRemoved = (List<Map<String, Object>>) webHookPayload.getOrDefault("repositories_removed", null);

        // if both lists are empty don't do anything
        if ((repositoriesAdded == null || repositoriesAdded.isEmpty())
                && (repositoriesRemoved == null || repositoriesRemoved.isEmpty())) {
            logInfo(String.format("no repositories added or removed for this installation={ %d }", installationId));
            return;
        }

        // if there added repositories in the payload set is added to true
        if (repositoriesAdded != null && !repositoriesAdded.isEmpty()) {
            handleAddOrRemoveRepos(repositoriesAdded, installationId, userId, true);
        }

        // if there are no added repositories to the payload set is added to false
        if (repositoriesRemoved != null && !repositoriesRemoved.isEmpty()) {
            handleAddOrRemoveRepos(repositoriesRemoved, installationId, userId, false);
        }
    }

    /**
     * checks if repositories were added or not
     * and executes action based on the boolean
     * */
    private void handleAddOrRemoveRepos(List<Map<String, Object>> repositories,
                                       int installationId,
                                       int userId,
                                       boolean isAdded) {
        if (isAdded) {
            // map the added repo maps to List<repo> and insert it to the db
            List<Repo> addedRepos = repositories.stream()
                    .map(repo -> {
                        int repoId =(int) repo.get("id");
                        String repoName = (String) repo.get("full_name");

                        return Repo.builder()
                                .repoId(repoId)
                                .repoName(repoName)
                                .userId(userId)
                                .installationId(installationId)
                                .build();
                    })
                    .toList();
            repoRepository.saveAll(addedRepos);
            return;
        }

        /*
         * when a user removes a repo from installation
         * we'll delete the repo and also delete all
         * repo pr from our db
         * */
        // map the removed repos to there ideas and delete them from the db
        List<Integer> repoIdsToDelete = repositories.stream()
                .map(repo -> (int) repo.get("id"))
                .toList();

        repoRepository.deleteAllById(repoIdsToDelete);

        // getting every pull request for each repository and deleting it
        for (Integer repoId : repoIdsToDelete) {
            List<Long> pullRequestIds = pullRequestRepository.findAllByRepoId(repoId)
                    .stream().map(pr -> pr.getId())
                    .toList();

            // deletes all pr's by repoId
            pullRequestRepository.deleteAllByRepoId(repoId);

        }
    }
}
