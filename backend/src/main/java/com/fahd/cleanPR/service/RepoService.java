package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.repository.InstallationRepository;
import com.fahd.cleanPR.repository.RepoRepository;
import com.fahd.cleanPR.util.GitHubServiceCaller;
import com.fahd.cleanPR.util.TokenService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
