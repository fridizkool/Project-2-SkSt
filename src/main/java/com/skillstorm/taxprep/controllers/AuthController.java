package com.skillstorm.taxprep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

    @GetMapping("/auth/status")
    public boolean checkAuthStatus(Authentication authentication) {
        // Check if the user is authenticated
        return authentication != null && authentication.isAuthenticated();
    }


    @PostMapping("/auth/register")
    public ResponseEntity<Void> register(@RequestBody AppUser user) {
        userService.register(user);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
    

    @PostMapping("/auth/register/admin")
    public ResponseEntity<Void> registerAdmin(@RequestBody AppUser user) {
        userService.registerAdmin(user);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
    
}