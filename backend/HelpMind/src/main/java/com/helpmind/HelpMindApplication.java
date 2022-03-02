package com.helpmind;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.helpmind.controller.JsonDados;
import com.helpmind.model.Curso;
import com.helpmind.service.CursoService;

@SpringBootApplication
public class HelpMindApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelpMindApplication.class, args);

	}
	

}
