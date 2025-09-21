package com.fahd.cleanPR.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fahd.cleanPR.model.Repo;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoRepository extends JpaRepository<Repo,Integer> {
}
