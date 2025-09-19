package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Account;
import com.fahd.cleanPR.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AccountService {


    private final AccountRepository accountRepository;

    @Autowired
    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public Account saveOrUpdate(final Account account) {
        return accountRepository.save(account);
    }

    public Account findById(int id) {
        return accountRepository.findById(id).orElse(null);
    }

    public Account findByUserEmail(String email) {
        return accountRepository.findByEmail(email).orElse(null);
    }

}
