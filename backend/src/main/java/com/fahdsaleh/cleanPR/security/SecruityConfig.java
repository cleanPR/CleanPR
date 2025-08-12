package com.fahdsaleh.cleanPR.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@EnableWebSecurity
public class SecruityConfig {

    private final OAuth2LoginSuccessHandler oauth2LoginSuccessHandler;

    @Autowired
    public SecruityConfig(OAuth2LoginSuccessHandler oauth2LoginSuccessHandler) {
        this.oauth2LoginSuccessHandler = oauth2LoginSuccessHandler;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(request ->
                        request.requestMatchers(
                        "/oauth2/**", "/login/**")
                                .permitAll()
                                .anyRequest()
                                .authenticated()
                ).oauth2Login(oauth2 -> oauth2.successHandler(oauth2LoginSuccessHandler))
                .build();

    }
}
