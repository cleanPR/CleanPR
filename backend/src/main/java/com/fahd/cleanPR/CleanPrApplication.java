package com.fahd.cleanPR;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.fahd.cleanPR")
public class CleanPrApplication {

	public static void main(String[] args) {
		SpringApplication.run(CleanPrApplication.class, args);
	}

}
