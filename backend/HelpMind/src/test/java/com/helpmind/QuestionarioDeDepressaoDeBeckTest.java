package com.helpmind;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.helpmind.model.QuestionarioDeDepressaoDeBeck;
import com.helpmind.model.QuestionarioSimples;
import com.helpmind.repository.QuestionarioDeDepressaoDeBeckRepository;
import com.helpmind.service.QuestionarioDeDepressaoDeBeckService;

@SpringBootTest
public class QuestionarioDeDepressaoDeBeckTest {
	
	@Autowired
	private QuestionarioDeDepressaoDeBeckRepository questionarioDeDepressaoDeBeckRepository;
	
	@Autowired
	private QuestionarioDeDepressaoDeBeckService questionarioDeDepressaoDeBeckService;
	
	@Test
	void novoQuestionarioSucesso() {
		QuestionarioDeDepressaoDeBeck questionario = new QuestionarioDeDepressaoDeBeck();
		List<String> resportas = new ArrayList<String>();
		resportas.add("1");
		resportas.add("1");
		resportas.add("1");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		questionario = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		questionarioDeDepressaoDeBeckService.salvar(questionario);
		assertNotNull(questionario);
	}
	
	@Test
	void novoQuestionarioFalha() {
		QuestionarioDeDepressaoDeBeck questionario = null;
	    try {// considerar usa assetThrows
			questionario =  questionarioDeDepressaoDeBeckService.preencherQuestionarioComQuestao(null);
			if (questionario != null) {
				questionarioDeDepressaoDeBeckService.salvar(questionario);
			}
	    } catch (NullPointerException e) {
	    	assertNull(questionario);
	    }
		
	}
	
	@Test
	void calcularMediaQuestionariosDepressao() {
		QuestionarioDeDepressaoDeBeck q1 = new QuestionarioDeDepressaoDeBeck();
		QuestionarioDeDepressaoDeBeck q2 = new QuestionarioDeDepressaoDeBeck();
		QuestionarioDeDepressaoDeBeck q3 = new QuestionarioDeDepressaoDeBeck();
		List<String> resportas = new ArrayList<String>();
		List<QuestionarioDeDepressaoDeBeck> lista = new ArrayList<QuestionarioDeDepressaoDeBeck>();
		resportas.add("1");
		resportas.add("1");
		resportas.add("1");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		q1 = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		q2 = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		q3 = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		lista.add(q1);
		lista.add(q2);
		lista.add(q3);
		float media = QuestionarioSimples.retornaCalculoDaMediadeDosQuestionariosDepressao(lista);
		assertEquals(3, media);
	}
	
	@Test
	void calcularNotaQuestionarioDepressao() {
		QuestionarioDeDepressaoDeBeck q1 = new QuestionarioDeDepressaoDeBeck();
		List<String> resportas = new ArrayList<String>();
		resportas.add("3");
		resportas.add("3");
		resportas.add("3");
		resportas.add("1");
		resportas.add("2");
		resportas.add("0");
		resportas.add("2");
		resportas.add("2");
		resportas.add("2");
		resportas.add("2");
		resportas.add("1");
		resportas.add("3");
		resportas.add("3");
		resportas.add("3");
		resportas.add("2");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("3");
		q1 = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		int nota = q1.calcularNota();
		assertEquals(35, nota);
	}
	
	@Test
	void calcularStatusDepresaoGrave() {
		QuestionarioDeDepressaoDeBeck q1 = new QuestionarioDeDepressaoDeBeck();
		List<String> resportas = new ArrayList<String>();
		resportas.add("3");
		resportas.add("3");
		resportas.add("3");
		resportas.add("1");
		resportas.add("2");
		resportas.add("0");
		resportas.add("2");
		resportas.add("2");
		resportas.add("2");
		resportas.add("2");
		resportas.add("1");
		resportas.add("3");
		resportas.add("3");
		resportas.add("3");
		resportas.add("2");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		q1 = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		q1.calcularNota();
		q1.definirStatus();
		assertEquals("04 Depressão grave", q1.getStatus());
	}
	
	@Test
	void calcularStatusAnsiedadeModerada() {
		QuestionarioDeDepressaoDeBeck q1 = new QuestionarioDeDepressaoDeBeck();
		List<String> resportas = new ArrayList<String>();
		resportas.add("3");
		resportas.add("3");
		resportas.add("3");
		resportas.add("1");
		resportas.add("2");
		resportas.add("0");
		resportas.add("2");
		resportas.add("2");
		resportas.add("2");
		resportas.add("2");
		resportas.add("1");
		resportas.add("3");
		resportas.add("3");
		resportas.add("0");
		resportas.add("2");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		q1 = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		q1.calcularNota();
		q1.definirStatus();
		assertEquals("03 Depressão moderada", q1.getStatus());
	}
	
	@Test
	void calcularStatusDepressaoLeve() {
		QuestionarioDeDepressaoDeBeck q1 = new QuestionarioDeDepressaoDeBeck();
		List<String> resportas = new ArrayList<String>();
		resportas.add("3");
		resportas.add("3");
		resportas.add("3");
		resportas.add("1");
		resportas.add("2");
		resportas.add("0");
		resportas.add("2");
		resportas.add("2");
		resportas.add("2");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		q1 = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		q1.calcularNota();
		q1.definirStatus();
		assertEquals("02 Depressão leve", q1.getStatus());
	}
	
	@Test
	void calcularStatusDepressaoMinima() {
		QuestionarioDeDepressaoDeBeck q1 = new QuestionarioDeDepressaoDeBeck();
		List<String> resportas = new ArrayList<String>();
		resportas.add("3");
		resportas.add("3");
		resportas.add("3");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		q1 = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportas);
		q1.calcularNota();
		q1.definirStatus();
		assertEquals("01 Depressão mínima", q1.getStatus());
	}


}
