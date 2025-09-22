package com.fahd.cleanPR.handler;


import com.fahd.cleanPR.model.Installation;
import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.repository.InstallationRepository;
import com.fahd.cleanPR.repository.RepoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@Component
public class InstallationEventHandler extends BaseEventHandler {

    private final InstallationRepository installationRepository;

    private final RepoRepository repoRepository;

    @Autowired
    public InstallationEventHandler(final RepoRepository repoRepository,
                                    final InstallationRepository installationRepository) {
        this.installationRepository = installationRepository;
        this.repoRepository = repoRepository;
    }


    @Override
    public void triggerEvent(Map<String, Object> webHookPayload, String action) {
        logInfo(String.format("triggering event, action={ %s },", action));

        try {
            Map<String, Object> installationData = (Map<String, Object>) webHookPayload.get("installation");
            List<Map<String, Object>> repositories = (List<Map<String, Object>>) webHookPayload.get("repositories");
            switch (action) {
                case "created":
                    handleInstallation(installationData, repositories);
                    break;
                case "deleted":
                    int installationId = (int) installationData.get("id");
                    handleUninstall(installationId);
                    break;
                default:
                    logError(String.format("no implementation for actions={ %s }", action));
                    break;
            }
        } catch (Exception e) {
            logError(String.format("action={ %s }, exception={ %s }", action, e.getMessage()));
        }


    }

    /**
     * deletes installation
     * and deletes all added repo's
     *
     * TODO: make it also delete saved pr's when we add pr handling
     * */
    private void handleUninstall(int installationId) {

        installationRepository.deleteById(installationId);

        repoRepository.deleteAllByInstallationId(installationId);

    }

    private void handleInstallation(Map<String, Object> installationData, List<Map<String, Object>> repositories) {

        // 1) create data models
        Installation installation = createInstallation(installationData);

        List<Repo> repoList = createRepoList(repositories, installation.getUserId(), installation.getInstallationId());

        //2) save to db
        installationRepository.save(installation);

        repoRepository.saveAll(repoList);

    }

    private List<Repo> createRepoList(List<Map<String, Object>> repositories, int userId, int installationId) {

        return repositories.stream()

                // mapping each Map to repo model
                .map(repo -> {
                    int repoId = (int) repo.get("id");
                    String repoName = (String) repo.get("name");

                    return Repo.builder()
                            .repoId(repoId)
                            .repoName(repoName)
                            .userId(userId)
                            .installationId(installationId)
                            .build();

                })
                .toList();
    }

    public Installation createInstallation(Map<String, Object> installationData) {

        Map<String, Object> account =  (Map<String, Object>) installationData.get("account");
        int installationId = (int) installationData.get("id");
        int userId = (int) account.get("id");
        String accessTokenUrl = (String) installationData.get("access_tokens_url");

        return Installation.builder()
                .installationId(installationId)
                .userId(userId)
                .accessTokenUrl(accessTokenUrl)
                .build();
    }
}
