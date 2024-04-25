package com.skillstorm.taxprep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.service.UserService;

@RestController
public class AuthController {

    @Autowired
    UserService userService;

    // Used by the front end to check if the user is logged in or not. Does not provide any other information.
    @GetMapping("/auth/status")
    public boolean checkAuthStatus(Authentication authentication) {
        return authentication != null && authentication.isAuthenticated();
    }

    // Register a new user
    @PostMapping("/auth/register/user")
    public ResponseEntity<Void> registerUser(@RequestBody AppUser user) {
        userService.registerUser(user);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
    
    // Register a new Admin user
    @PostMapping("/auth/register/admin")
    public ResponseEntity<Void> registerAdmin(@RequestBody AppUser user) {
        userService.registerAdmin(user);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
    
}