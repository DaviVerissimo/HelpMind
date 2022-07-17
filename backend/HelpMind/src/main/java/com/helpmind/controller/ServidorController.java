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

import com.helpmind.model.Discente;
import com.helpmind.model.Reporte;
import com.helpmind.model.Servidor;
import com.helpmind.model.Usuario;
import com.helpmind.repository.ServidorRepository;
import com.helpmind.service.ServidorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/servidor")
public class ServidorController {
	
	@Autowired
	private ServidorService servidorService;
	
	@PostMapping("salvarServidor")
	public ResponseEntity salvarServidor(@RequestBody Usuario usuario) throws URISyntaxException {
		
		Servidor servidor = null;
		try {
			servidor = servidorService.salvar(usuario);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/servidor/" + servidor.getId())).body(servidor);
	}
	
	@GetMapping("listarAllServidores")
	public List<Servidor> retornaAllServidores(){
		
		return servidorService.listaAllServidores();
	}
	
	@PostMapping("updateServidor")

	public ResponseEntity concederAcesso(@RequestBody String id) throws URISyntaxException {

		Integer ID = Integer.parseInt(id);
		Servidor servidor = null;
		try {
			servidor = servidorService.concederAcesso(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/servidor/" + servidor.getId())).body(servidor);
	}
	
	
	@PostMapping("/buscarServidorPeloId")
	public ResponseEntity retornaServidorPeloId(@RequestBody String id) throws URISyntaxException {
		
		Servidor servidor = null;
		Integer ID = Integer.parseInt(id);
		try {
			servidor = servidorService.pesquisar(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/servidor/" + servidor.getId())).body(servidor);
	}
	
	@PostMapping("/isServidorGoogleId")
	public ResponseEntity<Servidor> isExiste(@RequestBody String googleId) throws URISyntaxException {
		Servidor servidor = new Servidor();
		try {
			servidor = servidorService.retornarServidorPeloGoogleId(googleId);
			} catch(Exception e){}
		
		return ResponseEntity.created(new URI("/servidor/" + servidor.getId())).body(servidor);
	}
	
	

}
