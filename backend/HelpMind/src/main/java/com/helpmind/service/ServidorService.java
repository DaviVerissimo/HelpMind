package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Constantes;
import com.helpmind.model.Servidor;
import com.helpmind.model.Usuario;
import com.helpmind.repository.ServidorRepository;

@Service
public class ServidorService {

	@Autowired
	private ServidorRepository servidorRepository;

	public Servidor salvar(Usuario usuario) {
		Servidor servidor = new Servidor();
		servidor.setNome(usuario.getNome());
		servidor.setEmail(usuario.getEmail());
		servidor.setGoogleId(usuario.getGoogleId());
		servidor.setImagemPerfilUri(usuario.getImagemPerfilUri());
		servidorRepository.save(servidor);

		return servidor;
	}

	public List<Servidor> listaAllServidores() {

		return servidorRepository.findAll();
	}

	public boolean retornaPermissaoAdmin(String email) {
		boolean adminPermission = false;

		if (Constantes.ADMINISTRADOR.equals(email)) {
			adminPermission = true;
		}

		return adminPermission;
	}

	public Servidor retornaServidorByID(Integer ID) {
		Servidor servidor = new Servidor();
		List<Servidor> lista = this.listaAllServidores();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(ID)) {
				servidor = lista.get(i);
			}
		}
		return servidor;
	}

	public Servidor concederAcessoComoProfissionalDeSaude(Integer iD) {
		Servidor servidor = this.retornaServidorByID(iD);
		servidor.setPermissaoDeAcessoProfissionalDeSaude(true);
		servidorRepository.save(servidor);

		return servidor;
	}

	public Servidor concederAcessoComoPsicologo(Integer iD) {
		Servidor servidor = this.retornaServidorByID(iD);
		servidor.setPermissaoDeAcessoPsicologo(true);
		servidorRepository.save(servidor);

		return servidor;
	}

	public Servidor removerAcessoComoProfissionalDeSaude(Integer iD) {
		Servidor servidor = this.retornaServidorByID(iD);
		servidor.setPermissaoDeAcessoProfissionalDeSaude(false);
		servidorRepository.save(servidor);

		return servidor;
	}

	public Servidor removerAcessoComoPsicologo(Integer iD) {
		Servidor servidor = this.retornaServidorByID(iD);
		servidor.setPermissaoDeAcessoPsicologo(false);
		servidorRepository.save(servidor);

		return servidor;
	}

	public Servidor retornarServidorPeloGoogleId(String googleId) {
		Servidor servidor = new Servidor();
		List<Servidor> lista = this.listaAllServidores();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getGoogleId().equals(googleId)) {
				servidor = lista.get(i);
			}
		}

		return servidor;
	}

	public boolean retornaPermissaoProfSaude(String googleId) {
		Servidor servidor = this.retornarServidorPeloGoogleId(googleId);

		return servidor.getPermissaoDeAcessoProfissionalDeSaude();
	}

	public boolean retornaPermissaoPsicologo(String googleId) {
		Servidor servidor = this.retornarServidorPeloGoogleId(googleId);

		return servidor.getPermissaoDeAcessoPsicologo();
	}

	public String buscarNomeDoServidorPeloID(String id) {
		String nome = null;
		Integer ID = Integer.parseInt(id);
		Servidor servidor = this.servidorRepository.getById(ID);
		nome = servidor.getNome();

		return nome;
	}

	public String buscarIdDoServidorPeloNome(String nome) {
		String id = "";
		id = servidorRepository.findByNome(nome).getId().toString();

		return id;
	}

	public List<String> retornaNomesDeTodosServidores() {
		List<String> nomes = new ArrayList<String>();
		List<Servidor> lista = this.listaAllServidores();
		for (int i = 0; i < lista.size(); i++) {
			nomes.add(lista.get(i).getNome());
		}

		return nomes;
	}

	public List<String> retornaNomesDeTodosProfissionaisDeSaude() {
		List<String> nomes = new ArrayList<String>();
		List<Servidor> lista = this.listaAllServidores();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getPermissaoDeAcessoProfissionalDeSaude()) {
				nomes.add(lista.get(i).getNome());
			}
		}

		return nomes;
	}

	public List<String> retornaNomesDeTodosPsicologos() {
		List<String> nomes = new ArrayList<String>();
		List<Servidor> lista = this.listaAllServidores();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getPermissaoDeAcessoPsicologo()) {
				nomes.add(lista.get(i).getNome());
			}
		}

		return nomes;
	}

}
