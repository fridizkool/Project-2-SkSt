package com.skillstorm.taxprep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.service.UserService;


@RestController
public class UserApiController {
    @Autowired
    UserService userService;


    //TODO Ensure this is secured by Spring
    // Also, redact user role, password, and other info before sending
    @GetMapping("/user")
    public ResponseEntity<AppUser> getUserProfile(Authentication authentication) {
        AppUser s = (AppUser) userService.loadUserByUsername(authentication.getName());

        return new ResponseEntity<>(s, HttpStatus.OK);
    }

    @PutMapping("/user")
    public ResponseEntity<String> updateUserProfile(Authentication authentication, @RequestBody AppUser user_update) {
        String user_name = authentication.getName(); 
        // System.out.println("\n\n\n --- \n\n\n" + user_name);
        try {
            userService.updateUser(user_name, user_update);
        } catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>("User profile failed up update", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("User profile updated", HttpStatus.OK);
    }

}
