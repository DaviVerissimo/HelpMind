package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
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
import com.helpmind.model.Contato;
import com.helpmind.service.ContatoService;


@CrossOrigin(origins = Constantes.URI)
@RestController
@RequestMapping("/contato")
public class ContatoController {
	
	@Autowired
	private ContatoService contatoService;
	
	@PostMapping("salvarContato")
	public ResponseEntity salvarContato(@RequestBody Contato contato) throws URISyntaxException {
		
		try {
			contatoService.salvar(contato);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/contato/" + contato.getId())).body(contato);
	}
	
	@GetMapping("listarAllContatos")
	public List<Contato> retornaAllContatos(){
		
		return contatoService.retornaAllContatos();
	}
	
	@PostMapping("removerContato")
	public ResponseEntity removerContato(@RequestBody Integer ID) throws URISyntaxException {
		Contato contato = null;
		try {
			contato = contatoService.remover(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/contato/" + contato.getId())).body(contato);
	}
	
	@PostMapping("updateContato")
	public ResponseEntity updateContato(@RequestBody Contato contato) throws URISyntaxException {
		
		try {
			contatoService.update(contato);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/contato/" + contato.getId())).body(contato);
	}
	
	@PostMapping("pesquisarContato")
	public ResponseEntity pesquisarContato(@RequestBody Integer ID) throws URISyntaxException {
		Contato contato = null;
		try {
			contato = contatoService.pesquisar(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/contato/" + contato.getId())).body(contato);
	}
	
}