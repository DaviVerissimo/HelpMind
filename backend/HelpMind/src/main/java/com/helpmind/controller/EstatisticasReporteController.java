package com.helpmind.controller;

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
import com.helpmind.model.EstatisticaReporte;
import com.helpmind.service.EstatisticasReporteService;

@CrossOrigin(origins = Constantes.URI)
@RestController
@RequestMapping("/estatisticaReporte")
public class EstatisticasReporteController {

	@Autowired
	private EstatisticasReporteService estatisticasReporteService;

	@GetMapping("/allEstatisticasReporte")
	public List<EstatisticaReporte> retornaTodasEstatisticasReporte() {

		return estatisticasReporteService.retornaEstatisticasReporte();
	}

	@PostMapping("/byCampus")
	public List<EstatisticaReporte> retornaEstatisticasReporteByCampus(@RequestBody ConsultaEstatistica consultaEstatistica) {

		return estatisticasReporteService.retornaEstatisticasReporteByCampus(consultaEstatistica);
	}

}
