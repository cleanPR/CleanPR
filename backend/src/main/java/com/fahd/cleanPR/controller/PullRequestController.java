package com.fahd.cleanPR.controller;

import com.fahd.cleanPR.model.PullRequest;
import com.fahd.cleanPR.service.PullRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.fahd.cleanPR.CleanPrConstants.PULL_REQUEST_ROUTE;

@RestController
@RequestMapping(PULL_REQUEST_ROUTE)
public class PullRequestController {

    private final PullRequestService pullRequestService;

    @Autowired
    public PullRequestController(PullRequestService pullRequestService) {
        this.pullRequestService = pullRequestService;
    }

    @GetMapping("/repository/{repoId}")
    public ResponseEntity<List<PullRequest>> getRepos(@PathVariable int repoId) {
        try {
            return ResponseEntity.ok(pullRequestService.fetchPullRequestsByRepoId(repoId));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
