package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioSimples;
import com.helpmind.service.QuestionarioDeAnsiedadeDeBeckService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/QuestionarioDeAnsiedadeDeBeck")
public class QuestionarioDeAnsiedadeDeBeckController {
	
	@Autowired
	private QuestionarioDeAnsiedadeDeBeckService  questionarioDeAnsiedadeDeBeckService;
	
	@PostMapping("salvar")
	public ResponseEntity<QuestionarioDeAnsiedadeDeBeck> salvarQuestionarioDeAnsiedadeDeBeck(@RequestBody QuestionarioSimples questionarioSimples) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
		
		try {
			questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(questionarioSimples.getLista());
			questionario.setData(data);
			questionario.setIdDiscente(questionarioSimples.getId());
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
	
	
	@PostMapping("/buscaQuestionariosPeloID")
	public List<QuestionarioDeAnsiedadeDeBeck> retornarListaQuestionariosAnsiedadeById(@RequestBody String id){
		
		return questionarioDeAnsiedadeDeBeckService.buscaQuestionariosPeloIdDoDiscente(id);
		
	}
	
	@PostMapping("/buscaQuestionarioPeloID")
	public List<String> retornarQuestionarioSocioeconomicoById(@RequestBody String iDQuestionario){
		Integer ID_QUESTIONARIO = Integer.parseInt(iDQuestionario);
		
		List<Questao> lista = questionarioDeAnsiedadeDeBeckService.retornaQuestionarioPeloID(ID_QUESTIONARIO).getListaDeQuestoes();
		List<String> listaResporta = new ArrayList<String>();
		for (int i = 0; i < lista.size(); i++) {
			String resporta = lista.get(i).getResporta();
			listaResporta.add(resporta);
		}
		return listaResporta;
	}
}
