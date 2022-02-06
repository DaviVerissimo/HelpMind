package com.helpmind.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cursos")
public class CursosController {
	
	@GetMapping("/hhhh")
	public ModelAndView listarTodosReportes() {
		Object objeto;
		ModelAndView modelAndView = new ModelAndView("");
		
		
		return modelAndView;
		}
	@GetMapping("/")
	public String x() {
        // parsing file "JSONExample.json"
        Object ob = null;
		try {
			ob = new JSONParser().parse(new FileReader("/home/davi/WORKSPACEs/Projeto I/HelpMind/backend/HelpMind/src/main/java/com/helpmind/controller/cursos.json"));
		} catch (IOException | ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        // typecasting ob to JSONObject
        JSONObject js = (JSONObject) ob;
        String x = js.toString();
        //String firstName = (String) js.get("firstName");
        //String lastName = (String) js.get("lastName");

        //System.out.println("First name is: " + firstName);
        //System.out.println("Last name is: " +lastName);
		return x;
	}

}
