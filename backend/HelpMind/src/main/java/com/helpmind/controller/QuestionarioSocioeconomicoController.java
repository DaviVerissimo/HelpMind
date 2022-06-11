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

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helpmind.model.Discente;
import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.service.QuestionarioSocioeconomicoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/QuestionarioSocioeconomico")
public class QuestionarioSocioeconomicoController {
	
	@Autowired
	private QuestionarioSocioeconomicoService questionarioSocioeconomicoService;
	
//	@PostMapping("/salvar")
//	public ResponseEntity<QuestionarioSocioeconomico> salvarQuestionarioSocioeconomico(@RequestBody QuestionarioSocioeconomico questionarioSocioeconomico) throws URISyntaxException {
//		LocalDateTime data = LocalDateTime.now();
//		try {
//			//Discente discente = discenteService.criarDiscente(questionarioSocioeconomico);
//			questionarioSocioeconomico.setData(data);
//			questionarioSocioeconomicoService.salvar(questionarioSocioeconomico);
//			} catch(Exception e){}
//		
//		return ResponseEntity.created(new URI("/QuestionarioSocioeconomico/" + questionarioSocioeconomico.getId())).body(questionarioSocioeconomico);
//	}
	
	/*Todos os reportes e questionarios precisam ter um metodo para buscar o discente dono*/
	
	@GetMapping("ListaQuestionarioSocioeconomico")
	public List<QuestionarioSocioeconomico> retornarListaQuestionarioSocioeconomico(){
		
		return questionarioSocioeconomicoService.retornarListaQuestionarioSocioeconomico();
	}

}
