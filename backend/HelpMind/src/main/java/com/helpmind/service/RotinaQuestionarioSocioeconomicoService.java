package com.helpmind.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.RotinaQuestionarioSocioeconomico;
import com.helpmind.repository.RotinaQuestionarioSocioeconomicoRepository;

@Service
public class RotinaQuestionarioSocioeconomicoService {

	@Autowired
	private RotinaQuestionarioSocioeconomicoRepository rotinaQuestionarioSocioeconomicoRepository;

	public RotinaQuestionarioSocioeconomico salvar(RotinaQuestionarioSocioeconomico rotinaQuestionarioSocioeconomico) {

		return rotinaQuestionarioSocioeconomicoRepository.save(rotinaQuestionarioSocioeconomico);
	}

	public RotinaQuestionarioSocioeconomico buscarRotinaByID(Integer ID) {
		Optional<RotinaQuestionarioSocioeconomico> rotinaAux = rotinaQuestionarioSocioeconomicoRepository.findById(ID);
		RotinaQuestionarioSocioeconomico rotina = new RotinaQuestionarioSocioeconomico();
		if (rotinaAux.isPresent()) {
			rotina = rotinaAux.get();
		}

		return rotina;
	}
	
	public RotinaQuestionarioSocioeconomico buscarRotinaByIdDiscente(String id) {
		Optional<RotinaQuestionarioSocioeconomico> rotinaAux = rotinaQuestionarioSocioeconomicoRepository.findByIdDiscente(id);
		RotinaQuestionarioSocioeconomico rotina = new RotinaQuestionarioSocioeconomico();
		if (rotinaAux.isPresent()) {
			rotina = rotinaAux.get();
		}

		return rotina;
	}

	public RotinaQuestionarioSocioeconomico definiPrimeiroAcessoComoFalso(Integer ID) {
		RotinaQuestionarioSocioeconomico rotina = buscarRotinaByID(ID);
		rotina.setPrimeiroAcesso(false);
		this.salvar(rotina);

		return rotina;
	}

	public LocalDateTime calcularProximaDataDoQuestionario(LocalDateTime data) {
		
//		return this.calcularProximaDataHora5Minutos(data);
		return this.calcularProximaDataHora6Meses(data);

	}
	
    private  LocalDateTime calcularProximaDataHora1Dia(LocalDateTime dataHora) {
        return dataHora.plusDays(1);
    }

    private  LocalDateTime calcularProximaDataHora6Meses(LocalDateTime dataHora) {
        return dataHora.plusMonths(6);
    }

    private  LocalDateTime calcularProximaDataHora5Minutos(LocalDateTime dataHora) {
        return dataHora.plusMinutes(5);
    }

	public boolean isRedirecionar(String idDiscente) {
		boolean redirecionar = false;
		RotinaQuestionarioSocioeconomico rotina = buscarRotinaByIdDiscente(idDiscente);
		LocalDateTime dataAtual = LocalDateTime.now();
		LocalDateTime dataProximoQuestionario =  LocalDateTime.from(rotina.getDataProximoQuestionario());
		if(rotina.isPrimeiroAcesso() ||  dataAtual.isAfter(dataProximoQuestionario)) {
			redirecionar = true;
		}
		
		return redirecionar;
	}

}
