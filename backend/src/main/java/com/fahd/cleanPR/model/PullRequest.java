package com.fahd.cleanPR.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PullRequest {

    @Id
    private int Id;
    private int repoId;
    private String title;
    private String status;
    private Date openedAt;
    private Date reviewedAt;
    private Date closedAt;
    private String url;
}
