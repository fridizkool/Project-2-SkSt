package com.skillstorm.taxprep.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins( "team5.skillstorm-congo.com") 
                .allowedMethods("GET", "POST", "PUT", "DELETE") 
                .allowedHeaders("*"); 
    }
}
