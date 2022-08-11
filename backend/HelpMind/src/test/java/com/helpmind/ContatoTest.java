package com.helpmind;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.helpmind.model.Contato;
import com.helpmind.repository.ContatoRepository;
import com.helpmind.service.ContatoService;

@SpringBootTest
public class ContatoTest {
	
	@Autowired
	private ContatoRepository contatoRepository;
	
	@Autowired
	private ContatoService contatoService;
	
	@Test
	void novoContato() {
		Contato contato = new Contato();
		contato.setNome("July Campos");
		contato.setEmail("julyCampos@gmail.com");
		contato.setTelefone("9999999999");
		contatoService.salvar(contato);
		Contato c = contatoRepository.findByNome("July Campos");
		if (!c.equals(null)) {
			contatoRepository.delete(c);
		}
		assertNotNull(c);
		
	}
	
	@Test
	void removerContato() {
		Contato contato = new Contato();
		contato.setNome("Mirely Golveia");
		contato.setEmail("MirelyGolveia@gmail.com");
		contato.setTelefone("9999999999");
		contatoService.salvar(contato);
		Contato c = contatoRepository.findByNome("Mirely Golveia");
		Contato d = contatoService.remover(c.getId());
		
		assertNotNull(d);
		
	}
	
	@Test
	void pesquisarContato() {
		Contato contato = new Contato();
		contato.setNome("Talita Oliveira");
		contato.setEmail("TalitaOliveira@gmail.com");
		contato.setTelefone("9999999999");
		contatoService.salvar(contato);
		Contato c = contatoRepository.findByNome("Talita Oliveira");
		if (!c.equals(null)) {
			contatoRepository.delete(c);
		}
		assertNotNull(c);
		
	}
	
	@Test
	void editarContato() {
		Contato contato = new Contato();
		contato.setNome("Freud Thompson");
		contato.setEmail("freudExplicapsq@gmail.com");
		contato.setTelefone("9999999999");
		contatoService.salvar(contato);
		Contato c = contatoRepository.findByNome("Freud Thompson");
		c.setNome("Freud - Psicanalista do CISCO");
		contatoService.update(c);
		Contato d = contatoService.pesquisar(c.getId());
		if (!c.equals(null)) {
			contatoRepository.delete(c);
		}
		assertEquals("Freud - Psicanalista do CISCO", d.getNome());
		
	}

}
