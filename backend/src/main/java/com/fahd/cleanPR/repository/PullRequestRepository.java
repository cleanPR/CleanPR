package com.fahd.cleanPR.repository;

import com.fahd.cleanPR.model.PullRequest;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PullRequestRepository extends JpaRepository<PullRequest, Integer> {

    @Transactional
    void deleteAllByInstallationId(int installationId);

    @Transactional
    Optional<PullRequest> findById(long id);

    @Transactional
    Optional<PullRequest> findByRepoId(int repoId);

    @Transactional
    List<PullRequest> findAllByRepoId(int repoId);

    @Transactional
    void deleteAllByRepoId(int repoId);

}
