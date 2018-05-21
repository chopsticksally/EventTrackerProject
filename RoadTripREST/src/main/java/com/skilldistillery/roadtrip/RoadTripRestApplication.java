package com.skilldistillery.roadtrip;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class RoadTripRestApplication extends SpringBootServletInitializer {
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		    return application.sources(RoadTripRestApplication.class);
	  } 

	public static void main(String[] args) {
		SpringApplication.run(RoadTripRestApplication.class, args);
	}
}
