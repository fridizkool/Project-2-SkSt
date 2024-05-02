package com.skillstorm.taxprep.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.AppUser;


@RestController
public class UserApiController {


    //TODO Ensure this is secured by Spring
    @GetMapping("/user")
    public ResponseEntity<AppUser> getUserProfile(Authentication authentication) {
        AppUser s = (AppUser) authentication.getPrincipal();
        return new ResponseEntity<>(s, HttpStatus.OK);
    }

}
