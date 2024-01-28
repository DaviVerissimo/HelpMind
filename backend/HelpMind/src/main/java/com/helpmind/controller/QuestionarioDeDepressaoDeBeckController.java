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

import com.helpmind.model.Questao;
import com.helpmind.model.QuestionarioDeDepressaoDeBeck;
import com.helpmind.model.QuestionarioSimples;
import com.helpmind.service.QuestionarioDeDepressaoDeBeckService;

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
	public ResponseEntity<QuestionarioDeDepressaoDeBeck> salvarQuestionarioDeDepressaoDeBeck(@RequestBody QuestionarioSimples questionarioSimples) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		QuestionarioDeDepressaoDeBeck questionario = new QuestionarioDeDepressaoDeBeck();
		try {
			questionario = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(questionarioSimples.getLista());
			questionario.setData(data);
			questionario.setIdDiscente(questionarioSimples.getId());
			questionario.setSemestre(questionarioSimples.getSemestre());
			questionario.calcularNota();
			questionario.definirStatus();
			questionario.setDieta(questionarioSimples.isDieta());
			questionarioDeDepressaoDeBeckService.salvar(questionario);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/QuestionarioDeDepressaoDeBeck/" + questionario.getId())).body(questionario);
	}
	
	@GetMapping("ListaQuestionarioDepressaoDeBeck")
	public List<QuestionarioDeDepressaoDeBeck> retornarListaQuestionarioDeAnsiedadeDeBeck(){
		
		return questionarioDeDepressaoDeBeckService.retornarListaQuestionarioDeDepressaoDeBeck();
	}
	
	@PostMapping("/buscaQuestionariosPeloID")
	public List<QuestionarioDeDepressaoDeBeck> retornarListaQuestionariosAnsiedadeById(@RequestBody String id){
		
		return questionarioDeDepressaoDeBeckService.buscaQuestionariosPeloIdDoDiscente(id);
		
	}
	
	@PostMapping("/buscaQuestionarioPeloID")
	public List<String> retornarQuestionarioDepressaoById(@RequestBody String iDQuestionario){
		Integer ID_QUESTIONARIO = Integer.parseInt(iDQuestionario);
		
		List<String> listaResporta = QuestionarioSimples
				.converteListaDeQuestaoEmStrings(questionarioDeDepressaoDeBeckService
				.retornaQuestionarioPeloID(ID_QUESTIONARIO)
				.getListaDeQuestoes());
		//incluindo dieta
		String dieta =  Boolean.toString(questionarioDeDepressaoDeBeckService.retornaQuestionarioPeloID(ID_QUESTIONARIO).isDieta()) ;
		listaResporta.add(dieta);
		
		return listaResporta;
	}

}
