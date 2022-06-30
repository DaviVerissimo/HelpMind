package com.helpmind;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioSimples;
import com.helpmind.repository.QuestionarioDeAnsiedadeDeBeckRepository;
import com.helpmind.service.QuestionarioDeAnsiedadeDeBeckService;

@SpringBootTest
public class QuestionarioDeAnsiedadeDeBeckTest {
	
	@Autowired
	private QuestionarioDeAnsiedadeDeBeckRepository questionarioDeAnsiedadeDeBeckRepository;
	
	@Autowired
	private QuestionarioDeAnsiedadeDeBeckService questionarioDeAnsiedadeDeBeckService;
	
	@Test
	void novoQuestionarioSucesso() {
		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
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
		questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		questionarioDeAnsiedadeDeBeckService.salvar(questionario);
		assertNotNull(questionario);
	}
	
	@Test
	void novoQuestionarioFalha() {
		QuestionarioDeAnsiedadeDeBeck questionario = null;
		    try {// considerar usa assetThrows
				questionario =  questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComQuestao(null);
				if (questionario != null) {
					questionarioDeAnsiedadeDeBeckService.salvar(questionario);
				}
		    } catch (NullPointerException e) {
		    	assertNull(questionario);
		    }
	}
	
	@Test
	void calcularMediaQuestionariosAnsiedade() {
		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
		QuestionarioDeAnsiedadeDeBeck q2 = new QuestionarioDeAnsiedadeDeBeck();
		QuestionarioDeAnsiedadeDeBeck q3 = new QuestionarioDeAnsiedadeDeBeck();
		List<String> resportas = new ArrayList<String>();
		List<QuestionarioDeAnsiedadeDeBeck> lista = new ArrayList<QuestionarioDeAnsiedadeDeBeck>();
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
		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		q2 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		q3 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		lista.add(q1);
		lista.add(q2);
		lista.add(q3);
		float media = QuestionarioSimples.retornaCalculoDaMediadeDosQuestionariosAnsiedade(lista);
		assertEquals(3, media);
	}
	
	@Test
	void calcularNotaQuestionarioAnsiedade() {
		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
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
		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		int nota = q1.calcularNota();
		assertEquals(32, nota);
	}
	
	@Test
	void calcularStatusAnsiedadeGrave() {
		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
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
		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		q1.calcularNota();
		q1.definirStatus();
		assertEquals("04 Ansiedade grave", q1.getStatus());
	}
	
	@Test
	void calcularStatusAnsiedadeModerada() {
		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
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
		resportas.add("1");
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
		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		q1.calcularNota();
		q1.definirStatus();
		assertEquals("03 Ansiedade moderada", q1.getStatus());
	}
	
	@Test
	void calcularStatusAnsiedadeLeve() {
		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
		List<String> resportas = new ArrayList<String>();
		resportas.add("0");
		resportas.add("0");
		resportas.add("3");
		resportas.add("1");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("2");
		resportas.add("2");
		resportas.add("0");
		resportas.add("1");
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
		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		q1.calcularNota();
		q1.definirStatus();
		assertEquals("02 Ansiedade leve", q1.getStatus());
	}
	
	@Test
	void calcularStatusAnsiedadeMinima() {
		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
		List<String> resportas = new ArrayList<String>();
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("0");
		resportas.add("2");
		resportas.add("0");
		resportas.add("0");
		resportas.add("3");
		resportas.add("0");
		resportas.add("0");
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
		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
		q1.calcularNota();
		q1.definirStatus();
		assertEquals("01 Ansiedade mínima", q1.getStatus());
	}

}
