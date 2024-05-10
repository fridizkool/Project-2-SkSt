package com.skillstorm.taxprep.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins( 
                    "https://group5proj2.skillstorm-congo.com", 
                    "group5proj2.skillstorm-congo.com",
                    "team5.skillstorm-congo.com",
                    "https://team5.skillstorm-congo.com",
                    "http://group5proj2taxprep-env.eba-ieynwx8g.us-east-1.elasticbeanstalk.com",
                    "https://group5proj2taxprep-env.eba-ieynwx8g.us-east-1.elasticbeanstalk.com",
                    "group5proj2taxprep-env.eba-ieynwx8g.us-east-1.elasticbeanstalk.com"

                    
                    ) 
                .allowedMethods("GET", "POST", "PUT", "DELETE") 
                .allowedHeaders("*"); 
    }
}
