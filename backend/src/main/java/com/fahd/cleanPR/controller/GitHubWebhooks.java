package com.fahd.cleanPR.controller;

import com.fahd.cleanPR.handler.BaseEventHandler;
import com.fahd.cleanPR.handler.InstallationEventHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static com.fahd.cleanPR.CleanPrConstants.GITHUB_WEB_HOOK_ROUTE;

@RestController
@CrossOrigin
@RequestMapping(GITHUB_WEB_HOOK_ROUTE)
public class GitHubWebhooks {

    private final Logger LOGGER = LoggerFactory.getLogger(GitHubWebhooks.class);

    private BaseEventHandler baseEventHandler;

    private Map<String, BaseEventHandler> eventDispatcher;

    private InstallationEventHandler installationEventHandler;



    /**
     * EventHandlerMapping={
     *     created or deleted -> installationEventHandler
     *     repoRemove or repoAdd -> RepoEventHandler
     *     prOpened or prClosed -> prEventHandler
     * }
     * */
    @Autowired
    public GitHubWebhooks(
            final InstallationEventHandler installationEventHandler
    ) {
        this.installationEventHandler = installationEventHandler;
        this.eventDispatcher = Map.of(
                "created", installationEventHandler,
                "deleted", installationEventHandler
        );
    }

    @PostMapping("/github")
    public void gitHubWebhookEvent(@RequestBody Map<String, Object> webHookPayload) {

        // mapping the handler based on the action
        String action = (String) webHookPayload.get("action");
        baseEventHandler = eventDispatcher.getOrDefault(action, null);

        if (baseEventHandler != null) {
            baseEventHandler.triggerEvent(webHookPayload, action);
        } else {
            LOGGER.info("no handler for action= {}", action);
        }

    }

}
