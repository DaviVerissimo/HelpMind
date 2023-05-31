package com.helpmind.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.helpmind.model.Conversa;
import com.helpmind.model.Mensagem;
import com.helpmind.repository.ConversaRepository;

@Service
public class ConversaService {

	@Autowired
	private ConversaRepository conversaRepository;

	@Autowired
	private DiscenteService discenteService;

	@Autowired
	private ServidorService servidorService;

	public Conversa salvar(Conversa conversa) {
		conversa = this.definiNomesDiscenteProfissionalSaudePsicologo(conversa);
		conversaRepository.save(conversa);

		return conversa;
	}

	public List<Conversa> retornaAllConversa() {

		return conversaRepository.findAll();
	}

	public List<Conversa> retornaAllConversaByIdPsicologo(String id) {
		List<Conversa> all = this.retornaAllConversa();
		List<Conversa> lista = new ArrayList<Conversa>();
		for (int i = 0; i < all.size(); i++) {
			if (all.get(i).getIdPsicologo().equals(id)) {
				lista.add(all.get(i));
			}
		}
		return lista;
	}

	public List<Conversa> retornaAllConversaByIdProfSaude(String id) {
		List<Conversa> all = this.retornaAllConversa();
		List<Conversa> lista = new ArrayList<Conversa>();
		for (int i = 0; i < all.size(); i++) {
			if (all.get(i).getIdProfissionalSaude().equals(id)) {
				lista.add(all.get(i));
			}
		}
		return lista;
	}

	public Conversa retornaConversaByID(Integer ID) {
		List<Conversa> all = this.retornaAllConversa();
		Conversa conversa = new Conversa();
		for (int i = 0; i < all.size(); i++) {
			if (all.get(i).getId().equals(ID)) {
				conversa = all.get(i);
				return conversa;
			}
		}

		return conversa;
	}

	public Conversa addMensagemNaConversa(Mensagem mensagem, Integer ID) {
		Conversa conversa = this.retornaConversaByID(ID);
		List<Mensagem> mensagens = conversa.getMensagens();
		LocalDateTime data = LocalDateTime.now();
		mensagem.setData(data);
		mensagens.add(mensagem);
		mensagens = this.ordenaMensagensPorData(mensagens);
		conversa.setMensagens(mensagens);
		conversaRepository.save(conversa);

		return conversa;
	}

	public int retornaIdConversaByIdentificadores(String idDiscente, String idProfissionalSaude, String idPsicologo) {
		List<Conversa> all = this.retornaAllConversa();
		int id = -1;

		for (int i = 0; i < all.size(); i++) {
			if (all.get(i).getIdDiscente().equals(idDiscente)
					&& all.get(i).getIdProfissionalSaude().equals(idProfissionalSaude)
					&& all.get(i).getIdPsicologo().equals(idPsicologo)) {

				id = all.get(i).getId();
			}
		}

		if (id == -1) {
			Conversa conversa = new Conversa();
			conversa.setIdDiscente(idDiscente);
			conversa.setIdProfissionalSaude(idProfissionalSaude);
			conversa.setIdPsicologo(idPsicologo);
			conversa.setMensagens(new ArrayList<Mensagem>());
			conversa = this.salvar(conversa);
			id = conversa.getId();
		}

		return id;
	}

	public List<Mensagem> retornaMensagensDaConversaById(Integer iD) {

		return retornaConversaByID(iD).getMensagens();
	}

	public Conversa definiNomeDiscenteDaConversa(Conversa conversa) {
		Integer ID = Integer.parseInt(conversa.getIdDiscente());
		conversa.setNomeDiscente(discenteService.buscaDiscentePorID(ID).getNome());

		return conversa;
	}

	public Conversa definiNomeProfSaudeDaConversa(Conversa conversa) {
		conversa.setNomeProfSaude(servidorService.buscarNomeDoServidorPeloID(conversa.getIdProfissionalSaude()));

		return conversa;
	}

	public Conversa definiNomePsicologoDaConversa(Conversa conversa) {
		conversa.setNomePsicologo(servidorService.buscarNomeDoServidorPeloID(conversa.getIdPsicologo()));

		return conversa;
	}

