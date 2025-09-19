package com.fahd.cleanPR;

public interface CleanPrConstants {
    String API_PREFIX = "api/v1";
    String PROFILE_ROUTE = API_PREFIX + "/profile";
    String GITHUB_WEB_HOOK_ROUTE = API_PREFIX + "/webhook";
    String GITHUB_CONTROLLER_ROUTE = API_PREFIX + "/github";

    // api constans
    String BEARER = "Bearer ";
    String AUTHORIZATION = "Authorization";
    String GITHUB_REQUEST_BODY_TYPE = "application/vnd.github+json";
    String GITHUB_BASE_URL = "https://api.github.com";
    String ACCEPT = "Accept";
}
