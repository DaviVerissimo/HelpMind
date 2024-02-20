package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.RelatorioPsicologico;
import com.helpmind.repository.RelatorioPsicologicoRepository;

@Service
public class ParescerPsicologicoService {
	
	@Autowired
	private RelatorioPsicologicoRepository relatorioPsicologicoRepository;
	
	public void salvar(RelatorioPsicologico relatorioPsicologico) {
		
		relatorioPsicologicoRepository.save(relatorioPsicologico);
	}
	
	public List<RelatorioPsicologico> retornaAllProntuarios(){
		
		return relatorioPsicologicoRepository.findAll();
	}
	
	public RelatorioPsicologico pesquisar(Integer id){
		RelatorioPsicologico relatorioPsicologico = new RelatorioPsicologico();
		List<RelatorioPsicologico> lista = this.retornaAllProntuarios();
		
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(id)) {
				relatorioPsicologico = lista.get(i);
			}
		}
		
		return relatorioPsicologico;
	}
	
	public RelatorioPsicologico remover(Integer id) {
		RelatorioPsicologico relatorioPsicologico = new RelatorioPsicologico();
		relatorioPsicologico = this.pesquisar(id);
		relatorioPsicologicoRepository.delete(relatorioPsicologico);
		
		return relatorioPsicologico;
	}
	
	public void update(RelatorioPsicologico relatorioPsicologico) {
		
		relatorioPsicologicoRepository.save(relatorioPsicologico);
		
		}

}
