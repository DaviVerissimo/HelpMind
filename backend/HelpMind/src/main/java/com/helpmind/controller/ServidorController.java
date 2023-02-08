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
import com.helpmind.model.Servidor;
import com.helpmind.model.Usuario;
import com.helpmind.service.ServidorService;

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
	public ResponseEntity concederAcessoComoProfissionalDeSaude(@RequestBody String id) throws URISyntaxException {

		Integer ID = Integer.parseInt(id);
		Servidor servidor = null;
		try {
			servidor = servidorService.concederAcessoComoProfissionalDeSaude(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/servidor/" + servidor.getId())).body(servidor);
	}
	
	@PostMapping("updateServidorForPsicologo")
	public ResponseEntity concederAcessoComoPsicologo(@RequestBody String id) throws URISyntaxException {

		Integer ID = Integer.parseInt(id);
		Servidor servidor = null;
		try {
			servidor = servidorService.concederAcessoComoPsicologo(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/servidor/" + servidor.getId())).body(servidor);
	}
	
	@PostMapping("removerAcessoComoProfissionalDeSaude")
	public ResponseEntity removerAcessoComoProfissionalDeSaude(@RequestBody String id) throws URISyntaxException {

		Integer ID = Integer.parseInt(id);
		Servidor servidor = null;
		try {
			servidor = servidorService.removerAcessoComoProfissionalDeSaude(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/servidor/" + servidor.getId())).body(servidor);
	}
	
	@PostMapping("removerAcessoComoPsicologo")
	public ResponseEntity removerAcessoComoPsicologo(@RequestBody String id) throws URISyntaxException {

		Integer ID = Integer.parseInt(id);
		Servidor servidor = null;
		try {
			servidor = servidorService.removerAcessoComoPsicologo(ID);
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
	
	@PostMapping("/isServidorPermissaoProfSaude")
	public boolean retornaPermissaoProfSaude(@RequestBody String googleId){
		
		return servidorService.retornaPermissaoProfSaude(googleId);
	}
	
	@PostMapping("/isServidorPermissaoPsicologo")
	public boolean retornaPermissaoPsicologo(@RequestBody String googleId){
		
		return servidorService.retornaPermissaoPsicologo(googleId);
	}
	
	@PostMapping("/isServidorPermissaoAdmin")
	public boolean retornaPermissaoAdmin(@RequestBody String email){
		email = email.substring(1, email.length() - 1);
		  
		return servidorService.retornaPermissaoAdmin(email);
	}

}
