package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.service.QuestionarioSocioeconomicoService;

@RestController
@RequestMapping("/QuestionarioSocioeconomico")
public class QuestionarioSocioeconomicoController {
	
	@Autowired
	private QuestionarioSocioeconomicoService questionarioSocioeconomicoService;
	
	@PostMapping("salvar")
	public ResponseEntity<QuestionarioSocioeconomico> salvarQuestionarioSocioeconomico(@RequestBody QuestionarioSocioeconomico questionarioSocioeconomico) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		try {
			questionarioSocioeconomico.setData(data);
			questionarioSocioeconomicoService.salvar(questionarioSocioeconomico);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/QuestionarioSocioeconomico/" + questionarioSocioeconomico.getId())).body(questionarioSocioeconomico);
	}
	
	@GetMapping("ListaQuestionarioSocioeconomico")
	public List<QuestionarioSocioeconomico> retornarListaQuestionarioSocioeconomico(){
		
		return questionarioSocioeconomicoService.retornarListaAllQuestionarioSocioeconomico();
	}
	
	@PostMapping("/buscaQuestionariosPeloID")
	public List<QuestionarioSocioeconomico> retornarListaQuestionariosSocioeconomicoById(@RequestBody String id){
		Integer ID = Integer.parseInt(id);
		
		return questionarioSocioeconomicoService.buscaQuestionariosPeloIdDoDiscente(ID);
	}
	
	@PostMapping("/buscaQuestionarioPeloID")
	public QuestionarioSocioeconomico retornarQuestionarioSocioeconomicoById(@RequestBody String iDQuestionario){
		Integer ID_QUESTIONARIO = Integer.parseInt(iDQuestionario);
		
		return questionarioSocioeconomicoService.retornaQuestionarioPeloID(ID_QUESTIONARIO);
	}

}
