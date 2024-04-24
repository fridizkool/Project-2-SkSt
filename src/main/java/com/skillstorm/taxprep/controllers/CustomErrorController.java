package com.skillstorm.taxprep.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomErrorController implements ErrorController {


    @GetMapping("/error")
    public String err(Authentication authentication) {
        return "You encountered an error, " + authentication.getName() + ".";
    }
}
