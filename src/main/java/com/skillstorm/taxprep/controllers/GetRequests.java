package com.skillstorm.taxprep.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.User;
import com.skillstorm.taxprep.service.TestService;

@RestController
public class GetRequests {
    @Autowired
    private TestService s;


    //Warehouse mappings
    @GetMapping("/api/all")
    public List<User> getAll() {
        return s.getAll();
    }
}
