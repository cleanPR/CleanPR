package com.fahd.cleanPR.controller;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.web.bind.annotation.*;

import static com.fahd.cleanPR.CleanPrConstants.GITHUB_WEB_HOOK_ROUTE;

@RestController
@CrossOrigin
@RequestMapping(GITHUB_WEB_HOOK_ROUTE)
public class GitHubWebhooks {


    @PostMapping("/github")
    public void gitHubWebhookEvent(@RequestBody String webHookPayload) {
        JsonObject jsonObject = JsonParser.parseString(webHookPayload).getAsJsonObject();
        System.out.println(webHookPayload);
    }

}
