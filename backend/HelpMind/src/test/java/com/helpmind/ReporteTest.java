package com.helpmind;

import static org.junit.jupiter.api.Assertions.assertNotNull;

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
		reporte.setDiscente("Doroty ");
		reporte.setCampus("Cansas");
		reporte.setCurso("Terra de Oz");
		reporte.setPeriodo("1º");
		reporte.setDescrisao("procura a estrada de Tijolos amarelos");
		reporteService.salvar(reporte);
		List<Reporte> r = reporteRepository.findByDiscente("Doroty");
		assertNotNull(r.get(0).getDiscente());
	}
	
	@Test
	void retornaListaDeReportesParaProfsaudeSucesso() {
		List<Reporte> r = reporteService.retornarTodos();
		System.out.println(r.size());
		assertNotNull(r);
	}

}
