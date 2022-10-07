package com.helpmind;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.helpmind.model.Reporte;
import com.helpmind.repository.ReporteRepository;
import com.helpmind.service.ReporteService;

@SpringBootTest
public class ReporteTest {
	
	@Autowired
	 private ReporteRepository reporteRepository;
	 @Autowired
	 private ReporteService reporteService;

	@Test
	void novoReporteSucesso() {
		Reporte reporte = new Reporte();
		reporte.setDiscente("Toto ");
		reporte.setCampus("Cansas");
		reporte.setCurso("Terra de Az");
		reporte.setPeriodo("1º");
		reporte.setDescrisao("procura a estrada de Tijolos amarelos");
		LocalDateTime data = LocalDateTime.now();
		reporte.setData(data);
		Reporte r = reporteService.salvar(reporte);
		reporteRepository.delete(r);
		
		assertNotNull(r);
	}
	
	@Test
	void retornaTodosReportes() {
		Reporte reporte = new Reporte();
		reporte.setDiscente("Toto ");
		reporte.setCampus("Cansas");
		reporte.setCurso("Terra de Az");
		reporte.setPeriodo("1º");
		reporte.setDescrisao("procura a estrada de Tijolos amarelos");
		LocalDateTime data = LocalDateTime.now();
		reporte.setData(data);
		Reporte r = reporteService.salvar(reporte);
		List<Reporte> l = reporteService.retornarTodos();
		reporteRepository.delete(r);
		
		assertNotNull(l);
	}
	
	@Test
	void retornaTodosReportesByDiscente() {
		Reporte reporte = new Reporte();
		reporte.setDiscente("Doroty ");
		reporte.setCampus("Cansas");
		reporte.setCurso("Terra de Az");
		reporte.setPeriodo("1º");
		reporte.setDescrisao("procura a estrada de Tijolos amarelos");
		LocalDateTime data = LocalDateTime.now();
		reporte.setData(data);
		Reporte r = reporteService.salvar(reporte);
		List<Reporte> l = reporteRepository.findByDiscente("Doroty");
		reporteRepository.delete(r);
		
		assertNotNull(l);
	}

}
