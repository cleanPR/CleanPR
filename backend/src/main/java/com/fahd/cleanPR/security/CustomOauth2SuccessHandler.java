package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Account;
import com.fahd.cleanPR.model.Profile;
import com.fahd.cleanPR.repository.AccountRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class CustomOauth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomOauth2SuccessHandler.class);

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AccountService accountService;

    @Autowired
    private ProfileService profileService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        try {

            // 1) extracting oauth user and getting repo urls
            LOGGER.info("Authentication successful");
            OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();
            Map<String, String> repoUrl = new HashMap<>();
            repoUrl.put("repos_url", oauth2User.getAttribute("repos_url"));
            repoUrl.put("organizations_url", oauth2User.getAttribute("organizations_url"));

            // 2) Building account and profile models
            Account account = Account.builder()
                    .userId(oauth2User.getAttribute("id"))
                    .userLogin(oauth2User.getAttribute("login"))
                    .email(oauth2User.getAttribute("email"))
                    .urls(repoUrl)
                    .build();

            Profile profile = Profile.builder()
                    .userId(oauth2User.getAttribute("id"))
                    .login(oauth2User.getAttribute("login"))
                    .avatarUrl(oauth2User.getAttribute("avatar_url"))
                    .build();

            // 3) saving user data
            Account savedAccount = accountService.saveOrUpdate(account);
            LOGGER.info("Saved user account for userId={}", savedAccount.getUserId());

            Profile savedProfile = profileService.updateOrSave(profile);

            // 4) generating jwt for API authenticetion

            response.sendRedirect("http://localhost:3000");
        } catch (Exception e) {
            LOGGER.error("Error after authentication error={}", e.getMessage());
            // TODO: redirect back to the login page
        }
    }


}
