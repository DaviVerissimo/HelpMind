package com.helpmind.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "estatistica")
public class Estatistica {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String curso;
	private int quantidadeMinima;
	private int quantidadeLeve;
	private int quantidadeModerada;
	private int quantidadeGrave;
	private int quantidadeTotal;
	private float media;
	private String statusMedio;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public int getQuantidadeMinima() {
		return quantidadeMinima;
	}
	public void setQuantidadeMinima(int quantidadeMinima) {
		this.quantidadeMinima = quantidadeMinima;
	}
	public int getQuantidadeLeve() {
		return quantidadeLeve;
	}
	public void setQuantidadeLeve(int quantidadeLeve) {
		this.quantidadeLeve = quantidadeLeve;
	}
	public int getQuantidadeModerada() {
		return quantidadeModerada;
	}
	public void setQuantidadeModerada(int quantidadeModerada) {
		this.quantidadeModerada = quantidadeModerada;
	}
	public int getQuantidadeGrave() {
		return quantidadeGrave;
	}
	public void setQuantidadeGrave(int quantidadeGrave) {
		this.quantidadeGrave = quantidadeGrave;
	}
	public int getQuantidadeTotal() {
		return quantidadeTotal;
	}
	public void setQuantidadeTotal(int quantidadeTotal) {
		this.quantidadeTotal = quantidadeTotal;
	}
	public float getMedia() {
		return media;
	}
	public void setMedia(float media) {
		this.media = media;
	}
	public String getStatusMedio() {
		return statusMedio;
	}
	public void setStatusMedio(String statusMedio) {
		this.statusMedio = statusMedio;
	}

}
