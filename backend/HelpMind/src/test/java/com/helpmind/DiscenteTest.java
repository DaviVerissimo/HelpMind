//package com.helpmind;
//
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.helpmind.model.Discente;
//import com.helpmind.model.Usuario;
//import com.helpmind.repository.DiscenteRepository;
//import com.helpmind.service.DiscenteService;
//
//@SpringBootTest
//public class DiscenteTest {
//	
//	@Autowired
//	private DiscenteRepository discenteRepository;
//	
//	@Autowired
//	private DiscenteService discenteService;
//	
//	@Test
//	void novoDiscente() {
//		Usuario discente = new Usuario();
//		discente.setNome("July Campos");
//		discente.setEmail("julyCampos@gmail.com");
//		discente.setGoogleId("fghfghf");
//		discente.setImagemPerfilUri("httpfhfhf");
////		discente.setCurso("Bacharelado em Engenharia Civil -  João Pessoa");
////		discenteService.criarDiscente(discente);
//		Discente discente2 = new Discente();
//		discente2.setNome("Natanael");
//		discenteRepository.save(discente2);
////		Discente c = discenteRepository.findByEmail("julyCampos@gmail.com");
////		if (!c.equals(null)) {
////			contatoRepository.delete(c);
////		}
////		assertNotNull(c);
//		assertNotNull(discente);
//		
//	}
//	
//
//
//}
