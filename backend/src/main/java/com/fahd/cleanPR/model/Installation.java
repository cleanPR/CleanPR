package com.fahd.cleanPR.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Installation {


    @Id
    @Column
    int installationId;
    @Column
    int userId;
    @Column
    String accessTokenUrl;
}
