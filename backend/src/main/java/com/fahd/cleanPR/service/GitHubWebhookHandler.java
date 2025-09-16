package com.fahd.cleanPR.service;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class GitHubWebhookService {

    public void triggerEvent(Map<String, Object> webHookPayload) {
        String action = (String) webHookPayload.get("action");
        switch (action){
            case action.e:

        }
    }
}
