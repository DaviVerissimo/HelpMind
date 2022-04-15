package com.helpmind.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.Questao;
import com.helpmind.service.QuestionarioDeDepressaoDeBeckService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/QuestionarioDeDepressaoDeBeck")
public class QuestionarioDeDepressaoDeBeckController {
	
	@Autowired
	private QuestionarioDeDepressaoDeBeckService questionarioDeDepressaoDeBeckService;
	
	@GetMapping("/listarQuestoesQuestionario")
	public List<Questao> listarQuestoesQuestionario(){
		List<Questao> lista = questionarioDeDepressaoDeBeckService.retornaQuestionarios().getListaDeQuestoes();
		
		return lista;
	}

}