	public Conversa definiNomesDiscenteProfissionalSaudePsicologo(Conversa conversa) {
		conversa = this.definiNomeDiscenteDaConversa(conversa);
		conversa = this.definiNomeProfSaudeDaConversa(conversa);
		conversa = this.definiNomePsicologoDaConversa(conversa);

		return conversa;
	}

	public List<Mensagem> ordenaMensagensPorData(List<Mensagem> mensagens) {
		// Criando um Comparator para ordenar por data e hora
		Comparator<Mensagem> comparador = Comparator.comparing(Mensagem::getData);
		// Ordenando o ArrayList usando o Comparator
		Collections.sort(mensagens, comparador);
		List<Mensagem> mensagensOrdenadas = new ArrayList<Mensagem>();

		for (int i = 0; i < mensagens.size(); i++) {
			mensagensOrdenadas.add(mensagens.get(i));
		}

		return mensagensOrdenadas;
	}

	public boolean verificaIsMensagensNaoVisualizadasProfSaude(String id) {
		if (retornaIdConversaNaoVisualizadasProfSaude(id) > 0) {

			return true;
		}

		return false;
	}

	public boolean verificaIsMensagensNaoVisualizadasPsicologo(String id) {
		if (retornaIdConversasNaoVisualizadasPsicologo(id) > 0) {

			return true;
		}

		return false;
	}

	public int retornaIdConversaNaoVisualizadasProfSaude(String id) {
		int idConversa = -1;
		List<Conversa> lista = this.retornaAllConversaByIdProfSaude(id);
		try {
			for (int i = 0; i < lista.size(); i++) {
				if (lista.get(i).getMensagens().size() > 0) {
					List<Mensagem> mensagens = lista.get(i).getMensagens();
					if (!mensagens.get(i).isVisualizadoPeloProfSaude()) {
						idConversa = lista.get(i).getId();
					}
				}
			}
		} catch (Exception e) {

			return idConversa;
		}

		return idConversa;
	}

	public int retornaIdConversasNaoVisualizadasPsicologo(String id) {
		int idConversa = -1;
		List<Conversa> lista = this.retornaAllConversaByIdPsicologo(id);
		try {
			for (int i = 0; i < lista.size(); i++) {
				if (lista.get(i).getMensagens().size() > 0) {
					List<Mensagem> mensagens = lista.get(i).getMensagens();
					if (!mensagens.get(i).isVisualizadoPeloPsicologo()) {
						idConversa = lista.get(i).getId();
					}
				}
			}
		} catch (Exception e) {

			return idConversa;
		}

		return idConversa;
	}

	public Conversa conversaVisualizadaPeloPsicologo(String id) {
		Integer ID = Integer.parseInt(id);
		Conversa conversa = this.retornaConversaByID(ID);
		conversa = this.definirVisualizadoPeloPsicologoParaConversa(conversa);

		return conversa;
	}

	public Conversa conversaVisualizadaPeloProfSaude(String id) {
		Integer ID = Integer.parseInt(id);
		Conversa conversa = this.retornaConversaByID(ID);
		conversa = this.definirVisualizadoPeloProfSaudeParaConversa(conversa);

		return conversa;
	}

	@Transactional
	public Conversa definirVisualizadoPeloProfSaudeParaConversa(Conversa conversa) {
		List<Mensagem> mensagens = conversa.getMensagens();
		for (int i = 0; i < mensagens.size(); i++) {
			mensagens.get(i).setVisualizadoPeloProfSaude(true);
		}
		conversa.setMensagens(mensagens);
		conversaRepository.save(conversa);

		return conversa;

	}

	@Transactional
	public Conversa definirVisualizadoPeloPsicologoParaConversa(Conversa conversa) {
		List<Mensagem> mensagens = conversa.getMensagens();
		for (int i = 0; i < mensagens.size(); i++) {
			mensagens.get(i).setVisualizadoPeloPsicologo(true);
		}
		conversa.setMensagens(mensagens);
		conversaRepository.save(conversa);

		return conversa;
	}

}
