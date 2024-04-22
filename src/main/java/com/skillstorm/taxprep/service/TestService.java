package com.skillstorm.taxprep.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.taxprep.models.User;
import com.skillstorm.taxprep.repository.UserRepository;

@Service
public class TestService {
    @Autowired
    private UserRepository userRepo;

    public List<User> getAll() {
        return userRepo.findAll();
    }

}
