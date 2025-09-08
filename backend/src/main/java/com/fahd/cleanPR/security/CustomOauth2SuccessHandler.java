package com.fahd.cleanPR.security;

import com.fahd.cleanPR.model.Account;
import com.fahd.cleanPR.model.Profile;
import com.fahd.cleanPR.repository.AccountRepository;
import com.fahd.cleanPR.service.AccountService;
import com.fahd.cleanPR.service.ProfileService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
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

    @Autowired
    private JwtService jwtService;

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
            Account account = buildAccountModel(oauth2User, repoUrl);
            Profile profile = buildProfile(oauth2User);

            // 3) saving user data
            Account savedAccount = accountService.saveOrUpdate(account);
            LOGGER.info("Saved user account for userId={}", savedAccount.getUserId());

            Profile savedProfile = profileService.updateOrSave(profile);

            // 4) generating jwt for client API authentication
            String jwt = jwtService.generateToken(account);
            LOGGER.info("Token generated for userId={}", account.getUserId());

            // 5) create a http cookie use the jwt and redirect the user to the dash board
            Cookie jwtCookie = new Cookie("jwt", jwt);
            jwtCookie.setSecure(false);
            jwtCookie.setPath("/");
            jwtCookie.setHttpOnly(true);
            // getting the expiration date for the token in ms and converting it to seconds = 86,000 seconds = 24 hours
            jwtCookie.setMaxAge((int) jwtService.extractExpirationDate(jwt).getTime() / 1000);
            response.addCookie(jwtCookie);


            // remove JSESSIONID because we'll use the jwt as a cookie
            Cookie jsessionCookie = new Cookie("JSESSIONID", null);
            jsessionCookie.setPath("/");
            jsessionCookie.setMaxAge(0);
            response.addCookie(jsessionCookie);

            response.sendRedirect("http://localhost:3000/dashboard");
        } catch (Exception e) {
            LOGGER.error("Error after authentication error={}", e.getMessage());
            // TODO: redirect back to the login page

            // in case of an error we'll set max age of the cookie 0 so it doesn't stay in the browser
            Cookie cookie = new Cookie("jwt", null);
            cookie.setMaxAge(0);
            cookie.setPath("/");
            cookie.setHttpOnly(true);
            response.addCookie(cookie);
            response.sendRedirect("http://localhost:3000");
        }
    }

    public Profile buildProfile(OAuth2User oauth2User) {
        return Profile.builder()
                .userId(oauth2User.getAttribute("id"))
                .login(oauth2User.getAttribute("login"))
                .avatarUrl(oauth2User.getAttribute("avatar_url"))
                .build();
    }

    public Account buildAccountModel(OAuth2User oauth2User, Map<String, String> repoUrl) {
        return Account.builder()
                .userId(oauth2User.getAttribute("id"))
                .userLogin(oauth2User.getAttribute("login"))
                .email(oauth2User.getAttribute("email"))
                .urls(repoUrl)
                .build();
    }

}
