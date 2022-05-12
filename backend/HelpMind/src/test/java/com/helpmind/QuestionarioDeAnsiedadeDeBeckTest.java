package com.helpmind;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.helpmind.model.Questao;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.repository.QuestionarioDeAnsiedadeDeBeckRepository;
import com.helpmind.service.QuestionarioDeAnsiedadeDeBeckService;

@SpringBootTest
public class QuestionarioDeAnsiedadeDeBeckTest {
	private Questao questao01 = new Questao();
	private Questao questao02 = new Questao();
	private Questao questao03 = new Questao();
	private Questao questao04 = new Questao();
	private Questao questao05 = new Questao();
	private Questao questao06 = new Questao();
	private Questao questao07 = new Questao();
	private Questao questao08 = new Questao();
	private Questao questao09 = new Questao();
	private Questao questao10 = new Questao();
	private Questao questao11 = new Questao();
	private Questao questao12 = new Questao();
	private Questao questao13 = new Questao();
	private Questao questao14 = new Questao();
	private Questao questao15 = new Questao();
	private Questao questao16 = new Questao();
	private Questao questao17 = new Questao();
	private Questao questao18 = new Questao();
	private Questao questao19 = new Questao();
	private Questao questao20 = new Questao();
	private Questao questao21 = new Questao();
	
	@Autowired
	private QuestionarioDeAnsiedadeDeBeckRepository questionarioDeAnsiedadeDeBeckRepository;
	
	@Autowired
	private QuestionarioDeAnsiedadeDeBeckService questionarioDeAnsiedadeDeBeckService;
	
	@Test
	void novoQuestionarioSucesso() {
		List<Questao> listaDeQuestoes = new ArrayList<Questao>();
		listaDeQuestoes.add(questao01);
		listaDeQuestoes.add(questao02);
		listaDeQuestoes.add(questao04);
		listaDeQuestoes.add(questao05);
		listaDeQuestoes.add(questao06);
		listaDeQuestoes.add(questao07);
		listaDeQuestoes.add(questao08);
		listaDeQuestoes.add(questao09);
		listaDeQuestoes.add(questao10);
		listaDeQuestoes.add(questao11);
		listaDeQuestoes.add(questao12);
		listaDeQuestoes.add(questao13);
		listaDeQuestoes.add(questao14);
		listaDeQuestoes.add(questao15);
		listaDeQuestoes.add(questao16);
		listaDeQuestoes.add(questao17);
		listaDeQuestoes.add(questao18);
		listaDeQuestoes.add(questao19);
		listaDeQuestoes.add(questao20);
		listaDeQuestoes.add(questao21);
		
		for(int i = 0; i < listaDeQuestoes.size(); i++) {
			listaDeQuestoes.get(i).setResporta("3");
		}
		
		QuestionarioDeAnsiedadeDeBeck questionario =  questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComQuestao(listaDeQuestoes);
		questionarioDeAnsiedadeDeBeckService.salvar(questionario);
		
		assertNotNull(questionario);
		
	}
	
	@Test
	void novoQuestionarioFalha() {
		List<Questao> listaDeQuestoes = new ArrayList<Questao>();
		listaDeQuestoes.add(questao01);
		listaDeQuestoes.add(questao02);
		listaDeQuestoes.add(questao04);
		listaDeQuestoes.add(questao05);
		listaDeQuestoes.add(questao06);
		listaDeQuestoes.add(questao07);
		listaDeQuestoes.add(questao08);
		listaDeQuestoes.add(questao09);
		listaDeQuestoes.add(questao10);
		listaDeQuestoes.add(questao11);
		listaDeQuestoes.add(questao12);
		listaDeQuestoes.add(questao13);
		listaDeQuestoes.add(questao14);
		listaDeQuestoes.add(questao15);
		listaDeQuestoes.add(questao16);
		listaDeQuestoes.add(questao17);
		listaDeQuestoes.add(questao18);
		listaDeQuestoes.add(questao19);
		listaDeQuestoes.add(questao20);
		listaDeQuestoes.add(questao21);
		
		//Vai falhar pois os 3 ultimoas questoes tem resporta nula.
		//Nesta condição o serviço retornará nulo.
		for(int i = 0; i < listaDeQuestoes.size() - 3; i++) {
			listaDeQuestoes.get(i).setResporta("1");
		}
		QuestionarioDeAnsiedadeDeBeck questionario = null;
		
		    try {
				questionario =  questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComQuestao(listaDeQuestoes);
				if (questionario != null) {
					questionarioDeAnsiedadeDeBeckService.salvar(questionario);
				}
		    } catch (NullPointerException e) {
		    	assertNull(questionario);
		    }
		
	}

}
