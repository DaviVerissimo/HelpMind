package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.swing.JOptionPane;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.helpmind.model.Reporte;
import com.helpmind.service.ReporteService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/reporte")
public class ReporteController {
	@Autowired
	private ReporteService reporteService;
	//@CrossOrigin(origins = "https://dados.ifpb.edu.br/dataset/f2902132-dfc9-4fba-98ab-40346075224e/resource/47c6e782-6ef9-4942-8361-38d8aac22922/download/cursos.json")
	@PostMapping("salvarReporte")
	public ResponseEntity salvarReporte(@RequestBody Reporte reporte) throws URISyntaxException {
		
		try {
			reporteService.salvar(reporte);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/reporte/" + reporte.getId())).body(reporte);	
	}
	
	@GetMapping("/listarReportes")
	public List<Reporte> listarReportes(){
		
		return reporteService.retornarTodos();
	}
	
	

}
