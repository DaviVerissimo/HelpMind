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

import com.helpmind.model.Discente;
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
	
	@PostMapping("/salvarDiscenteComBaseQuestionarioSoxioeconomico")
	public ResponseEntity<QuestionarioSocioeconomico> criarDiscenteComBaseNoPrimeiroQuestionarioSocioeconomico(@RequestBody QuestionarioSocioeconomico questionarioSocioeconomico) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		try {
			questionarioSocioeconomico.setData(data);
			String email = questionarioSocioeconomico.getEmail();
			if(discenteService.isDiscente(email)){
				discenteService.addNovoQuestionarioSocioeconomico(questionarioSocioeconomico);
			}
			else {
				Discente discente = discenteService.criarDiscente(questionarioSocioeconomico);
			}
			
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/discente/" + questionarioSocioeconomico.getId())).body(questionarioSocioeconomico);
	}
	
	@GetMapping("/isDiscente")
	public boolean isDiscenteComCadrasto(String email) { 

		return discenteService.isDiscente(email);
	}
	
	@PostMapping("/buscaDiscentePorID")
	public Discente retornaDiscentePeloID(@RequestBody String id) {
		Integer ID = Integer.parseInt(id);
		Discente discente = null;
		discente = discenteService.buscaDiscentePorID(ID);
		return discente;
	}

}
