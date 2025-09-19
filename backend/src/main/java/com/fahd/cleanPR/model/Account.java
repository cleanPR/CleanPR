package com.fahd.cleanPR.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Account {

    @Id
    @Column
    private String userId;
    @Column
    private String userLogin;
    @Column
    private String email;
}
