package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.repository.QuestionarioSocioeconomicoRepository;

@Service
public class QuestionarioSocioeconomicoService {
	
	@Autowired
	private QuestionarioSocioeconomicoRepository questionarioSocioeconomicoRepository;

	public void salvar(QuestionarioSocioeconomico questionarioSocioeconomico) {
		questionarioSocioeconomicoRepository.save(questionarioSocioeconomico);
	}
	
	public List<QuestionarioSocioeconomico> retornarListaQuestionarioSocioeconomico(){
		return questionarioSocioeconomicoRepository.findAll();
	}

}
