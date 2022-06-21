package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Reporte;
import com.helpmind.repository.ReporteRepository;

@Service
public class ReporteService {
	
	@Autowired
	private ReporteRepository reporteRepository;
	
	public void salvar (Reporte reporte){
		reporteRepository.save(reporte);
	}
	
	public List<Reporte> retornarTodos(){
		return reporteRepository.findAll();
	}

	public Reporte buscarReportePeloId(String idReporte) {
		Integer ID = Integer.parseInt(idReporte);
		Reporte reporte = null;
		List<Reporte> lista = retornarTodos();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(ID)) {
				reporte = lista.get(i);
			}
		}
		
		return reporte;
	}

}
