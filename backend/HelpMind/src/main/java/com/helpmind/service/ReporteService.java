package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Reporte;
import com.helpmind.repository.ReporteRepository;

@Service
public class ReporteService {
	
//	public String pesquisa;
	
	@Autowired
	private ReporteRepository reporteRepository;
	
	public void salvar (Reporte reporte){

		reporteRepository.save(reporte);
		
	}
	
	public List<Reporte> retornarTodos(){
		return reporteRepository.findAll();
	}
	
//	public List<Reporte> retornarDiscentePorNome(){
//		System.out.println(pesquisa);
//		return reporteRepository.findByDiscente(this.pesquisa);
//	}

}
