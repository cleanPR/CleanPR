package com.fahd.cleanPR.security;

import com.fahd.cleanPR.model.Account;
import com.fahd.cleanPR.service.AccountService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final static Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AccountService accountService;


    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws IOException, ServletException {
        Cookie[] cookies = request.getCookies();
        Cookie jwtCookie = null;
        if (cookies != null) {
            jwtCookie = Arrays.stream(cookies)
                    .filter(cookie -> cookie.getName().equals("jwt"))
                    .findFirst()
                    .orElse(null);
        }

        // if the cookie is expired or does not exist remove it and redirect the user back to the login
        if (jwtCookie == null) {
            filterChain.doFilter(request, response);
            return;
        }

        String jwtToken = jwtCookie.getValue();
        String email = jwtService.extractSubject(jwtToken);

        // if the token is valid set the auth principle else redirect back to logIn
        if (!jwtService.isTokenValid(jwtToken, email)) {
            filterChain.doFilter(request, response);
            return;
        }

        // check if the user account exists if not don't authenticate it

        Account account = accountService.findByUserEmail(email);
        if (account != null) {

            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                    account, null, Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
            );

            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        filterChain.doFilter(request, response);
    }
}
