package com.fahd.cleanPR.repository;

import com.fahd.cleanPR.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AccountRepository extends MongoRepository<Account, String> {
    Optional<Account> findByUserId(int userId);
}
