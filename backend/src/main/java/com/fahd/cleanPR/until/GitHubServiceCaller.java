package com.fahd.cleanPR.until;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

import static com.fahd.cleanPR.CleanPrConstants.*;

@Service
public class GitHubServiceCaller {

    @Autowired
    private RestTemplate restTemplate;

    public List<Map<String, Object>> fetchRepositoryTree(String accessToken,
                                                         String repoFullName,
                                                         String branch) {
        // build uri
        String uri = String.format("/repos/%s/git/trees/%s?recursive=1", repoFullName, branch);

        System.out.println(uri);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(AUTHORIZATION, BEARER + accessToken);
        httpHeaders.set(ACCEPT, GITHUB_REQUEST_BODY_TYPE);
        httpHeaders.set("User-Agent", "clean-pr/1.0");

        HttpEntity<String> httpEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(
                uri,
                HttpMethod.GET,
                httpEntity,
                String.class
        );

        return null;
    }

}
