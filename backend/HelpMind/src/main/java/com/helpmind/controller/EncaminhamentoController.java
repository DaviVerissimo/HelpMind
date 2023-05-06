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

import com.helpmind.model.Constantes;
import com.helpmind.model.Discente;
import com.helpmind.model.Encaminhamento;
import com.helpmind.model.Reporte;
import com.helpmind.model.StatusEncaminhamento;
import com.helpmind.service.EncaminhamentoService;
import com.helpmind.service.ServidorService;

@CrossOrigin(origins = Constantes.URI)
@RestController
@RequestMapping("/Encaminhamento")
public class EncaminhamentoController {

	@Autowired
	private EncaminhamentoService encaminhamentoService;

	@Autowired
	private ServidorService servidorService;

	@GetMapping("/allEncaminhamentos")
	public List<Encaminhamento> retornaTodosEncaminhamentos() {

		return encaminhamentoService.retornaAllEncaminhamentos();

	}

	@PostMapping("salvar")
	public ResponseEntity<Encaminhamento> salvarEncaminhamento(@RequestBody Encaminhamento encaminhamento)
			throws URISyntaxException {
		LocalDateTime data = LocalDateTime.now();
		encaminhamento.setData(data);
		String nomeProfissionalDeSaude = servidorService
				.buscarNomeDoServidorPeloID(encaminhamento.getIdProfissionalDeSaude());
		encaminhamento.setProfSaude(nomeProfissionalDeSaude);
		String idPsicologo = servidorService.buscarIdDoServidorPeloNome(encaminhamento.getPsicologo());
		encaminhamento.setIdPsicologo(idPsicologo);
		encaminhamento.setStatus(StatusEncaminhamento.AGUARDANDO_RESULTADO);
		encaminhamentoService.salvar(encaminhamento);

		return ResponseEntity.created(new URI("/Encaminhamento/" + encaminhamento.getId())).body(encaminhamento);
	}

	@PostMapping("retornaEncaminhamentoPorID")
	public ResponseEntity<Encaminhamento> retornaEncaminhamentoPorID(@RequestBody Integer ID)
			throws URISyntaxException {
		Encaminhamento encaminhamento = encaminhamentoService.retornaEncaminhamentoPorID(ID);

		return ResponseEntity.created(new URI("/Encaminhamento/" + encaminhamento.getId())).body(encaminhamento);
	}

	@PostMapping("retornaEncaminhamentosPorIDdoDiscente")
	public List<Encaminhamento> retornaEncaminhamentosPorIDdoDiscente(@RequestBody String id) {

		return encaminhamentoService.retornaEncaminhamentosPorIDdoDiscente(id);
	}

	@PostMapping("retornaEncaminhamentosPorIDdoPsicologoResponsavel")
	public List<Encaminhamento> retornaEncaminhamentosPorIDdoPsicologoResponsavel(@RequestBody String id) {

		return encaminhamentoService.retornaEncaminhamentosPorIDdoPsicologoResponsavel(id);
	}

	@PostMapping("definirStatusParaFinalizadoEncaminhamentoPorID")
	public ResponseEntity<Encaminhamento> mudarStatusParaFinalizadoNoEncaminhamentoPorID(@RequestBody Integer ID)
			throws URISyntaxException {
		Encaminhamento encaminhamento = encaminhamentoService.retornaEncaminhamentoPorID(ID);
		encaminhamento.setStatus(StatusEncaminhamento.FINALIZADO);
		encaminhamentoService.salvar(encaminhamento);

		return ResponseEntity.created(new URI("/Encaminhamento/" + encaminhamento.getId())).body(encaminhamento);
	}

	@PostMapping("definirStatusParaComRelatorioEncaminhamentoPorID")
	public ResponseEntity<Encaminhamento> definirStatusParaComRelatorioEncaminhamentoPorID(@RequestBody Integer ID)
			throws URISyntaxException {
		Encaminhamento encaminhamento = encaminhamentoService.retornaEncaminhamentoPorID(ID);
		encaminhamento.setStatus(StatusEncaminhamento.RECEBEU_RELATORIO_DO_PSICOLOGO);
		encaminhamentoService.salvar(encaminhamento);

		return ResponseEntity.created(new URI("/Encaminhamento/" + encaminhamento.getId())).body(encaminhamento);
	}

}
