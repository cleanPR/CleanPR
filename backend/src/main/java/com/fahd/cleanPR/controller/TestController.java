package com.fahd.cleanPR.controller;

import org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class TestController {

    @GetMapping("/public")
    public String publicUrl() {
        return "public";
    }

    @GetMapping("/private")
    public String privateUrl(OAuth2AuthenticatedPrincipal oauth2Principle) {

        return "private";
    }

}
