package com.helpmind.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "servidor")
public class Servidor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String email;
	private String googleId;
	private String imagemPerfilUri;
	private Boolean permissaoDeAcessoProfissionalDeSaude = false;
	private Boolean permissaoDeAcessoPsicologo = false;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGoogleId() {
		return googleId;
	}
	public void setGoogleId(String googleId) {
		this.googleId = googleId;
	}
	public String getImagemPerfilUri() {
		return imagemPerfilUri;
	}
	public void setImagemPerfilUri(String imagemPerfilUri) {
		this.imagemPerfilUri = imagemPerfilUri;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Boolean getPermissaoDeAcessoProfissionalDeSaude() {
		return permissaoDeAcessoProfissionalDeSaude;
	}
	public void setPermissaoDeAcessoProfissionalDeSaude(Boolean permissaoDeAcesso) {
		this.permissaoDeAcessoProfissionalDeSaude = permissaoDeAcesso;
	}
	public Boolean getPermissaoDeAcessoPsicologo() {
		return permissaoDeAcessoPsicologo;
	}
	public void setPermissaoDeAcessoPsicologo(Boolean permissaoDeAcessoPsicologo) {
		this.permissaoDeAcessoPsicologo = permissaoDeAcessoPsicologo;
	}
	
}
