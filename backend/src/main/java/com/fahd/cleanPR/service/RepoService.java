package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Installation;
import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.repository.InstallationRepository;
import com.fahd.cleanPR.repository.RepoRepository;
import com.fahd.cleanPR.until.GitHubServiceCaller;
import com.fahd.cleanPR.until.TokenService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RepoService {
    private final RepoRepository repoRepository;

    private final InstallationRepository installationRepository;

    private final TokenService tokenService;
    private final GitHubServiceCaller gitHubServiceCaller;

    public void saveInstalledRepository(Repo newRepository){
        repoRepository.save(newRepository);
    }

    public List<Repo> getRepositoriesByUserId(int userId) {
        return repoRepository.findAllByUserId(userId);
    }

    /*
    * to delete a repo from an installation
    * the best way would be to call the github api
    * to remove the repo from the installation
    * this will trigger the remove event and
    * it will delete the repo from our database
    * so we don't have to remove it manually in
    * this function
    * */
    public void deleteRepository(int repoId, int installationId)
            throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {

        Optional<Installation> installation = installationRepository.findById(installationId);

        if (installation.isEmpty()) {
            throw new IllegalArgumentException("Installation not found");
        }

        String accessToken = tokenService.getAccessToken(installation.get().getAccessTokenUrl());
        String url = String.format("/user/installations/%d/repositories/%d", installationId, repoId);
        ResponseEntity<String> response = gitHubServiceCaller.deleteRepo(url, accessToken);


    }
}
