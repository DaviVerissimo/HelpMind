package com.helpmind;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.repository.CrudRepository;

import com.helpmind.model.Discente;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioDeDepressaoDeBeck;
import com.helpmind.model.Usuario;
import com.helpmind.repository.DiscenteRepository;
import com.helpmind.repository.QuestionarioDeAnsiedadeDeBeckRepository;
import com.helpmind.repository.QuestionarioDeDepressaoDeBeckRepository;
import com.helpmind.service.DiscenteService;
import com.helpmind.service.QuestionarioDeAnsiedadeDeBeckService;
import com.helpmind.service.QuestionarioDeDepressaoDeBeckService;

@SpringBootTest
public class DiscenteTest {
	
	@Autowired
	private DiscenteRepository discenteRepository;
	
	@Autowired
	private DiscenteService discenteService;

	@Autowired
	private QuestionarioDeAnsiedadeDeBeckService questionarioDeAnsiedadeDeBeckService;

	@Autowired
	private QuestionarioDeAnsiedadeDeBeckRepository questionarioDeAnsiedadeDeBeckRepository;

	@Autowired
	private QuestionarioDeDepressaoDeBeckService questionarioDeDepressaoDeBeckService;

	@Autowired
	private QuestionarioDeDepressaoDeBeckRepository questionarioDeDepressaoDeBeckRepository;
	
//	@Test
//	void definirMediasDeAnsiedadeDiscente() {
//		Discente discente = new Discente();
//		discente.setNome("July Campos");
//		discente.setEmail("julyCampos@gmail.com");
//		discente.setGoogleId("idJuly");
//		discente.setImagemPerfilUri("httpfhfhf");
//		discente.setCurso("Bacharelado em Engenharia Civil -  João Pessoa");
//
//		discenteRepository.save(discente);
//		QuestionarioDeAnsiedadeDeBeck questionarioAnsiedade = new QuestionarioDeAnsiedadeDeBeck();
//		List<String> resportasAnsiedade = new ArrayList<String>();
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		resportasAnsiedade.add("3");
//		questionarioAnsiedade = questionarioDeAnsiedadeDeBeckService.preencherQuestionarioComResporta(resportasAnsiedade);
//		questionarioAnsiedade.setIdDiscente(discente.getGoogleId());
//		LocalDateTime data = LocalDateTime.now();
//		questionarioAnsiedade.setData(data);
//		questionarioAnsiedade.calcularNota();
//		questionarioAnsiedade.definirStatus();
//		questionarioAnsiedade = questionarioDeAnsiedadeDeBeckService.salvar(questionarioAnsiedade);
//		List<Discente> allDiscente = discenteRepository.findAll();
//		List<Discente> listaDiscente = discenteService.definirMediasDeAnsiedade_depressao_e_status(allDiscente);
//		Discente discenteData = null;
//		for (int i = 0; i < listaDiscente.size(); i++) {
//			if (listaDiscente.get(i).getEmail().equals("julyCampos@gmail.com")) {
//				discenteData = listaDiscente.get(i);
//			}
//		}
//
//		discenteRepository.delete(discente);
//		questionarioDeAnsiedadeDeBeckRepository.delete(questionarioAnsiedade);
//		assertEquals(63, discenteData.getMediaDoDiscenteQuestionariosDeAnsiedade());
//		
//	}
//	
//	@Test
//	void definirMediasDepressaoDiscente() {
//		Discente discente = new Discente();
//		discente.setNome("July Campos");
//		discente.setEmail("julyCampos@gmail.com");
//		discente.setGoogleId("idJuly");
//		discente.setImagemPerfilUri("httpfhfhf");
//		discente.setCurso("Bacharelado em Engenharia Civil -  João Pessoa");
//
//		discenteRepository.save(discente);
//		QuestionarioDeDepressaoDeBeck questionarioDepressao = new QuestionarioDeDepressaoDeBeck();
//		List<String> resportasDepressao = new ArrayList<String>();
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		resportasDepressao.add("3");
//		questionarioDepressao = questionarioDeDepressaoDeBeckService.preencherQuestionarioComResporta(resportasDepressao);
//		questionarioDepressao.setIdDiscente(discente.getGoogleId());
//		LocalDateTime data = LocalDateTime.now();
//		questionarioDepressao.setData(data);
//		questionarioDepressao.calcularNota();
//		questionarioDepressao.definirStatus();
//		questionarioDepressao = questionarioDeDepressaoDeBeckService.salvar(questionarioDepressao);
//		List<Discente> allDiscente = discenteRepository.findAll();
//		List<Discente> listaDiscente = discenteService.definirMediasDeAnsiedade_depressao_e_status(allDiscente);
//		Discente discenteData = null;
//		for (int i = 0; i < listaDiscente.size(); i++) {
//			if (listaDiscente.get(i).getEmail().equals("julyCampos@gmail.com")) {
//				discenteData = listaDiscente.get(i);
//			}
//		}
//
//		discenteRepository.delete(discente);
//		questionarioDeDepressaoDeBeckRepository.delete(questionarioDepressao);
//		assertEquals(63, discenteData.getMediaDoDiscenteQuestionariosDeDepresao());
//		
//	}
	
//	@Test
//	void buscarDiscenteByEmail() {
//		Discente discente = new Discente();
//		discente.setNome("July Campos");
//		discente.setEmail("julyCampos@gmail.com");
//		discente.setGoogleId("idJuly");
//		discente.setImagemPerfilUri("httpfhfhf");
//		discente.setCurso("Bacharelado em Engenharia Civil -  João Pessoa");
//		discenteRepository.save(discente);
//		Discente discenteNoBanco = null;
//		discenteNoBanco = discenteService.buscarDiscentePorEmail("julyCampos@gmail.com");
//		discenteRepository.delete(discente);
//		assertNotNull(discenteNoBanco);
//		
//	}


}
