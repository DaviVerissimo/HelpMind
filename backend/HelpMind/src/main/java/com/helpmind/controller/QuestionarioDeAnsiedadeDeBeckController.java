package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.service.QuestionarioDeAnsiedadeDeBeckService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/QuestionarioDeAnsiedadeDeBeck")
public class QuestionarioDeAnsiedadeDeBeckController {

	@Autowired
	private QuestionarioDeAnsiedadeDeBeckService  questionarioDeAnsiedadeDeBeckService;
	
	@PostMapping("salvar")
	public ResponseEntity<QuestionarioDeAnsiedadeDeBeck> salvarQuestionarioDeDepressaoDeBeck(@RequestBody List<String> questoesResportas) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
		
		try {
			questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(questoesResportas);
			questionario.setData(data);
			questionario.calcularNota();
			questionario.definirStatus();
			questionarioDeAnsiedadeDeBeckService.salvar(questionario);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/QuestionarioDeAnsiedadeDeBeck/" + questionario.getId())).body(questionario);
	}
	
	@GetMapping("ListaQuestionarioDeAnsiedadeDeBeck")
	public List<QuestionarioDeAnsiedadeDeBeck> retornarListaQuestionarioDeAnsiedadeDeBeck(){
		
		return questionarioDeAnsiedadeDeBeckService.retornarListaQuestionarioDeAnsiedadeDeBeck();
	}
}
