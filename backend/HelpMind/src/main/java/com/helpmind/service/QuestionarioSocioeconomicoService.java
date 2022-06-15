package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Discente;
import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.repository.QuestionarioSocioeconomicoRepository;

@Service
public class QuestionarioSocioeconomicoService {
	
	@Autowired
	private DiscenteService discenteService;
	
	@Autowired
	private QuestionarioSocioeconomicoRepository questionarioSocioeconomicoRepository;

	public void salvar(QuestionarioSocioeconomico questionarioSocioeconomico) {
		questionarioSocioeconomicoRepository.save(questionarioSocioeconomico);
	}
	
	public List<QuestionarioSocioeconomico> retornarListaQuestionarioSocioeconomico(){
		return questionarioSocioeconomicoRepository.findAll();
	}
	
	public List<QuestionarioSocioeconomico> buscaQuestionariosPeloIdDoDiscente(Integer ID){
		Discente discente = discenteService.buscaDiscentePorID(ID);
		
		return discente.getListaQuestionarioSocioeconomico();
	}
	
	public QuestionarioSocioeconomico retornaQuestionarioPeloID(Integer IdQuestionario) {
		List<QuestionarioSocioeconomico> lista = questionarioSocioeconomicoRepository.findAll();
		QuestionarioSocioeconomico questionario = null;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(IdQuestionario)) {
				questionario = lista.get(i);
			}
		}
		
		return questionario;
	}

}
