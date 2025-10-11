package com.fahd.cleanPR.controller;

import com.fahd.cleanPR.handler.BaseEventHandler;
import com.fahd.cleanPR.handler.InstallationEventHandler;
import com.fahd.cleanPR.handler.PullRequestHandler;
import com.fahd.cleanPR.handler.RepoEventHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    private RepoEventHandler repoEventHandler;

    private PullRequestHandler pullRequestHandler;


    @Autowired
    public GitHubWebhooks(
            final InstallationEventHandler installationEventHandler,
            final RepoEventHandler repoEventHandler,
            final PullRequestHandler pullRequestHandler) {
        this.installationEventHandler = installationEventHandler;
        this.repoEventHandler = repoEventHandler;
        this.pullRequestHandler = pullRequestHandler;
        this.eventDispatcher = Map.of(
                "created", installationEventHandler,
                "deleted", installationEventHandler,
                "added", repoEventHandler,
                "removed", repoEventHandler,
                "closed", pullRequestHandler,
                "opened", pullRequestHandler
        );
    }

    /**
     * EventHandlerMapping={
     *     created or deleted -> installationEventHandler
     *     repoRemove or repoAdd -> RepoEventHandler
     *     prOpened or prClosed -> prEventHandler
     * }
     * */
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
