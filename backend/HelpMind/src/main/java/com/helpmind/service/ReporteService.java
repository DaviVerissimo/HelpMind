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
		Reporte r = new Reporte();
		r.setCampus("picui");r.setCurso("Libras"); r.setDescrisao("Ele ver sinais o tempo todo!!!"); r.setDiscente("D Pedro II");r.setPeriodo(5);
		//reporte = r;
		reporteRepository.save(reporte);
		
	}
	
	public List<Reporte> retornarTodos(){
		return reporteRepository.findAll();
	}
	
	public List<Reporte> retornarDiscentePorNome(String nomeDiscente){
		return reporteRepository.findByDiscente(nomeDiscente);
	}

}
