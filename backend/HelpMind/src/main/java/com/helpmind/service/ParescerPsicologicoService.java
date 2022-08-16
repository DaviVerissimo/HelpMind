package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.ParescerPsicologico;
import com.helpmind.repository.ParecerPsicologicoRepository;

@Service
public class ParescerPsicologicoService {
	
	@Autowired
	private ParecerPsicologicoRepository parecerPsicologicoRepository;
	
	public void salvar(ParescerPsicologico parescerPsicologico) {
		
		parecerPsicologicoRepository.save(parescerPsicologico);
	}
	
	public List<ParescerPsicologico> retornaAllProntuarios(){
		
		return parecerPsicologicoRepository.findAll();
	}
	
	public ParescerPsicologico pesquisar(Integer id){
		ParescerPsicologico parecerPsicologico = new ParescerPsicologico();
		List<ParescerPsicologico> lista = this.retornaAllProntuarios();
		
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(id)) {
				parecerPsicologico = lista.get(i);
			}
		}
		
		return parecerPsicologico;
	}
	
	public ParescerPsicologico remover(Integer id) {
		ParescerPsicologico parecerPsicologico = new ParescerPsicologico();
		parecerPsicologico = this.pesquisar(id);
		parecerPsicologicoRepository.delete(parecerPsicologico);
		
		return parecerPsicologico;
	}
	
	public void update(ParescerPsicologico parecerPsicologico) {
		
		parecerPsicologicoRepository.save(parecerPsicologico);
		
		}

}
