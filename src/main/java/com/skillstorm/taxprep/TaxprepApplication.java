package com.skillstorm.taxprep;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class TaxprepApplication {	
	public static void main(String[] args) {
		SpringApplication.run(TaxprepApplication.class, args);
	}

}
