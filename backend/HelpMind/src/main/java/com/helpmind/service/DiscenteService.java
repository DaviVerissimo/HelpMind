package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Discente;
import com.helpmind.model.QuestionarioSimples;
import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.repository.DiscenteRepository;

/**
 * @author davi
 *
 */
@Service
public class DiscenteService {
	
	@Autowired
	private DiscenteRepository discenteRepository;
	
	@Autowired
	private QuestionarioDeAnsiedadeDeBeckService questionarioDeAnsiedadeDeBeckService;
	
	@Autowired
	private QuestionarioDeDepressaoDeBeckService questionarioDeDepressaoDeBeckService;
	
	public Discente buscarDiscentePorEmail(String email) {
		Discente discente = null;
		List<Discente> lista = retornaAllDiscentes();
		for (int i = 0; i< lista.size(); i++) {
			if (lista.get(i).getEmail().equals(email)) {
				discente = lista.get(i);
			}
		}
		
		return discente;
	}
	
	public Discente buscaDiscentePorID(Integer ID) {
		Discente discente = null;
		List<Discente> lista = retornaAllDiscentes();
		for (int i = 0; i< lista.size(); i++) {
			if (lista.get(i).getId().equals(ID)) {
				discente = lista.get(i);
			}
		}
		return discente;
	}
	
	public boolean isDiscente(String email) {
		boolean existe = false;
		List<Discente> lista = retornaAllDiscentes();
		for (int i = 0; i< lista.size(); i++) {
			if (lista.get(i).getEmail().equals(email)) {
				existe = true;
			}
		}
		
		return existe;
	}
	
	public Discente addNovoQuestionarioSocioeconomico(QuestionarioSocioeconomico questionarioSocioeconomico) {
		Discente discente = this.buscarDiscentePorEmail(questionarioSocioeconomico.getEmail());
		List<QuestionarioSocioeconomico> lista = discente.getListaQuestionarioSocioeconomico();
		lista.add(questionarioSocioeconomico);
		discente.setListaQuestionarioSocioeconomico(lista);
		System.out.println(discente.toString());
		discenteRepository.save(discente);
		
		return discente;
	}
	
	public List<QuestionarioSocioeconomico> retornaListaQuestionarioSocioeconomico(String email){
		List<QuestionarioSocioeconomico> lista = null;
		Discente discente = this.buscarDiscentePorEmail(email);
		lista = discente.getListaQuestionarioSocioeconomico();
		System.out.println(lista.size());
		
		return lista;
	}
	
	public Discente criarDiscente(QuestionarioSocioeconomico questionarioSocioeconomico) {
		Discente discente = new Discente();
		discente.setNome(questionarioSocioeconomico.getNome());
		discente.setEmail(questionarioSocioeconomico.getEmail());
		discente.setMatricula(questionarioSocioeconomico.getMatricula());
		discente.setCurso(questionarioSocioeconomico.getCurso());
		List<QuestionarioSocioeconomico> lista = new ArrayList<QuestionarioSocioeconomico>();
		lista.add(questionarioSocioeconomico);
		discente.setListaQuestionarioSocioeconomico(lista);
		discenteRepository.save(discente);
		
		return discente;
	}
	
	public List<Discente> definirMediaDeAnsiedadeDoDiscente(List<Discente> lista) {
		
		for (int i = 0; i < lista.size(); i++) {
			lista.get(i)
			.setMediaDoDiscenteQuestionariosDeAnsiedade(questionarioDeAnsiedadeDeBeckService
			.calcularMediaDeAnsiedade(Integer
			.toString(lista.get(i)
			.getId())));
		}
		
		return lista;
	}
	
	public List<Discente> definirMediaDeDepressaoDoDiscente(List<Discente> lista) {
		
		for (int i = 0; i < lista.size(); i++) {
			lista.get(i)
			.setMediaDoDiscenteQuestionariosDeDepresao(questionarioDeDepressaoDeBeckService
			.calcularMediaDeDepressao(Integer
			.toString(lista.get(i)
			.getId())));
		}
		
		
		return lista;
	}
	
	private String calcularAnsiedadeMedia(float nota) {
		String status = null;
		
		if (nota >= 0 && nota <= 7) {
			status = "01 Ansiedade mínima";
		}
		if(nota >= 8 && nota <= 15) {
			status = "02 Ansiedade leve";
		}
		if(nota >= 16 && nota <= 25) {
			status = "03 Ansiedade moderada";
		}
		if(nota >= 26 && nota <= 63) {
			status = "04 Ansiedade grave";
		}
		
		return status;
	}
	
	public List<Discente> definirStatusDeAnsiedadeDoDiscente(List<Discente> lista) {

		for (int i = 0; i < lista.size(); i++) {
			lista.get(i)
			.setStatusDoDiscenteAnsiedade(calcularAnsiedadeMedia(lista.get(i)
			.getMediaDoDiscenteQuestionariosDeAnsiedade()));
		}
		
		return lista;
	}
	
	private String calcularDepressaoMedia(float nota) {
		String status = null;
		
		if (nota >= 0 && nota <= 9) {
			status = "01 Depressão mínima";
		}
		if(nota >= 10 && nota <= 18) {
			status = "02 Depressão leve";
		}
		if(nota >= 19 && nota <= 29) {
			status = "03 Depressão moderada";
		}
		if(nota >= 30 && nota <= 63) {
			status = "04 Depressão grave";
		}
		
		return status;
	}
	
	public List<Discente> definirStatusDeDepressaoDoDiscente(List<Discente> lista) {

		for (int i = 0; i < lista.size(); i++) {
			lista.get(i)
			.setStatusDoDiscenteDepresao(calcularDepressaoMedia(lista.get(i)
			.getMediaDoDiscenteQuestionariosDeAnsiedade()));
		}
		
		return lista;
	}
	
	public List<Discente> definirMediasDeAnsiedade_depressao_e_status(List<Discente> lista) {
		
		lista = this.definirMediaDeAnsiedadeDoDiscente(lista);
		lista = this.definirMediaDeDepressaoDoDiscente(lista);
		lista = this.definirStatusDeAnsiedadeDoDiscente(lista);
		lista = this.definirStatusDeDepressaoDoDiscente(lista);

		return lista;
	}
	
	public List<Discente> retornaAllDiscentes(){
		List<Discente> lista = discenteRepository.findAll();
		lista = this.definirMediasDeAnsiedade_depressao_e_status(lista);
		return lista;
	}

}
