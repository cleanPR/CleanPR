package com.fahd.cleanPR.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.HttpHeaders;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CustomOauthUserService extends DefaultOAuth2UserService {

    private final static Logger LOGGER = LoggerFactory.getLogger(CustomOauthUserService.class);

    private final String GITHUB_EMAIL_ENDPOINT = "https://api.github.com/user/emails";

    private final String GITHUB_REQUEST_BODY_TYPE = "application/vnd.github+json";

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        // extract the user
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String nameAttributeKey = userRequest.getClientRegistration()
                .getProviderDetails()
                .getUserInfoEndpoint()
                .getUserNameAttributeName();

        // get the attributes
        Map<String, Object> userAttribute = new HashMap<>(oAuth2User.getAttributes());
        Object email =  userAttribute.get("email");

        // if the attributes don't contain an email then we'll fetch it
        if (email == null || ((String) email).isEmpty()) {
            getUserEmail(userRequest.getAccessToken().getTokenValue(), userAttribute);
        }

        return new DefaultOAuth2User(oAuth2User.getAuthorities(), userAttribute, nameAttributeKey);
    }


    /*
    * Setting up headers and
    * requesting for the user email
     */
    private void getUserEmail(String tokenValue, Map<String, Object> userAttribute) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(HttpHeaders.AUTHORIZATION, "token " + tokenValue);
        httpHeaders.set(HttpHeaders.ACCEPT, "application/vnd.github+json");
        HttpEntity<Void> httpEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<List<Map<String, Object>>> response = restTemplate.exchange(
                GITHUB_EMAIL_ENDPOINT,
                HttpMethod.GET,
                httpEntity,
                new ParameterizedTypeReference<List<Map<String, Object>>>() {}
        );

        List<Map<String, Object>> emails = response.getBody();
        if (emails.isEmpty()) {
            return;
        }

        for(Map<String, Object> map : emails){
            boolean isPrimary = (boolean) map.get("primary");
            String email = (String) map.get("email");

            if (isPrimary && email != null && !email.isEmpty()) {
                userAttribute.put("email", email);
            }
        }
    }
}
