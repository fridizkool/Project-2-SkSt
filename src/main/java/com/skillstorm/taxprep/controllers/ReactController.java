package com.skillstorm.taxprep.controllers;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;

/**
 * The React front end uses react-router-dom, which handles routing for us. This controller overrides any routes the frontend system uses for routing, allowing the front end to handle routes rather than Spring taking over and responding to those route requests. 
 */
@Controller
public class ReactController {

    @RequestMapping("/filing")
    public ModelAndView toFiling(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return new ModelAndView("forward:/");
    }

    @RequestMapping("/login")
    public ModelAndView toLogin(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return new ModelAndView("forward:/");
    }


}