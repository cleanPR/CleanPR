package com.fahd.cleanPR.model;

import org.springframework.data.mongodb.core.annotation.Collation;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Profile {
    private String login;
    private String avatar_url;

}
