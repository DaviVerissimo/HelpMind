//package com.helpmind;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.junit.jupiter.api.Assertions.assertNull;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
//import com.helpmind.model.QuestionarioSimples;
//import com.helpmind.repository.QuestionarioDeAnsiedadeDeBeckRepository;
//import com.helpmind.service.QuestionarioDeAnsiedadeDeBeckService;
//
//@SpringBootTest
//public class QuestionarioDeAnsiedadeDeBeckTest {
//	
//	@Autowired
//	private QuestionarioDeAnsiedadeDeBeckRepository questionarioDeAnsiedadeDeBeckRepository;
//	
//	@Autowired
//	private QuestionarioDeAnsiedadeDeBeckService questionarioDeAnsiedadeDeBeckService;
//	
//	@Test
//	void novoQuestionarioSucesso() {
//		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		questionario.calcularNota();
//		questionario.definirStatus();
//		questionario = questionarioDeAnsiedadeDeBeckService.salvar(questionario);
//		questionarioDeAnsiedadeDeBeckRepository.delete(questionario);
//		assertNotNull(questionario);
//	}
//	
//	@Test
//	void novoQuestionarioFalha() {
//		QuestionarioDeAnsiedadeDeBeck questionario = null;
//		    try {// considerar usa assetThrows
//				questionario =  questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComQuestao(null);
//				if (questionario != null) {
//					questionarioDeAnsiedadeDeBeckService.salvar(questionario);
//				}
//		    } catch (NullPointerException e) {
//		    	assertNull(questionario);
//		    }
//	}
//	
//	@Test
//	void calcularMediaQuestionariosAnsiedadecase2questionarios() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		QuestionarioDeAnsiedadeDeBeck q2 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		List<QuestionarioDeAnsiedadeDeBeck> lista = new ArrayList<QuestionarioDeAnsiedadeDeBeck>();
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		q2 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		lista.add(q1);
//		lista.add(q2);
//		float media = QuestionarioSimples.retornaCalculoDaMediadeDosQuestionariosAnsiedade(lista);
//		assertEquals(9, media);
//	}
//	
//	@Test
//	void calcularMediaQuestionariosAnsiedadecase1questionarios() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		List<QuestionarioDeAnsiedadeDeBeck> lista = new ArrayList<QuestionarioDeAnsiedadeDeBeck>();
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		lista.add(q1);
//		float media = QuestionarioSimples.retornaCalculoDaMediadeDosQuestionariosAnsiedade(lista);
//		assertEquals(15, media);
//	}
//	
//	@Test
//	void calcularMediaQuestionariosAnsiedadecase1questionariosNotamaxima() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		List<QuestionarioDeAnsiedadeDeBeck> lista = new ArrayList<QuestionarioDeAnsiedadeDeBeck>();
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		lista.add(q1);
//		float media = QuestionarioSimples.retornaCalculoDaMediadeDosQuestionariosAnsiedade(lista);
//		assertEquals(63, media);
//	}
//	
//	@Test
//	void calcularMediaQuestionariosAnsiedadecasequestionariosQuestionariosNotasVariadas() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		QuestionarioDeAnsiedadeDeBeck q2 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas1 = new ArrayList<String>();
//		List<QuestionarioDeAnsiedadeDeBeck> lista = new ArrayList<QuestionarioDeAnsiedadeDeBeck>();
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		resportas1.add("3");
//		
//		List<String> resportas2 = new ArrayList<String>();
//		resportas2.add("1");
//		resportas2.add("1");
//		resportas2.add("1");
//		resportas2.add("1");
//		resportas2.add("1");
//		resportas2.add("1");
//		resportas2.add("1");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		resportas2.add("0");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas1);
//		q2 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas2);
//		lista.add(q1);
//		lista.add(q2);
//		float media = QuestionarioSimples.retornaCalculoDaMediadeDosQuestionariosAnsiedade(lista);
//		float expected = (63 + 7) / 2;
//		assertEquals(expected, media);
//	}
//	
//	@Test
//	void calcularMediaQuestionariosAnsiedadecase3questionarios() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		QuestionarioDeAnsiedadeDeBeck q2 = new QuestionarioDeAnsiedadeDeBeck();
//		QuestionarioDeAnsiedadeDeBeck q3 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		List<QuestionarioDeAnsiedadeDeBeck> lista = new ArrayList<QuestionarioDeAnsiedadeDeBeck>();
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		q2 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		q3 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		lista.add(q1);
//		lista.add(q2);
//		lista.add(q3);
//		float media = QuestionarioSimples.retornaCalculoDaMediadeDosQuestionariosAnsiedade(lista);
//		assertEquals(3, media);
//	}
//	
//	@Test
//	void calcularNotaQuestionarioAnsiedadeCase1Nota0() {// criar teste s para todas as 63 posibilidades de notas e medias
//		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		questionario.calcularNota();
//		questionario.definirStatus();
//		questionario = questionarioDeAnsiedadeDeBeckService.salvar(questionario);
//		questionarioDeAnsiedadeDeBeckRepository.delete(questionario);
//
//		assertEquals(0, questionario.getNota());
//	}
//	
//	@Test
//	void calcularNotaQuestionarioAnsiedadeCase2Nota7() {
//		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		questionario.calcularNota();
//		questionario.definirStatus();
//		questionario = questionarioDeAnsiedadeDeBeckService.salvar(questionario);
//		questionarioDeAnsiedadeDeBeckRepository.delete(questionario);
//
//		assertEquals(7, questionario.getNota());
//	}
//	
//	@Test
//	void calcularNotaQuestionarioAnsiedadeCase3Nota15() {
//		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		questionario.calcularNota();
//		questionario.definirStatus();
//		questionario = questionarioDeAnsiedadeDeBeckService.salvar(questionario);
//		questionarioDeAnsiedadeDeBeckRepository.delete(questionario);
//
//		assertEquals(15, questionario.getNota());
//	}
//	
//	@Test
//	void calcularNotaQuestionarioAnsiedadeCase4Nota25() {
//		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("2");
//		resportas.add("3");
//		questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		questionario.calcularNota();
//		questionario.definirStatus();
//		questionario = questionarioDeAnsiedadeDeBeckService.salvar(questionario);
//		questionarioDeAnsiedadeDeBeckRepository.delete(questionario);
//
//		assertEquals(25, questionario.getNota());
//	}
//	
//	@Test
//	void calcularNotaQuestionarioAnsiedadeCase5Nota32() {
//		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("1");
//		resportas.add("2");
//		resportas.add("2");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		questionario.calcularNota();
//		questionario.definirStatus();
//		questionario = questionarioDeAnsiedadeDeBeckService.salvar(questionario);
//		questionarioDeAnsiedadeDeBeckRepository.delete(questionario);
//
//		assertEquals(32, questionario.getNota());
//	}
//	
//	@Test
//	void calcularNotaQuestionarioAnsiedadeCase6Nota63() {
//		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		questionario = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		questionario.calcularNota();
//		questionario.definirStatus();
//		questionario = questionarioDeAnsiedadeDeBeckService.salvar(questionario);
//		questionarioDeAnsiedadeDeBeckRepository.delete(questionario);
//
//		assertEquals(63, questionario.getNota());
//	}
//	
//	@Test
//	void calcularStatusAnsiedadeGrave() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("1");
//		resportas.add("2");
//		resportas.add("0");
//		resportas.add("2");
//		resportas.add("2");
//		resportas.add("2");
//		resportas.add("2");
//		resportas.add("1");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("2");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		q1.calcularNota();
//		q1.definirStatus();
//		assertEquals("04 Ansiedade grave", q1.getStatus());
//	}
//	
//	@Test
//	void calcularStatusAnsiedadeModerada() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("1");
//		resportas.add("2");
//		resportas.add("0");
//		resportas.add("2");
//		resportas.add("2");
//		resportas.add("2");
//		resportas.add("0");
//		resportas.add("1");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		q1.calcularNota();
//		q1.definirStatus();
//		assertEquals("03 Ansiedade moderada", q1.getStatus());
//	}
//	
//	@Test
//	void calcularStatusAnsiedadeLeve() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("3");
//		resportas.add("1");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("2");
//		resportas.add("2");
//		resportas.add("0");
//		resportas.add("1");
//		resportas.add("3");
//		resportas.add("3");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		q1.calcularNota();
//		q1.definirStatus();
//		assertEquals("02 Ansiedade leve", q1.getStatus());
//	}
//	
//	@Test
//	void calcularStatusAnsiedadeMinima() {
//		QuestionarioDeAnsiedadeDeBeck q1 = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportas = new ArrayList<String>();
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("2");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("3");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("1");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		resportas.add("0");
//		q1 = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportas);
//		q1.calcularNota();
//		q1.definirStatus();
//		assertEquals("01 Ansiedade mínima", q1.getStatus());
//	}
//
//}
