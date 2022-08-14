package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	public List<Servidor> listaAllServidores(){
		
		return servidorRepository.findAll();
	}
	
	public Servidor pesquisar(Integer ID) {
		Servidor servidor = new Servidor();
		List<Servidor> lista = this.listaAllServidores();
		for (int i = 0;i < lista.size(); i++) {
			if (lista.get(i).getId().equals(ID)) {
				servidor = lista.get(i);
			}
		}
		return servidor;
	}

	public Servidor concederAcessoComoProfissionalDeSaude(Integer iD) {
		Servidor servidor = this.pesquisar(iD);
		servidor.setPermissaoDeAcessoProfissionalDeSaude(true);
		servidorRepository.save(servidor);
		 
		return servidor;
	}
	
	public Servidor concederAcessoComoPsicologo(Integer iD) {
		Servidor servidor = this.pesquisar(iD);
		servidor.setPermissaoDeAcessoPsicologo(true);
		servidorRepository.save(servidor);
		 
		return servidor;
	}
	
	public Servidor removerAcessoComoProfissionalDeSaude(Integer iD) {
		Servidor servidor = this.pesquisar(iD);
		servidor.setPermissaoDeAcessoProfissionalDeSaude(false);
		servidorRepository.save(servidor);
		 
		return servidor;
	}
	
	public Servidor removerAcessoComoPsicologo(Integer iD) {
		Servidor servidor = this.pesquisar(iD);
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

}
