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

import com.helpmind.model.Encaminhamento;
import com.helpmind.model.RelatorioPsicologico;
import com.helpmind.service.EncaminhamentoService;
import com.helpmind.service.ParescerPsicologicoService;

@RestController
@RequestMapping("/parecerPsicologico")
public class RelatorioPsicologicoController {
	
	@Autowired
	private ParescerPsicologicoService relatorioPsicologicoService;
	
	@Autowired
	private EncaminhamentoService encaminhamentoService;
	
	@PostMapping("salvarParecerPsicologico")
	public ResponseEntity salvarParecerPsicologico(@RequestBody RelatorioPsicologico parecerPsicologico) throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		parecerPsicologico.setData(data);
		try {
			relatorioPsicologicoService.salvar(parecerPsicologico);
			Integer ID = Integer.parseInt(parecerPsicologico.getIdEncaminhamento());
			Encaminhamento encaminhamento = encaminhamentoService.retornaEncaminhamentoPorID(ID);
			encaminhamento.setIdRelatorio(parecerPsicologico.getId().toString());
			encaminhamentoService.salvar(encaminhamento);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/parecerPsicologico/" + parecerPsicologico.getId())).body(parecerPsicologico);
	}
	
	@GetMapping("listarAllParescerPsicologico")
	public List<RelatorioPsicologico> retornaAllPareceres(){
		
		return relatorioPsicologicoService.retornaAllProntuarios();
	}
	
	@PostMapping("removerParescerPsicologico")
	public ResponseEntity removerParecer(@RequestBody Integer ID) throws URISyntaxException {
		RelatorioPsicologico parescerPsicologico = null;
		try {
			parescerPsicologico = relatorioPsicologicoService.remover(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/parescerPsicologico/" + parescerPsicologico.getId())).body(parescerPsicologico);
	}
	
	@PostMapping("updateParescerPsicologico")
	public ResponseEntity updateParescer(@RequestBody RelatorioPsicologico parescerPsicologico) throws URISyntaxException {
		
		try {
			relatorioPsicologicoService.update(parescerPsicologico);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/parescerPsicologico/" + parescerPsicologico.getId())).body(parescerPsicologico);
	}
	
	@PostMapping("pesquisarParescerPsicologico")
	public ResponseEntity pesquisarParecer(@RequestBody Integer ID) throws URISyntaxException {
		RelatorioPsicologico parescerPsicologico = null;
		try {
			parescerPsicologico = relatorioPsicologicoService.pesquisar(ID);
			} catch(Exception e){}
	
		return ResponseEntity.created(new URI("/parescerPsicologico/" + parescerPsicologico.getId())).body(parescerPsicologico);
	}
	
}