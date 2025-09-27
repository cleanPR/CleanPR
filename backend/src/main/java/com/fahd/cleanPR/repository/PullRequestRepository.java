package com.fahd.cleanPR.repository;

import com.fahd.cleanPR.model.PullRequest;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PullRequestRepository extends JpaRepository<PullRequest, Integer> {

    @Transactional
    void deleteAllByInstallationId(int installationId);

    @Transactional
    void deleteByRepoId(int repoId);

    @Transactional
    List<PullRequest> findAllByRepoId(int repoId);

    @Transactional
    void deleteById(long id);

    @Transactional
    void deleteAllByRepoId(int repoId);

}
