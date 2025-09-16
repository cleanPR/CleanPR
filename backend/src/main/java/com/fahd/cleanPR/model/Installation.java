package com.fahd.cleanPR.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Repository {

    String mongoId;

    String userId;
    String repoId;
    List<String> repoFilePaths;
}
