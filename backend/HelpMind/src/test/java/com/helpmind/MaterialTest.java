package com.helpmind;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.helpmind.model.Material;
import com.helpmind.repository.MaterialRepository;
import com.helpmind.service.MaterialService;

@SpringBootTest
public class MaterialTest {
	
	@Autowired
	 private MaterialRepository materialRepository;
	 @Autowired
	 private MaterialService materialService;

	@Test
	void novoMaterialSucesso() {
		Material material = new Material();
		material.setNome("Totodaio");
		material.setCategoria("Teste");
		material.setNomeDoArquivo("doc.odt");
		LocalDateTime data = LocalDateTime.now();
		material.setDataCriacao(data);
		materialService.salvar(material);
		Material r = materialRepository.findByNome("Totodaio");
		assertNotNull(r);
	}

}
