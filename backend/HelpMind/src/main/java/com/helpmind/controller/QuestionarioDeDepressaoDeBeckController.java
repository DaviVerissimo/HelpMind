package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.Questao;
import com.helpmind.model.QuestionarioDeDepressaoDeBeck;
import com.helpmind.service.QuestionarioDeDepressaoDeBeckService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/QuestionarioDeDepressaoDeBeck")
public class QuestionarioDeDepressaoDeBeckController {
	
	@Autowired
	private QuestionarioDeDepressaoDeBeckService questionarioDeDepressaoDeBeckService;
	
	@GetMapping("/listarresportaQuestionario")
	public List<Questao> listarQuestoesQuestionario(){
		List<Questao> lista = questionarioDeDepressaoDeBeckService.retornaQuestionarios().getListaDeQuestoes();
		
		return lista;
	}
	
	@PostMapping("salvar")
	public ResponseEntity<QuestionarioDeDepressaoDeBeck> salvarQuestionarioDeDepressaoDeBeck(@RequestBody List<String> questoesResportas) throws URISyntaxException {
		QuestionarioDeDepressaoDeBeck questionario = new QuestionarioDeDepressaoDeBeck();
		try {
			questionario = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(questoesResportas);
			questionarioDeDepressaoDeBeckService.salvar(questionario);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/QuestionarioDeDepressaoDeBeck/" + questionario.getId())).body(questionario);
	}

}
