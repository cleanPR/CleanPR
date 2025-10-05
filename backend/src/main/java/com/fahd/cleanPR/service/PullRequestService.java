package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.PullRequest;
import com.fahd.cleanPR.repository.PullRequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PullRequestService {

    private final PullRequestRepository pullRequestRepository;


    public PullRequestService(PullRequestRepository pullRequestRepository) {
        this.pullRequestRepository = pullRequestRepository;
    }

    public List<PullRequest> fetchPullRequestsByRepoId(int repoId) {
        return pullRequestRepository.findAllByRepoId(repoId);
    }
}
