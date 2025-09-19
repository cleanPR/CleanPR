package com.fahd.cleanPR.service;

import com.fahd.cleanPR.model.Profile;
import com.fahd.cleanPR.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;

    @Autowired
    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public Profile updateOrSave(final Profile profile) {
        return profileRepository.save(profile);
    }

    public Profile fetchUser(int userId) {
        return profileRepository.findByUserId(userId).orElseThrow();
    }
}
