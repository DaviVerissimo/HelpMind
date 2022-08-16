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

import com.helpmind.model.ParescerPsicologico;
import com.helpmind.service.ParescerPsicologicoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/parecerPsicologico")
public class ParecerPsicologicoController {
	
	@Autowired
	private ParescerPsicologicoService parescerPsicologicoService;
	
	@PostMapping("salvarParecerPsicologico")
	public ResponseEntity salvarParecerPsicologico(@RequestBody ParescerPsicologico parecerPsicologico) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		parecerPsicologico.setData(data);
		try {
			parescerPsicologicoService.salvar(parecerPsicologico);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/parecerPsicologico/" + parecerPsicologico.getId())).body(parecerPsicologico);
	}
	
	@GetMapping("listarAllParescerPsicologico")
	public List<ParescerPsicologico> retornaAllContatos(){
		
		return parescerPsicologicoService.retornaAllProntuarios();
	}
	
	@PostMapping("removerParescerPsicologico")
	public ResponseEntity removerProntuario(@RequestBody Integer ID) throws URISyntaxException {
		ParescerPsicologico parescerPsicologico = null;
		try {
			parescerPsicologico = parescerPsicologicoService.remover(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/parescerPsicologico/" + parescerPsicologico.getId())).body(parescerPsicologico);
	}
	
	@PostMapping("updateParescerPsicologico")
	public ResponseEntity updateProntuario(@RequestBody ParescerPsicologico parescerPsicologico) throws URISyntaxException {
		
		try {
			parescerPsicologicoService.update(parescerPsicologico);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/parescerPsicologico/" + parescerPsicologico.getId())).body(parescerPsicologico);
	}
	
	@PostMapping("pesquisarParescerPsicologico")
	public ResponseEntity pesquisarProntuario(@RequestBody Integer ID) throws URISyntaxException {
		ParescerPsicologico parescerPsicologico = null;
		try {
			parescerPsicologico = parescerPsicologicoService.pesquisar(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/parescerPsicologico/" + parescerPsicologico.getId())).body(parescerPsicologico);
	}
	
}