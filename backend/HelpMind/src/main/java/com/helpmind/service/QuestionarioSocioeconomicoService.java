package com.helpmind.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Discente;
import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.model.RotinaQuestionarioSocioeconomico;
import com.helpmind.repository.DiscenteRepository;
import com.helpmind.repository.QuestionarioSocioeconomicoRepository;

@Service
public class QuestionarioSocioeconomicoService {

	@Autowired
	private DiscenteRepository DiscenteRepository;

	@Autowired
	private QuestionarioSocioeconomicoRepository questionarioSocioeconomicoRepository;

	@Autowired
	private RotinaQuestionarioSocioeconomicoService rotinaQuestionarioSocioeconomicoService;

	public void salvar(QuestionarioSocioeconomico questionarioSocioeconomico) {
		Integer ID = Integer.parseInt(questionarioSocioeconomico.getIdDiscente());
		Discente discente = new Discente();
		if (!DiscenteRepository.findById(ID).equals(null)) {
			discente = DiscenteRepository.getById(ID);
		}
		discente.setMatricula(questionarioSocioeconomico.getMatricula());
		discente.setCurso(questionarioSocioeconomico.getCurso());
		discente.setPeriodo(questionarioSocioeconomico.getPeriodo());
		discente.setCampus(questionarioSocioeconomico.getCampusDoDiscente());
		questionarioSocioeconomicoRepository.save(questionarioSocioeconomico);
		atualizaRotinaSocioeconomica(questionarioSocioeconomico.getIdDiscente());
	}

	private void atualizaRotinaSocioeconomica(String idDiscente) {
		RotinaQuestionarioSocioeconomico rotina = rotinaQuestionarioSocioeconomicoService
				.buscarRotinaByIdDiscente(idDiscente);
		if (rotina.isPrimeiroAcesso()) {
			rotina.setPrimeiroAcesso(false);
		}
		LocalDateTime data = LocalDateTime.now();
		LocalDateTime proximaData = rotinaQuestionarioSocioeconomicoService.calcularProximaDataDoQuestionario(data);
		rotina.setDataProximoQuestionario(proximaData);
		rotinaQuestionarioSocioeconomicoService.salvar(rotina);
	}

	public List<QuestionarioSocioeconomico> retornarListaAllQuestionarioSocioeconomico() {
		return questionarioSocioeconomicoRepository.findAll();
	}

	public List<QuestionarioSocioeconomico> buscaQuestionariosPeloIdDoDiscente(Integer ID) {

		List<QuestionarioSocioeconomico> lista = retornarListaAllQuestionarioSocioeconomico();
		List<QuestionarioSocioeconomico> listaQuestionariosDoDiscente = new ArrayList<QuestionarioSocioeconomico>();

		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getIdDiscente().equals(ID.toString())) {
				listaQuestionariosDoDiscente.add(lista.get(i));
			}
		}

		return listaQuestionariosDoDiscente;
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
