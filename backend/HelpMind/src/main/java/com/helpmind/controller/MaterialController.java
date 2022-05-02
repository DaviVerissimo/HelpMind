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

import com.helpmind.model.Material;
import com.helpmind.service.MaterialService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/material")
public class MaterialController {
	
	@Autowired
	private MaterialService materialService;
	
	@PostMapping("salvarMaterial")
	public ResponseEntity novoMaterial(@RequestBody Material material) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		material.setDataCriacao(data);
		//faltar linkar url do arquivo e da capa.
		
		try {
			materialService.salvar(material);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/material/" + material.getId())).body(material);
	}
	
	@GetMapping("/allMaterial")
	public List<Material> allMaterial() {
		
		return materialService.listarTodosMateriais();
	}
	
	@PostMapping("/removerMaterial")
	public Material removerMaterial(@RequestBody String nome) {
		
		return materialService.remover(nome);
	}
	
//	@GetMapping("/salvarMaterial")
//	public Material teste() {
//		Material material = new Material();
//		material.setNome("charmander");
//		material.setCategoria("Teste");
//		material.setNomeDoArquivo("doc.pdf");
//		material.setNomeDaCapa("image.png");
//		LocalDateTime data = LocalDateTime.now();
//		material.setDataCriacao(data);
//		materialService.salvar(material);
//		
//		return material;
//	}

}
