package com.fahd.cleanPR.controller;

import com.fahd.cleanPR.model.Account;
import com.fahd.cleanPR.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.fahd.cleanPR.CleanPrConstants.PROFILE_ROUTE;

@CrossOrigin
@RestController
@RequestMapping(PROFILE_ROUTE)
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("")
    public ResponseEntity<Object> getProfile(Authentication authentication) {
        try {
            Account account = (Account) authentication.getPrincipal();
            return ResponseEntity.ok(profileService.fetchUser(account.getUserId()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
