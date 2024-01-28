package com.helpmind.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.Discente;
import com.helpmind.model.Usuario;
import com.helpmind.service.DiscenteService;

/**
 * @author davi
 *
 */
@RestController
@RequestMapping("/discente")
public class DiscenteController {

	@Autowired
	private DiscenteService discenteService;

	@GetMapping("/allDiscentes")
	public List<Discente> retornaTodosDiscentes() {

		return discenteService.retornaAllDiscentes();

	}

	@PostMapping("/salvarUserDiscente")
	public ResponseEntity<Discente> criarDiscente(@RequestBody Usuario usuario) throws URISyntaxException {
		Discente discente = new Discente();

		try {
			discente = discenteService.criarDiscente(usuario);
		} catch (Exception e) {
		}

		return ResponseEntity.created(new URI("/discente/" + discente.getId())).body(discente);
	}

	@PostMapping("/isDiscenteGoogleId")
	public ResponseEntity<Discente> isExiste(@RequestBody String googleId) throws URISyntaxException {
		Discente discente = new Discente();
		try {
			discente = discenteService.retornarDiscentePeloGoogleId(googleId);
		} catch (Exception e) {
		}

		return ResponseEntity.created(new URI("/discente/" + discente.getId())).body(discente);
	}

	@GetMapping("/isDiscente")
	public boolean isDiscenteComCadrasto(String email) {

		return discenteService.isDiscente(email);
	}

	@PostMapping("/buscaDiscentePorID")
	public Discente retornaDiscentePeloID(@RequestBody String id) {
		Integer ID = Integer.parseInt(id);
		Discente discente = null;
		discente = discenteService.buscaDiscentePorID(ID);
		return discente;
	}

	@GetMapping("/discenteComAumentoVulnerabilidadeEmocional")
	public List<Discente> retornaDiscenteComAumentoVulnerabilidadeEmocional() {

		return discenteService.verificarAumentoVulnerabilidadeEmocional();
	}

	@GetMapping("/isAumento")
	public boolean isAumento() {
		boolean aumento = false;
		if (discenteService.verificarAumentoVulnerabilidadeEmocional().get(0) != null) {
			aumento = true;
		}

		return aumento;
	}

	@GetMapping("/listarAllNomesDiscentes")
	public List<String> retornaTodosNomesDiscentes() {

		return discenteService.retornaAllNomesDiscentes();
	}

	@GetMapping("/listarAllEmailDiscentes")
	public List<String> retornaTodosEmailDiscentes() {

		return discenteService.retornaAllEmailDiscentes();
	}

}
