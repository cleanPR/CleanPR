package com.fahd.cleanPR.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Repository {

    @Id
    int repoId;
    @ManyToOne
    @JoinColumn(name="userId")
    Profile userProfile;
    int installationId;

}
