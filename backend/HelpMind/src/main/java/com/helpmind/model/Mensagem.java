package com.helpmind.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mensagem")
public class Mensagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String urlImagemPerfil;
	@Column(name = "mensagem", length = 10000)
	private String mensagem;
	private LocalDateTime data;
	private boolean visualizadoPeloProfSaude = false;
	private boolean visualizadoPeloPsicologo = false;
	private String tipoServidor;
	private String usuario;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUrlImagemPerfil() {
		return urlImagemPerfil;
	}

	public void setUrlImagemPerfil(String urlImagemPerfil) {
		this.urlImagemPerfil = urlImagemPerfil;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public LocalDateTime getData() {
		return data;
	}

	public void setData(LocalDateTime data) {
		this.data = data;
	}

	public boolean isVisualizadoPeloProfSaude() {
		return visualizadoPeloProfSaude;
	}

	public void setVisualizadoPeloProfSaude(boolean visualizadoPeloProfSaude) {
		this.visualizadoPeloProfSaude = visualizadoPeloProfSaude;
	}

	public boolean isVisualizadoPeloPsicologo() {
		return visualizadoPeloPsicologo;
	}

	public void setVisualizadoPeloPsicologo(boolean visualizadoPeloPsicologo) {
		this.visualizadoPeloPsicologo = visualizadoPeloPsicologo;
	}

	public String getTipoServidor() {
		return tipoServidor;
	}

	public void setTipoServidor(String tipoServidor) {
		this.tipoServidor = tipoServidor;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

}
