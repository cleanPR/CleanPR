package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Profile;
import com.fahd.cleanPR.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    /**
     * CASE 1: there might be an existing profile so we upsert using the unique mongoId
     * CASE 2: no existing profile, so we can just insert
     * */
    public Profile updateOrSave(final Profile profile) {
        return profileRepository.findByUserId(profile.getUserId())
                .map(existingProfile -> {
                        profile.setMongoId(existingProfile.getMongoId());
                        return profileRepository.save(profile);
                    }
                )
                .orElseGet(() -> profileRepository.save(profile));
    }
}
