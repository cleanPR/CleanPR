package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Account;
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

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        LOGGER.info("Authentication successful");
        OAuth2User auth2User = (OAuth2User) authentication.getPrincipal();
        Map<String, String> repoUrl = new HashMap<>();
        repoUrl.put("repos_url", auth2User.getAttribute("repos_url"));
        repoUrl.put("organizations_url", auth2User.getAttribute("organizations_url"));


        Account account = Account.builder()
                .userId(auth2User.getAttribute("id"))
                .userLogin(auth2User.getAttribute("login"))
                .email(auth2User.getAttribute("email"))
                .urls(repoUrl)
                .build();

        Account savedAccount = accountService.saveOrUpdate(account);

        LOGGER.info("Saved user account for userId={}", savedAccount.getUserId());

        response.sendRedirect("http://localhost:3000");
    }


}
