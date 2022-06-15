package com.helpmind.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.service.QuestionarioSocioeconomicoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/QuestionarioSocioeconomico")
public class QuestionarioSocioeconomicoController {
	
	@Autowired
	private QuestionarioSocioeconomicoService questionarioSocioeconomicoService;
	
	/*Todos os reportes e questionarios precisam ter um metodo para buscar o discente dono*/
	
	@GetMapping("ListaQuestionarioSocioeconomico")
	public List<QuestionarioSocioeconomico> retornarListaQuestionarioSocioeconomico(){
		
		return questionarioSocioeconomicoService.retornarListaQuestionarioSocioeconomico();
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
