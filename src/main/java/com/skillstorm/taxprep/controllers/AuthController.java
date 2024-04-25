package com.skillstorm.taxprep.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/auth/status")
    public boolean checkAuthStatus(Authentication authentication) {
        // Check if the user is authenticated
        return authentication != null && authentication.isAuthenticated();
    }
}