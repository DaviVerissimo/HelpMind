package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.Constantes;
import com.helpmind.model.Reporte;
import com.helpmind.model.RotinaQuestionarioSocioeconomico;
import com.helpmind.service.RotinaQuestionarioSocioeconomicoService;

@CrossOrigin(origins = Constantes.URI)
@RestController
@RequestMapping("/RotinaQuestionarioSocioeconomico")
public class RotinaQuestionarioSocioeconomicoController {

	@Autowired
	private RotinaQuestionarioSocioeconomicoService rotinaQuestionarioSocioeconomicoService;

	@PostMapping("salvarRotina")
	public ResponseEntity salvarRotinaQuestionarioSocioeconomico(
			@RequestBody RotinaQuestionarioSocioeconomico rotinaQuestionarioSocioeconomico) throws URISyntaxException {

		try {
			LocalDateTime data = LocalDateTime.now();
			LocalDateTime proximaData = rotinaQuestionarioSocioeconomicoService.calcularProximaDataDoQuestionario(data);
			rotinaQuestionarioSocioeconomico.setDataProximoQuestionario(proximaData);
			rotinaQuestionarioSocioeconomicoService.salvar(rotinaQuestionarioSocioeconomico);
		} catch (Exception e) {
		}

		return ResponseEntity
				.created(new URI("/RotinaQuestionarioSocioeconomico/" + rotinaQuestionarioSocioeconomico.getId()))
				.body(rotinaQuestionarioSocioeconomico);
	}

	@PostMapping("/buscarRotinaPeloId")
	public RotinaQuestionarioSocioeconomico buscarRotinaPeloId(@RequestBody Integer ID) {

		return rotinaQuestionarioSocioeconomicoService.buscarRotinaByID(ID);
	}

	@PostMapping("/isRedireciona")
	public boolean isRedirecionaParaQuestionarioSocioeconomico(@RequestBody String idDiscente) {

		return rotinaQuestionarioSocioeconomicoService.isRedirecionar(idDiscente);
	}

}
