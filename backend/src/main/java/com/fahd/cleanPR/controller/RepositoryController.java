package com.fahd.cleanPR.controller;

import com.fahd.cleanPR.model.Repo;
import com.fahd.cleanPR.service.RepoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.fahd.cleanPR.CleanPrConstants.REPOSITORY_ROUTE;

@RestController
@RequestMapping(REPOSITORY_ROUTE)
public class RepositoryController {

    private final RepoService repoService;

    public RepositoryController(RepoService repoService) {
        this.repoService = repoService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Repo>> getRepositoriesByUserId(@PathVariable int userId) {
        try {
            List<Repo> repos = repoService.getRepositoriesByUserId(userId);
            return ResponseEntity.ok(repos);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("/{repoId}/installation/{installationId}")
    public ResponseEntity<Void> deleteRepository(@PathVariable int repoId, @PathVariable int installationId) {
        try {
            repoService.deleteRepository(repoId, installationId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
}
