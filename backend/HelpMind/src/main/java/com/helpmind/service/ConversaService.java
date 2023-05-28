package com.helpmind.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

	public synchronized Conversa addMensagemNaConversa(Mensagem mensagem, Integer ID) {
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
	private void notificar () {
		// o front realiza uma requisição booleana para saber pelo id se aquele servidor tem mensagens não vistas
		// caso tenha o front realiza uma requisição enviando o id do servidor e pedindo o id da conversa
		// no backend 
		//na lista de todas as conversas passar o id do servidor
		//se esse servidor tiver em alguma conversa mensagens não visualizadas retornar o id da conversa
		// no fronte em pérfil aparesce um toast com um botao que leva para a conversa.
		//passo x: sempre que uma conversa for visualizada mandar requisição com id da conversa  e id da mensagem mudando status booleano da mensagem caso serja false
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
		List<Conversa> lista = this.retornaAllConversaByIdProfSaude(id);
		for (int i = 0; i < lista.size() - 1; i++) {
			if(lista.get(i).getMensagens().size() > 0) {
				List<Mensagem> mensagens = lista.get(i).getMensagens();
				if (!mensagens.get(i).isVisualizadoPeloProfSaude()) {//error aqui
					return lista.get(i).getId();
				}
			}
		}
		
		return -1;
	}
	
	public int retornaIdConversasNaoVisualizadasPsicologo(String id) {
		List<Conversa> lista = this.retornaAllConversaByIdProfSaude(id);
//		for (int i = 0; i < lista.size(); i++) {
//			List<Mensagem> mensagens = lista.get(i).getMensagens();
//			if (!mensagens.get(i).isVisualizadoPeloPsicologo()) {
//				return lista.get(i).getId();
//			}
//		}
		for (int i = 0; i < lista.size() - 1; i++) {
			if(lista.get(i).getMensagens().size() > 0) {
				List<Mensagem> mensagens = lista.get(i).getMensagens();
				if (!mensagens.get(i).isVisualizadoPeloPsicologo()) {//error aqui
					return lista.get(i).getId();
				}
			}
		}	
		
		return -1;
	}

	public Conversa conversaVisualizadaPeloPsicologo(String id) {
		Integer ID = Integer.parseInt(id);
		Conversa conversa = this.retornaConversaByID(ID);
		conversa = this.marcaMensagensComoLidaPeloPsicologo(conversa);
		this.salvar(conversa);
		return conversa;
	}
	
	public Conversa conversaVisualizadaPeloProfSaude(String id) {
		Integer ID = Integer.parseInt(id);
		Conversa conversa = this.retornaConversaByID(ID);
		conversa = this.marcaMensagensComoLidaPeloProfSaude(conversa);
		this.salvar(conversa);
		return conversa;
	}
	
	public Conversa marcaMensagensComoLidaPeloPsicologo(Conversa conversa) {
		List<Mensagem> mensagens = conversa.getMensagens();
		for (int i = 0; i < mensagens.size(); i++) {
			mensagens.get(i).setVisualizadoPeloPsicologo(true);
		}
		conversa.setMensagens(mensagens);
		
		return conversa;
		
	}
	
	public Conversa marcaMensagensComoLidaPeloProfSaude(Conversa conversa) {
		List<Mensagem> mensagens = conversa.getMensagens();
		for (int i = 0; i < mensagens.size(); i++) {
			mensagens.get(i).setVisualizadoPeloPsicologo(true);
		}
		conversa.setMensagens(mensagens);
		
		return conversa;
		
	}
}
