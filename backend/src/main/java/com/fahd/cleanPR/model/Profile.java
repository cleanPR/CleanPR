package com.fahd.cleanPR.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Profile {

    @Id
    @Column
    private int userId;
    @Column
    private String login;
    @Column
    private String avatarUrl;
}
