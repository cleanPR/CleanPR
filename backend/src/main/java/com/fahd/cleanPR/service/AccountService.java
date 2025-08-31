package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Account;
import com.fahd.cleanPR.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account saveOrUpdate(Account account) {
        return accountRepository.findByUserId(account.getUserId())
                .map(existing -> {
                    account.setMongoId(existing.getMongoId());
                    return accountRepository.save(account);
                    }
                )
                .orElseGet(() -> accountRepository.save(account));
    }
}
