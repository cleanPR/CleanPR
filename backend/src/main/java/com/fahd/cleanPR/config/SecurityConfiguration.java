package com.fahd.cleanPR.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import java.net.http.HttpRequest;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                .authorizeHttpRequests(
                        requests -> requests.requestMatchers("/api/v1/public").permitAll()
                                .anyRequest().authenticated()
                        )
                        .oauth2Login(Customizer.withDefaults());

        return http.build();
    }

}
