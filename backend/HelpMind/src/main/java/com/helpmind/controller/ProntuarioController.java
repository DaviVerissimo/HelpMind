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

import com.helpmind.model.Prontuario;
import com.helpmind.service.ProntuarioService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/prontuario")
public class ProntuarioController {
	
	@Autowired
	private ProntuarioService prontuarioService;
	
	@PostMapping("salvarProntuario")
	public ResponseEntity salvarProntuario(@RequestBody Prontuario prontuario) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		prontuario.setData(data);
		try {
			prontuarioService.salvar(prontuario);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/prontuario/" + prontuario.getId())).body(prontuario);
	}
	
	@GetMapping("listarAllProntuarios")
	public List<Prontuario> retornaAllContatos(){
		
		return prontuarioService.retornaAllProntuarios();
	}
	
	@PostMapping("removerProntuario")
	public ResponseEntity removerProntuario(@RequestBody Integer ID) throws URISyntaxException {
		Prontuario prontuario = null;
		try {
			prontuario = prontuarioService.remover(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/prontuario/" + prontuario.getId())).body(prontuario);
	}
	
	@PostMapping("updateProntuario")
	public ResponseEntity updateProntuario(@RequestBody Prontuario prontuario) throws URISyntaxException {
		
		try {
			prontuarioService.update(prontuario);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/prontuario/" + prontuario.getId())).body(prontuario);
	}
	
	@PostMapping("pesquisarProntuario")
	public ResponseEntity pesquisarProntuario(@RequestBody Integer ID) throws URISyntaxException {
		Prontuario prontuario = null;
		try {
			prontuario = prontuarioService.pesquisar(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/prontuario/" + prontuario.getId())).body(prontuario);
	}
	
}