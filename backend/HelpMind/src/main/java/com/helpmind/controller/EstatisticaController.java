package com.helpmind.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.Constantes;
import com.helpmind.model.ConsultaEstatistica;
import com.helpmind.model.Estatistica;
import com.helpmind.model.EstatisticaDepressao;
import com.helpmind.service.EstatisticaService;

/**
 * @author davi
 *
 */
@CrossOrigin(origins = Constantes.URI)
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

	@PostMapping("/bylistaDeCurso")
	public List<Estatistica> retornaEstatisticasByListaDeCurso(@RequestBody List<String> cursos) {
		List<Estatistica> estatisticas = new ArrayList<Estatistica>();

		for (int i = 0; i < cursos.size(); i++) {
			Estatistica estatistica = this.retornaEstatisticaByCurso(cursos.get(i));
			estatisticas.add(estatistica);
		}

		return estatisticas;
	}

	@PostMapping("/bylistaDeCursoDepressao")
	public List<EstatisticaDepressao> retornaEstatisticasByListaDeCursoDepressao(@RequestBody List<String> cursos) {
		List<Estatistica> estatisticas = this.retornaEstatisticasByListaDeCurso(cursos);
		List<EstatisticaDepressao> listaEstatisticaDepressao = estatisticaService.converteParaEstatisticaDepressao(estatisticas, cursos);
		return listaEstatisticaDepressao;
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
		estatistica = estatisticaService.retornaEstatisticaByCursoAndPeriodo(consultaEstatistica.getCurso(),
				consultaEstatistica.getPeriodo());

		return estatistica;
	}

}
