package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.controller.FileLeitura;
import com.helpmind.model.ConsultaEstatistica;
import com.helpmind.model.Discente;
import com.helpmind.model.EstatisticaReporte;
import com.helpmind.model.Reporte;
import com.helpmind.repository.DiscenteRepository;
import com.helpmind.repository.ReporteRepository;

@Service
public class EstatisticasReporteService {

	@Autowired
	private DiscenteRepository discenteRepository;

	@Autowired
	private ReporteRepository reporteRepository;

	public List<EstatisticaReporte> retornaEstatisticasReporte() {
		List<Discente> listaDiscentes = discenteRepository.findAll();
		List<Reporte> listaReportes = reporteRepository.findAll();
		EstatisticasReporteGenerator generator = new EstatisticasReporteGenerator();
		List<EstatisticaReporte> estatisticas = generator.gerarEstatisticas(listaDiscentes, listaReportes);

		return estatisticas;
	}

	public List<EstatisticaReporte> retornaEstatisticasReporteByCampus(ConsultaEstatistica consultaEstatistica) {
		String campus = consultaEstatistica.getCampus();
		if (campus.equals("All") && consultaEstatistica.getCurso().equals("All")) {
			return this.retornaEstatisticasReporte();
		}
		List<Discente> listaDiscentes = discenteRepository.findAll();
		List<Reporte> listaReportes = reporteRepository.findAll();
		EstatisticasReporteGenerator generator = new EstatisticasReporteGenerator();
		List<EstatisticaReporte> estatisticas = generator.gerarEstatisticas(listaDiscentes, listaReportes);
		List<EstatisticaReporte> estatisticasPorCampus = new ArrayList<EstatisticaReporte>();
		FileLeitura objeto = new FileLeitura();
		List<String> cursos = new ArrayList<>();
		if (!consultaEstatistica.getCurso().equals("All")) {
			cursos.add(consultaEstatistica.getCurso());
		} else {
			cursos = objeto.carregarCursosPorCampus(campus);
		}
		for (int i = 0; i < cursos.size(); i++) {
			String curso = cursos.get(i);
			for (int j = 0; j < estatisticas.size(); j++) {
				if (estatisticas.get(j).getCurso().equals(curso)) {
					estatisticasPorCampus.add(estatisticas.get(j));
				}
			}
		}

		return estatisticasPorCampus;
	}

}
