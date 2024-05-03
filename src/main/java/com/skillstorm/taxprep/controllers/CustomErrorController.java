package com.skillstorm.taxprep.controllers;

import java.io.IOException;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class CustomErrorController implements ErrorController {


    @GetMapping("/error")
    public ModelAndView toErrorPage(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return new ModelAndView("forward:/");
    }
}
