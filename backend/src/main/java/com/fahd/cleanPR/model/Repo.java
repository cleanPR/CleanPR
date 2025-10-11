package com.fahd.cleanPR.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Repo {

    @Id
    int repoId;

    @Column
    int userId;

    @Column
    int installationId;

    @Column
    String repoName;

    @Column
    boolean isPrivate;
}
