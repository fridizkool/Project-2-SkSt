package com.skillstorm.taxprep.controllers;

import java.io.IOException;

import org.springframework.security.core.Authentication;
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

    @RequestMapping("/create")
    public ModelAndView toCreate(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return new ModelAndView("forward:/");
    }

    @RequestMapping("/account")
    public ModelAndView toAccount(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return new ModelAndView("forward:/");
    }

    @RequestMapping("/users")
    public ModelAndView toUsers(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return new ModelAndView("forward:/");
    }

    @RequestMapping("/404")
    public ModelAndView toContentNotFound(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return new ModelAndView("forward:/");
    }

    @RequestMapping("/inaccessible")
    public ModelAndView toInaccessibleViewPage(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return new ModelAndView("forward:/");
    }


    // @RequestMapping("/error")
    // public ModelAndView toErrorPage(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //     return new ModelAndView("forward:/");
    // }
}