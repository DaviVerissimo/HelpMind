package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.Material;
import com.helpmind.service.MaterialService;

@RestController
@RequestMapping("/material")
public class MaterialController {
	
	@Autowired
	private MaterialService materialService;
	
	@PostMapping("salvarMaterial")
	public ResponseEntity novoMaterial(@RequestBody Material material) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		material.setDataCriacao(data);
		
		try {
			materialService.salvar(material);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/material/" + material.getId())).body(material);
	}
	
	@GetMapping("/allMaterial")
	public List<Material> allMaterial() {
		
		return materialService.listarTodosMateriais();
	}
	
	@PostMapping("removerMaterial")
	public ResponseEntity removerMaterial(@RequestBody String id) throws URISyntaxException {
		Integer ID = Integer.parseInt(id);
		Material material = materialService.PesquisarPorID(ID);
		try {
			materialService.remover(material);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/material/" + material.getId())).body(material);
	}
	
	@GetMapping("/removerAllMaterialAllFiles/")
	public void removerAllMaterial() {
		
		materialService.removerAllMateriaisAndFiles();
	}

}
