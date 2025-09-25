package com.fahd.cleanPR.repository;

import com.fahd.cleanPR.model.PullRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PullRequestRepository extends JpaRepository<PullRequest, Integer> {
}
