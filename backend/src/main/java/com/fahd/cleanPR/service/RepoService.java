package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.repository.RepoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RepoService {
    private final RepoRepository repoRepository;

    public void saveInstalledRepository(Repo newRepository){
        repoRepository.save(newRepository);
    }

    public List<Repo> getRepositoriesByUserId(int userId) {
        return repoRepository.findAllByUserId(userId);
    }

    public void deleteRepository(int repoId) {
    }
}
