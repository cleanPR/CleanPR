package com.fahdsaleh.cleanPR.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.fahdsaleh.cleanPR.CleanPrConstants.AUTH_API_PREFIX;


@Controller
@CrossOrigin
@RequestMapping(AUTH_API_PREFIX)
public class GitHubAuthController {

    @PostMapping("/authenticate")
    public void authenticate() {

    }

}
