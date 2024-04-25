package com.skillstorm.taxprep.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.service.DatabaseService;

/*
 * What is the Authentication Object in Spring Security?
 * It is an interface that stores some information about the currently authenticated user. 
 * Spring Security will create and manage this object for you, you will just use it.
 * Examine the hellobasic endpoint and run the debugger on it.
 * 
 */

@RestController
public class DemoController {
    
    @Autowired
    private DatabaseService dbS;

    // You can access the authenticated user's information via SecurityContextHolder
    @GetMapping("/user/hellobasic")
    public String helloUserAlt() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return "Hello, " + authentication.getName() + "!";
    }

    //When Spring sees an Authentication parameter, it will inject Authentication object associated with the current session
    @GetMapping("/user/hello")
    public String helloUser(Authentication authentication) {
        return "I was injected. Hello, " + authentication.getName() + "!";
    }


    // Authentication object will be null if not logged in
    @GetMapping("/hello")
    public String hello(Authentication authentication) {
        String s;
        if(authentication == null){
            s = "Not authenticated, but hello!";
        } else {
            s = "You are now authenticated, " + authentication.getName() + "!";
        }
        return s;
    }

    //Can query database with information from the authenticated user
    // @GetMapping("/user/getaddress")
    // public String getAddress(Authentication authentication) {
    //     AppUser curUser = dbS.getUserByName(authentication.getName());
    //     String zipcode = curUser.getZipcode();
    //     return "Your address is, " + zipcode + ".";
    // }
}
