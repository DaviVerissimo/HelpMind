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
import com.helpmind.model.Conversa;
import com.helpmind.model.Envelope;
import com.helpmind.model.Mensagem;
import com.helpmind.service.ConversaService;

@CrossOrigin(origins = Constantes.URI)
@RestController
@RequestMapping("/conversa")
public class ConversaController {

	@Autowired
	private ConversaService conversaService;

	@GetMapping("/allconversas")
	public List<Conversa> retornaAllConversas() {

		return conversaService.retornaAllConversa();

	}
	
	@PostMapping("/retornaConversasProfSaude")
	public List<Conversa> retornaConversasProfSaude(@RequestBody String id) {

		return conversaService.retornaAllConversaByIdProfSaude(id);
	}
	
	@PostMapping("/retornaConversasPsicologo")
	public List<Conversa> retornaConversasPsicologo(@RequestBody String id) {

		return conversaService.retornaAllConversaByIdPsicologo(id);
	}

	@PostMapping("/salvarConversa")
	public ResponseEntity<Conversa> criarConversa(@RequestBody Conversa conversa) throws URISyntaxException {
		conversaService.salvar(conversa);

		return ResponseEntity.created(new URI("/conversa/" + conversa.getId())).body(conversa);
	}

	@PostMapping("/buscaConversaPorID")
	public Conversa retornaConversaPeloID(@RequestBody String id) {
		Integer ID = Integer.parseInt(id);
		Conversa conversa = new Conversa();
		conversa = conversaService.retornaConversaByID(ID);
		conversa.setMensagens(conversaService.ordenaMensagensPorData(conversa.getMensagens()));

		return conversa;
	}

	@PostMapping("/verificarConversaPorConjutoDeIDs")
	public String verificarConversaPorConjutoDeIDs(@RequestBody Identificadores identificadores) {
		int idConversa = 0;
		idConversa = conversaService.retornaIdConversaByIdentificadores(identificadores.getIdDiscente(),
				identificadores.getIdProfissionalSaude(), identificadores.getIdPsicologo());

		return Integer.toString(idConversa);
	}

	@PostMapping("/addMensagemNaConversaPorID")
	public Conversa addMensagemNaConversaPorID(@RequestBody Envelope envelope) {
		Integer ID = Integer.parseInt(envelope.getId());

		return conversaService.addMensagemNaConversa(envelope.getMensagem(), ID);
	}

	@PostMapping("/retornaMensagensDaConversaById")
	public List<Mensagem> retornaMensagensDaConversaById(@RequestBody Integer ID) {

		return conversaService.retornaMensagensDaConversaById(ID);
	}
	
	@PostMapping("/verificaIsMensagensNaoVisualizadasProfSaude")
	public boolean verificaIsMensagensNaoVisualizadasProfSaude(@RequestBody String id) {

		return conversaService.verificaIsMensagensNaoVisualizadasProfSaude(id);
	}
	
	@PostMapping("/verificaIsMensagensNaoVisualizadasPsicologo")
	public boolean verificaIsMensagensNaoVisualizadasPsicologo(@RequestBody String id) {

		return conversaService.verificaIsMensagensNaoVisualizadasPsicologo(id);
	}
	
	@PostMapping("/retornaIdConversaNaoVisualizadasProfSaude")
	public int retornaIdConversaNaoVisualizadasProfSaude(@RequestBody String id) {

		return conversaService.retornaIdConversaNaoVisualizadasProfSaude(id);
	}
	
	@PostMapping("/retornaIdConversasNaoVisualizadasPsicologo")
	public int retornaIdConversasNaoVisualizadasPsicologo(@RequestBody String id) {

		return conversaService.retornaIdConversasNaoVisualizadasPsicologo(id);
	}
	
	@PostMapping("/conversaVisualizadaPeloProfSaude")
	public Conversa conversaVisualizadaPeloProfSaude(@RequestBody String id) {

		return conversaService.conversaVisualizadaPeloProfSaude(id);
	}
	
	@PostMapping("/conversaVisualizadaPeloPsicologo")
	public Conversa conversaVisualizadaPeloPsicologo(@RequestBody String id) {

		return conversaService.conversaVisualizadaPeloPsicologo(id);
	}

}
