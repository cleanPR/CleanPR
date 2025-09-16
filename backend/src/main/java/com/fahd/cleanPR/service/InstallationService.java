package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Installation;
import com.fahd.cleanPR.model.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class EventService {


    /**
     * saving installation and repository metadata
     * to the db because we'll need it later
     * for code context and access tokens
     * **/
    public void saveInstallation(Map<String, Object> installationData, List<Map<String, Object>> repostiories) {

        // 1) create the installation model
        Installation installation = buildInstallationModel(installationData);

        // 2) create the repository list
        List<Repository> repositories = createRepositoryList(repostiories, installation.getAccessTokenUrl());

        installation.setRepositories(repositories);

        // 3) save to the db
        System.out.println(installation.toString());
    }

    private Installation buildInstallationModel(Map<String, Object> installationData) {
        Map<String, Object> account = (Map<String, Object>) installationData.get("account");
        String userId = (String) account.get("id");
        String installationId = (String) installationData.get("id");
        String accessTokenTokenUrl = (String) installationData.get("access_token_url");

        return Installation.builder()
                .userId(userId)
                .accessTokenUrl(accessTokenTokenUrl)
                .installationId(installationId)
                .build();
    }

    private List<Repository> createRepositoryList(List<Map<String, Object>> repostiories, String accessTokenUrl) {
        List<Repository> repositories = new ArrayList<>();

        for(Map<String, Object> repo : repostiories){
            String repoId = (String) repo.get("id");
            Repository repository = Repository.builder()
                    .repoId(repoId)
                    .repoPaths()
        }


        return repositories;
    }


}
