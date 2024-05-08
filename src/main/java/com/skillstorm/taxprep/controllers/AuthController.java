package com.skillstorm.taxprep.controllers;

import java.io.IOException;

import org.hibernate.internal.ExceptionConverterImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.AuthStatus;
import com.skillstorm.taxprep.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@RestController
public class AuthController {

    @Autowired
    UserService userService;

    // Used by the front end to check if the user is logged in or not. Does not provide any other information.
    @GetMapping("/auth/status")
    public AuthStatus returnAuthStatus(Authentication authentication) {
        AuthStatus authStatus = new AuthStatus();
        try{
            AppUser u = (AppUser) userService.loadUserByUsername(authentication.getName());
            boolean isAuthenticated = authentication.isAuthenticated();
            String tempRole = u.getRole();

            String userRole = "NONE";
            if(tempRole.equals("ROLE_USER")){
                userRole = "USER";
            } else if(tempRole.equals("ROLE_ADMIN")){
                userRole = "ADMIN";
            }

            authStatus.setAuthenticated(isAuthenticated);;
            authStatus.setUserRole(userRole);
        } catch (NullPointerException e){
            // Do nothing, return default AuthStatus object
        } catch (Exception e){
            System.out.println("That was not supposed to happen.");
        }

        return authStatus;
    }

    // Register a new user
    @PostMapping("/auth/register/user")
    public ResponseEntity<Void> registerUser(@RequestBody AppUser user) {
        try{
            userService.registerUser(user);
        } catch (Exception e){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
    
    // Register a new Admin user
    @PostMapping("/auth/register/admin")
    public ResponseEntity<Void> registerAdmin(@RequestBody AppUser user) {
        try{
            userService.registerAdmin(user);
        } catch (Exception e){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }


    @GetMapping("/admin/hello")
    public String adminHello(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return "admin logged in";
    }
    @GetMapping("/user/hello")
    public String userHello(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return "user logged in";
    }

    // Reset user's password
    @PutMapping("/user/password")
    public ResponseEntity<Void> resetUserPassword(Authentication authentication, @RequestBody AppUser user) {
        try{
            userService.resetUserPassword(authentication.getName(), user);
        } catch (Exception e){
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    
}