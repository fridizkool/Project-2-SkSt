package com.skillstorm.taxprep.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.models.User;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.UserRepository;

@Service
public class TestService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private TaxInfoRepository taxInfoRepo;

    public List<User> getUsers() {
        return userRepo.findAll();
    }

    public List<TaxInfo> getTaxes() {
        return taxInfoRepo.findAll();
    }

}
