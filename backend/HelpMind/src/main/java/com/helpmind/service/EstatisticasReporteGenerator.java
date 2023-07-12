package com.helpmind.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.helpmind.model.Discente;
import com.helpmind.model.EstatisticaReporte;
import com.helpmind.model.Reporte;

public class EstatisticasReporteGenerator {

	public List<EstatisticaReporte> gerarEstatisticas(List<Discente> discentes, List<Reporte> reportes) {
		// Cria um mapa para armazenar as estatísticas por curso
		Map<String, EstatisticaReporte> estatisticasPorCurso = new HashMap<>();

		// Inicializa as estatísticas para cada curso
		for (Discente discente : discentes) {
			String curso = discente.getCurso();
			if (!estatisticasPorCurso.containsKey(curso)) {
				EstatisticaReporte estatistica = new EstatisticaReporte();
				estatistica.setCurso(curso);
				estatistica.setQuantidadeReportado(0); // Inicializa com zero
				estatistica.setQuantidadeReportante(0); // Inicializa com zero
				estatistica.setQuantidadeTentativaSuicidio(0); // Inicializa com zero
				estatisticasPorCurso.put(curso, estatistica);
			}
		}

		// Conta a quantidade de reportes e reportantes por curso
		for (Reporte reporte : reportes) {
			String curso = reporte.getCurso();
			EstatisticaReporte estatistica = estatisticasPorCurso.get(curso);
			if (estatistica == null) {
				estatistica = new EstatisticaReporte();
				estatistica.setCurso(curso);
				estatisticasPorCurso.put(curso, estatistica);
			}

			// Conta a quantidade de reportes
			int quantidadeReportado = estatistica.getQuantidadeReportado();
			estatistica.setQuantidadeReportado(quantidadeReportado + 1);

			// Conta a quantidade de reportantes
			String idReportante = reporte.getIdReportante();
			if (idPertenceAoCurso(idReportante, discentes, curso)) {
				int quantidadeReportante = estatistica.getQuantidadeReportante();
				estatistica.setQuantidadeReportante(quantidadeReportante + 1);
			}

			// Conta a quantidade de tentativas de suicídio
			if (reporte.isTentativaDeSuicidio()) {
				int quantidadeTentativaSuicidio = estatistica.getQuantidadeTentativaSuicidio();
				estatistica.setQuantidadeTentativaSuicidio(quantidadeTentativaSuicidio + 1);
			}
		}

		// Retorna as estatísticas como lista
		return new ArrayList<>(estatisticasPorCurso.values());
	}

	private boolean idPertenceAoCurso(String id, List<Discente> discentes, String curso) {
		for (Discente discente : discentes) {
			if (discente.getId().toString().equals(id) && discente.getCurso().equals(curso)) {
				return true;
			}
		}
		return false;
	}

}
