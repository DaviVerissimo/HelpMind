package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Contato;
import com.helpmind.repository.ContatoRepository;

@Service
public class ContatoService {
	
	@Autowired
	private ContatoRepository contatoRepository;
	
	public void salvar(Contato contato) {
		
		contatoRepository.save(contato);
	}
	
	public List<Contato> retornaAllContatos(){
		
		return contatoRepository.findAll();
	}
	
	public Contato pesquisar(Integer id){
		Contato contato = new Contato();
		List<Contato> lista = this.retornaAllContatos();
		
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(id)) {
				contato = lista.get(i);
			}
		}
		
		return contato;
	}
	
	public Contato remover(Integer id) {
		Contato contato = new Contato();
		contato = this.pesquisar(id);
		contatoRepository.delete(contato);
		
		return contato;
	}
	
	public void update(Contato contato) {
		
		contatoRepository.save(contato);
		
		}

}
