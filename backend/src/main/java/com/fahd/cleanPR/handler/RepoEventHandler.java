package com.fahd.cleanPR.handler;

import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.repository.RepoRepository;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class RepoEventHandler extends BaseEventHandler {

    private final RepoRepository repoRepository;

    @Autowired
    public RepoEventHandler(final RepoRepository repoRepository) {
        this.repoRepository = repoRepository;
    }

    @Override
    public void triggerEvent(Map<String, Object> webPayload, String action) {
        logInfo(String.format("event triggered for action={ %s }", action));

        Map<String, Object> installationData = (Map<String, Object>) webPayload.get("installation");
        Map<String, Object> account = (Map<String, Object>) installationData.get("account");

        int installationId = (int) installationData.get("id");
        int userId = (int) account.get("id");

        List<Map<String, Object>> repositoriesAdded = (List<Map<String, Object>>) webPayload.getOrDefault("repositories_added", null);
        List<Map<String, Object>> repositoriesRemoved = (List<Map<String, Object>>) webPayload.getOrDefault("repositories_removed", null);

        if ((repositoriesAdded == null || repositoriesAdded.isEmpty())
                && (repositoriesRemoved == null || repositoriesRemoved.isEmpty())) {
            logInfo(String.format("no repositories added or removed for this installation={ %d }", installationId));
            return;
        }

        if (repositoriesAdded != null && !repositoriesAdded.isEmpty()) {
            handleAddOrRemoveRepos(repositoriesAdded, installationId, userId, true);
        }

        if (repositoriesRemoved != null && !repositoriesRemoved.isEmpty()) {
            handleAddOrRemoveRepos(repositoriesRemoved, installationId, userId, false);
        }
    }

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
        } else {
            // map the removed repos to there ideas and delete them from the db
            List<Integer> repoIdsToDelete = repositories.stream()
                    .map(repo -> (int) repo.get("id"))
                    .toList();
            repoRepository.deleteAllById(repoIdsToDelete);
        }
    }
}
