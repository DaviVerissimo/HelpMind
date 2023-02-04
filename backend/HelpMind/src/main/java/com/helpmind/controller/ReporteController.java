package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.Constantes;
import com.helpmind.model.Reporte;
import com.helpmind.service.DiscenteService;
import com.helpmind.service.ReporteService;
import com.helpmind.service.ServidorService;


@CrossOrigin(origins = Constantes.URI)
@RestController
@RequestMapping("/reporte")
public class ReporteController {
	@Autowired
	private ReporteService reporteService;
	
	@Autowired
	private DiscenteService DiscenteService;
	
	@Autowired
	private ServidorService servidorService;
	
	@PostMapping("salvarReporte")
	public ResponseEntity salvarReporte(@RequestBody Reporte reporte) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		reporte.setData(data);
		try {
			reporteService.salvar(reporte);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/reporte/" + reporte.getId())).body(reporte);	
	}
	
	@GetMapping("/listarReportes")
	public List<Reporte> listarReportes(){
		
		return reporteService.retornarTodos();
	}
	
	@PostMapping("/buscarReportePeloId")
	public Reporte retornaReportePeloId(@RequestBody String idReporte) {
		
		return reporteService.buscarReportePeloId(idReporte);
	}
	
	@PostMapping("/nomeReportante")
	public String retornaNomeDoResportante(@RequestBody String idReportante) {
		
		return DiscenteService.buscarNomeDoReportante(idReportante);
	}
	
	@PostMapping("/nomeServidorReportante")
	public String retornaNomeDoServidorResportante(@RequestBody String idReportante) {
		
		return servidorService.buscarNomeDoServidorPeloID(idReportante);
	}

}
