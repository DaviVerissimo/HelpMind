package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Discente;
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
	
	public Discente buscarDiscentePorEmail(String email) {
		Discente discente = discenteRepository.findByEmail(email);
		
		return discente;
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
	
	public QuestionarioSocioeconomico retornaUltimoQuestionarioSocioeconomico(String email) {
		QuestionarioSocioeconomico questionario = null;
		List<QuestionarioSocioeconomico> lista = this.retornaListaQuestionarioSocioeconomico(email);
		questionario = lista.get(lista.size() -1);
		
		return questionario;
	}
	
	public Discente criarDiscente(QuestionarioSocioeconomico questionarioSocioeconomico) {
		Discente discente = new Discente();
		discente.setNome(questionarioSocioeconomico.getNome());
		discente.setEmail(questionarioSocioeconomico.getEmail());
		List<QuestionarioSocioeconomico> lista = new ArrayList<QuestionarioSocioeconomico>();
		lista.add(questionarioSocioeconomico);
		discente.setListaQuestionarioSocioeconomico(lista);
		discenteRepository.save(discente);
		
		return discente;
	}
	
	public List<Discente> retornaAllDiscentes(){
		
		return discenteRepository.findAll();
	}

}
