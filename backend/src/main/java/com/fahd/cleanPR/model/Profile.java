package com.fahd.cleanPR.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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
