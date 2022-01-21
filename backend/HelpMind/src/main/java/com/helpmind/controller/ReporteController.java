package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

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
	
	@GetMapping("/listaTodosReportes")
	public ModelAndView listarTodosReportes() {
		ModelAndView modelAndView = new ModelAndView("reporte/listaTodosReportes");
		modelAndView.addObject("listaReportes", reporteService.retornarTodos());
		
		return modelAndView;
		}
	
	@PostMapping
	public ResponseEntity salvarReporte(@RequestBody Reporte reporte) throws URISyntaxException {
		try {
			reporteService.salvar(reporte);
			} catch(Exception e){} // GAMBIARRA
		
		return ResponseEntity.created(new URI("/reporte/" + reporte.getId())).body(reporte);	
	}
	
	@GetMapping("/x")
	public void x() {
		reporteService.salvar(null);
	}
	
	@GetMapping("/xx")
	public List<Reporte> listarTudo(){
		
		return reporteService.retornarTodos();
	}

}
