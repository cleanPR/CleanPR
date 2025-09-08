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
import java.util.Optional;

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
        try {
            Cookie[] cookies = request.getCookies();
            Cookie jwtCookie = null;
            if (cookies != null) {
                jwtCookie = Arrays.stream(request.getCookies())
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
            String userId = jwtService.extractSubject(jwtToken);

            // if the token is valid set the auth principle else redirect back to logIn
            if (!jwtService.isTokenValid(jwtToken, userId)) {
                filterChain.doFilter(request, response);
                return;
            }

            Optional<Account> account = accountService.findByUserId(Integer.parseInt(userId));
            if (!account.isEmpty()) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        account.get(), null, Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
                );
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            LOGGER.error("failed while filtering out cookies, user is being redirected back to login");
        } finally {
            filterChain.doFilter(request, response);
        }
    }

    public Cookie buildEmptyCookie() {
        Cookie cookie = new Cookie("jwt", null) {{
            setPath("/");
            setMaxAge(0);
            setHttpOnly(true);
            setSecure(false);
        }};
        return cookie;
    }

    public void redirectBackToLogin(final HttpServletResponse response) throws IOException {
        Cookie cookie = buildEmptyCookie();
        response.addCookie(cookie);
        response.sendRedirect("http://localhost:3000");
    }
}
