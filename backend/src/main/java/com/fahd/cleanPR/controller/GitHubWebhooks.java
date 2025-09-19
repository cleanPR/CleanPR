package com.fahd.cleanPR.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.fahd.cleanPR.CleanPrConstants.GITHUB_WEB_HOOK_ROUTE;

@RestController
@CrossOrigin
@RequestMapping(GITHUB_WEB_HOOK_ROUTE)
public class GitHubWebhooks {


    @PostMapping("/github")
    public void gitHubWebhookEvent(@RequestBody Map<String, Object> webHookPayload) {
        System.out.println(webHookPayload.toString());
    }

}
