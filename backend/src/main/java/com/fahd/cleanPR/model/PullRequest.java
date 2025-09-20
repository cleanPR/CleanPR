package com.fahd.cleanPR.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.OffsetDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PullRequest {

    @Id
    @Column
    private int Id;
    @Column
    private int repoId;
    @Column
    private String title;
    @Enumerated(EnumType.STRING)
    @Column
    private Status status;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private OffsetDateTime openedAt;
    @Column
    private OffsetDateTime reviewedAt;
    @Column
    private OffsetDateTime closedAt;
    @Column
    private String url;
}
