package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Administrador;
import com.helpmind.model.Servidor;
import com.helpmind.model.Usuario;
import com.helpmind.repository.AdministradorRepository;
import com.helpmind.repository.ServidorRepository;

@Service
public class ServidorService {
	
	@Autowired
	private ServidorRepository servidorRepository;
	@Autowired
	private AdministradorRepository administradorRepository;
	
	public Servidor salvar(Usuario usuario) {
		Servidor servidor = new Servidor();
		servidor.setNome(usuario.getNome());
		servidor.setEmail(usuario.getEmail());
		servidor.setGoogleId(usuario.getGoogleId());
		servidor.setImagemPerfilUri(usuario.getImagemPerfilUri());
		servidorRepository.save(servidor);
		if (!isAdmin()) {
			this.criarAdminComPrimeiroServidor(servidor);
		}
		
		return servidor;
	}
	
	private boolean isAdmin() {
		boolean existe = false;
//		List<Administrador> admin = administradorRepository.findAll();
//		System.out.println(admin.equals(null));
//		System.out.println("gilo ");
//		if(admin.get(0).equals(null)) {
//			System.out.println("carrapeta");
//			existe = false;
//		}
		
		return existe;
	}
	
	private void criarAdminComPrimeiroServidor(Servidor servidor) {
		Administrador admin = new Administrador(servidor);
		administradorRepository.save(admin);
	}
	
	public List<Servidor> listaAllServidores(){
		
		return servidorRepository.findAll();
	}
	
	public boolean retornaPermissaoAdmin(String googleId) {
		boolean adminPermission = false;
		List<Administrador> admin = administradorRepository.findAll();
		if(admin.get(0).equals(googleId)) {
			adminPermission = true;
		}
		
		return adminPermission;
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
	
	public boolean retornaPermissaoProfSaude(String googleId) {
		Servidor servidor = this.retornarServidorPeloGoogleId(googleId);
		
		return servidor.getPermissaoDeAcessoProfissionalDeSaude();
	}
	
	public boolean retornaPermissaoPsicologo(String googleId) {
		Servidor servidor = this.retornarServidorPeloGoogleId(googleId);
		
		return servidor.getPermissaoDeAcessoPsicologo();
	}

}
