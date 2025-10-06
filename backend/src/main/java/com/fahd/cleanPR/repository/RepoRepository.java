package com.fahd.cleanPR.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fahd.cleanPR.model.Repo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepoRepository extends JpaRepository<Repo,Integer> {

    @Transactional
    void deleteAllByInstallationId(int installationId);

    List<Repo> findAllByUserId(int userId);
}
