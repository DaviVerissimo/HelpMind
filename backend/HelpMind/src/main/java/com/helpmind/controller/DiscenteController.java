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

import com.helpmind.model.Discente;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.service.DiscenteService;

/**
 * @author davi
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/discente")
public class DiscenteController {
	
	@Autowired
	private DiscenteService discenteService;
	
	@GetMapping("/allDiscentes")
	public List<Discente> retornaTodosDiscentes() {
		
		return discenteService.retornaAllDiscentes();
	}
	
	@PostMapping("salvarDiscente")
	public Discente novoDiscente(@RequestBody QuestionarioSocioeconomico questionarioSocioeconomico) {
		Discente discente = discenteService.criarDiscente(questionarioSocioeconomico);
		
		return discente;
	}
	
	@PostMapping("/salvar")
	public ResponseEntity<QuestionarioSocioeconomico> salvarQuestionarioSocioeconomico(@RequestBody QuestionarioSocioeconomico questionarioSocioeconomico) throws URISyntaxException {
		//QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
		try {
			Discente discente = discenteService.criarDiscente(questionarioSocioeconomico);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/discente/" + questionarioSocioeconomico.getId())).body(questionarioSocioeconomico);
	}

	
	@GetMapping("/teste1")
	public Discente testePesquisa() { // funciona
		 QuestionarioSocioeconomico questionarioSocioeconomico = new QuestionarioSocioeconomico();
		 questionarioSocioeconomico.setNome("Patricia");
		 questionarioSocioeconomico.setEmail("Patricia@gmail.com");
//		 questionarioSocioeconomico.setIdade(28);
		 Discente discente = discenteService.addNovoQuestionarioSocioeconomico(questionarioSocioeconomico);
		
		return discente;
	}
	
	@GetMapping("/teste2")
	public Discente testeIncluirNovoDiscente() { //funciona
		 QuestionarioSocioeconomico questionarioSocioeconomico = new QuestionarioSocioeconomico();
		 questionarioSocioeconomico.setNome("Patricia");
		 questionarioSocioeconomico.setEmail("Patricia@gmail.com");
//		 questionarioSocioeconomico.setIdade(28);
		 discenteService.criarDiscente(questionarioSocioeconomico);
		
		return null;
	}
	
	@GetMapping("/teste3")
	public List< QuestionarioSocioeconomico > testeRetornarQuesquionariosSocioeconomico() {
		 String email = "Patricia@gmail.com";
		 List< QuestionarioSocioeconomico > lista =discenteService.retornaListaQuestionarioSocioeconomico(email);
		return lista;
	}

	@GetMapping("/teste4")
	public QuestionarioSocioeconomico testeAddNovoQuestionarioSocioeconomico() {
		 QuestionarioSocioeconomico questionarioSocioeconomico = new QuestionarioSocioeconomico();
		 questionarioSocioeconomico.setNome("Patricia");
		 questionarioSocioeconomico.setEmail("Patricia@gmail.com");
//		 questionarioSocioeconomico.setIdade(32);
		 discenteService.addNovoQuestionarioSocioeconomico(questionarioSocioeconomico);
		 return questionarioSocioeconomico;
	}
	
	@GetMapping("/teste5")
	public QuestionarioSocioeconomico testeRetornaUltimoQuestionario() {
		 String email = "Patricia@gmail.com";
		 QuestionarioSocioeconomico questionario = discenteService.retornaUltimoQuestionarioSocioeconomico(email);
		 
		return questionario;
	}

}
