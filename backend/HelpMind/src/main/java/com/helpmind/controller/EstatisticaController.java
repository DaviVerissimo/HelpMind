package com.helpmind.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.ConsultaEstatistica;
import com.helpmind.model.Estatistica;
import com.helpmind.service.EstatisticaService;

/**
 * @author davi
 *
 */
@RestController
@RequestMapping("/estatistica")
public class EstatisticaController {

	@Autowired
	private EstatisticaService estatisticaService;

	@PostMapping("/byAnsiedade")
	public List<Estatistica> retornaEstatisticasByAnsiedade(@RequestBody ConsultaEstatistica consultaEstatistica) {
		List<Estatistica> estatisticas = estatisticaService.retornaEstatisticasAnsiedade(consultaEstatistica);

		return estatisticas;
	}

	@PostMapping("/byDepressao")
	public List<Estatistica> retornaEstatisticasByDepresao(@RequestBody ConsultaEstatistica consultaEstatistica) {
		List<Estatistica> estatisticas = estatisticaService.retornaEstatisticasDepressao(consultaEstatistica);

		return estatisticas;
	}

}
