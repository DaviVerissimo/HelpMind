//package com.helpmind;
//
//import java.net.URI;
//import java.net.URISyntaxException;
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//
//import com.helpmind.model.Conversa;
//import com.helpmind.model.Mensagem;
//import com.helpmind.model.StatusServidor;
//import com.helpmind.service.ConversaService;
//
//public class ConversaTest {
//
//private ConversaService conversaService;
//
////	@GetMapping("/buscaConversaPorID")
////	public Conversa retornaDiscentePeloID() {
////		String id = "1";
////		Integer ID = Integer.parseInt(id);
////		Conversa conversa  = new Conversa();;
////		conversa = conversaService.retornaConversaByID(ID);
////		
////		return conversa;
////	}
//
////	@GetMapping("/salvarConversa")
//	public ResponseEntity<Conversa> criarConversa() throws URISyntaxException {
//		Conversa conversa = new Conversa();
//		conversa.setIdDiscente(null);
//		conversa.setIdProfissionalSaude(null);
//		conversa.setIdPsicologo(null);
//		Mensagem mensagem1 = new Mensagem();
//		Mensagem mensagem2 = new Mensagem();
//		mensagem1.setMensagem("Mensagem 1: ocos pocos pcapaus suman");
//		mensagem2.setMensagem("Mensagem 2: zé jacaré");
//		mensagem1.setVisualizadoPeloProfSaude(false);
//		mensagem2.setVisualizadoPeloProfSaude(false);
//		mensagem1.setData(null);
//		mensagem1.setTipoServidor(StatusServidor.PROFISSIONAL_DE_SAUDE);
//		mensagem1.setUrlImagemPerfil("kkkkk");
//
//		mensagem2.setData(null);
//		mensagem2.setTipoServidor(StatusServidor.PROFISSIONAL_DE_SAUDE);
//		mensagem2.setUrlImagemPerfil("kkkkk");
//
//		List<Mensagem> menagens = new ArrayList<Mensagem>();
//		menagens.add(mensagem1);
//		menagens.add(mensagem2);
//		conversa.setMensagens(menagens);
//		conversaService.salvar(conversa);
//
//		return ResponseEntity.created(new URI("/conversa/" + conversa.getId())).body(conversa);
//	}
//}
