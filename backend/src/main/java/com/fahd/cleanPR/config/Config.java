package com.fahd.cleanPR.config;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.DefaultUriBuilderFactory;

import static com.fahd.cleanPR.CleanPrConstants.GITHUB_BASE_URL;

@Configuration
public class Config {

    // using this template for api to github
    @Bean
    public RestTemplate gitHubRestTemplate(RestTemplateBuilder restTemplateBuilder) {
        DefaultUriBuilderFactory uriBuilderFactory = new DefaultUriBuilderFactory(GITHUB_BASE_URL);

        return restTemplateBuilder
                .uriTemplateHandler(uriBuilderFactory)
                .build();
    }

}
