package com.helpmind.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/estatistica")
public class EstatisticaController {
	
	@Autowired
	private EstatisticaService estatisticaService;
	
	@GetMapping("/all")
	public Estatistica retornaEstatisticaByTodosDiscentes() {
		
		return estatisticaService.retornaEstatisticaAllDiscente();
	}
	
	@PostMapping("/byCurso")
	public Estatistica retornaEstatisticaByCurso(@RequestBody String curso) {
		Estatistica estatistica = null;
		estatistica = estatisticaService.retornaEstatisticaByCurso(curso);
		
		return estatistica;
	}
	
	@PostMapping("/byPeriodo")
	public Estatistica retornaEstatisticaByPeriodo(@RequestBody String periodo) {
		Estatistica estatistica = null;
		estatistica = estatisticaService.retornaEstatisticaByPeriodo(periodo);
		
		return estatistica;
	}
	
	@PostMapping("/byCursoAndPeriodo")
	public Estatistica retornaEstatisticaByCursoAndPeriodo(@RequestBody ConsultaEstatistica consultaEstatistica) {
		Estatistica estatistica = null;
		estatistica = estatisticaService
				.retornaEstatisticaByCursoAndPeriodo(consultaEstatistica.getCurso(), consultaEstatistica.getPeriodo());
		
		return estatistica;
	}

}
