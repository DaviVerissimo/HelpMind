package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Prontuario;
import com.helpmind.repository.ProntuarioRepository;

@Service
public class ProntuarioService {

	@Autowired
	private ProntuarioRepository prontuarioRepository;

	public void salvar(Prontuario prontuario) {

		prontuarioRepository.save(prontuario);
	}

	public List<Prontuario> retornaAllProntuarios() {

		return prontuarioRepository.findAll();
	}

	public Prontuario pesquisar(Integer id) {
		Prontuario prontuario = new Prontuario();
		List<Prontuario> lista = this.retornaAllProntuarios();

		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(id)) {
				prontuario = lista.get(i);
			}
		}

		return prontuario;
	}

	public Prontuario remover(Integer id) {
		Prontuario prontuario = new Prontuario();
		prontuario = this.pesquisar(id);
		prontuarioRepository.delete(prontuario);

		return prontuario;
	}

	public void update(Prontuario prontuario) {

		prontuarioRepository.save(prontuario);

	}

	public List<Prontuario> retornaProntuariosPeloIdDiscente(String ID) {
		List<Prontuario> all = prontuarioRepository.findAll();
		List<Prontuario> lista = new ArrayList<Prontuario>();

		for (int i = 0; i < all.size(); i++) {
			if (all.get(i).getIdDiscente().equals(ID)) {
				lista.add(all.get(i));
			}
		}

		return lista;
	}

}
