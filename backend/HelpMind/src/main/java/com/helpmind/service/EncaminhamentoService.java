package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Encaminhamento;
import com.helpmind.repository.EncaminhamentoRepository;

@Service
public class EncaminhamentoService {

	@Autowired
	private EncaminhamentoRepository encaminhamentoRepository;

	public void salvar(Encaminhamento encaminhamento) {
		encaminhamentoRepository.save(encaminhamento);
	}

	public List<Encaminhamento> retornaAllEncaminhamentos() {

		return encaminhamentoRepository.findAll();
	}

	public Encaminhamento retornaEncaminhamentoPorID(Integer ID) {
		Encaminhamento encaminhamento = new Encaminhamento();
		
		List<Encaminhamento> all = this.retornaAllEncaminhamentos();
		for (int i = 0; i < all.size(); i++) {
			if (all.get(i).getId().equals(ID)) {
				encaminhamento = all.get(i);
			}
		}
		
		return encaminhamento;
	}

	public List<Encaminhamento> retornaEncaminhamentosPorIDdoProfissionalDeSaudeResponsavel(String id) {
		List<Encaminhamento> lista = new ArrayList<Encaminhamento>();
		lista = encaminhamentoRepository.findByIdProfissionalDeSaude(id);

		return lista;
	}

	public List<Encaminhamento> retornaEncaminhamentosPorIDdoPsicologoResponsavel(String id) {
		List<Encaminhamento> lista = new ArrayList<Encaminhamento>();
//		lista = encaminhamentoRepository.findByIdPsicologo(id);
		List<Encaminhamento> all = this.retornaAllEncaminhamentos();
		for (int i = 0; i < all.size(); i++) {
			if (all.get(i).getIdPsicologo().equals(id)) {
				lista.add(all.get(i));
			}
		}

		return lista;
	}
	
	public List<Encaminhamento> retornaEncaminhamentosPorIDdoDiscente(String id) {
		List<Encaminhamento> lista = new ArrayList<Encaminhamento>();
//		lista = encaminhamentoRepository.findByIdPsicologo(id);
		List<Encaminhamento> all = this.retornaAllEncaminhamentos();
		for (int i = 0; i < all.size(); i++) {
			if (all.get(i).getIdDiscente().equals(id)) {
				lista.add(all.get(i));
			}
		}

		return lista;
	}

}
