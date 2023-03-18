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
	private int quantidadeDiscente;
	private int quantidadeDepressaoGrave;
	private int quantidadeDepressaoModerada;
	private int quantidadeAnsiedadeGrave;
	private int quantidadeAnsiedadeModerada;
	private int quantidadeAnsiedadeMinima;
	private int quantidadeAnsiedadeleve;
	private int quantidadeDepressaoMinima;
	private int quantidadeDepressaoLeve;
	private String statusMedioDepressao;
	private String statusMedioAnsiedade;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public int getQuantidadeDiscente() {
		return quantidadeDiscente;
	}
	public void setQuantidadeDiscente(int quantidadeDiscente) {
		this.quantidadeDiscente = quantidadeDiscente;
	}
	public int getQuantidadeDepressaoGrave() {
		return quantidadeDepressaoGrave;
	}
	public void setQuantidadeDepressaoGrave(int quantidadeDepressaoGrave) {
		this.quantidadeDepressaoGrave = quantidadeDepressaoGrave;
	}
	public int getQuantidadeDepressaoModerada() {
		return quantidadeDepressaoModerada;
	}
	public void setQuantidadeDepressaoModerada(int quantidadeDepressaoModerada) {
		this.quantidadeDepressaoModerada = quantidadeDepressaoModerada;
	}
	public int getQuantiddeAnsiedadeGrave() {
		return quantidadeAnsiedadeGrave;
	}
	public void setQuantideAnsiedadeGrave(int quantiddeAnsiedadeGrave) {
		this.quantidadeAnsiedadeGrave = quantiddeAnsiedadeGrave;
	}
	public int getQuantidadeAnsiedadeModerada() {
		return quantidadeAnsiedadeModerada;
	}
	public void setQuantidadeAnsiedadeModerada(int quantidadeAnsiedadeModerada) {
		this.quantidadeAnsiedadeModerada = quantidadeAnsiedadeModerada;
	}
	public String getStatusMedioDepressao() {
		return statusMedioDepressao;
	}
	public void setStatusMedioDepressao(String statusMedioDepressao) {
		this.statusMedioDepressao = statusMedioDepressao;
	}
	public String getStatusMedioAnsiedade() {
		return statusMedioAnsiedade;
	}
	public void setStatusMedioAnsiedade(String statusMedioAnsiedade) {
		this.statusMedioAnsiedade = statusMedioAnsiedade;
	}
	public int getQuantidadeAnsiedadeMinima() {
		return quantidadeAnsiedadeMinima;
	}
	public void setQuantidadeAnsiedadeMinima(int quantidadeAnsiedadeMinima) {
		this.quantidadeAnsiedadeMinima = quantidadeAnsiedadeMinima;
	}
	public int getQuantidadeAnsiedadeleve() {
		return quantidadeAnsiedadeleve;
	}
	public void setQuantidadeAnsiedadeleve(int quantidadeAnsiedadeleve) {
		this.quantidadeAnsiedadeleve = quantidadeAnsiedadeleve;
	}
	public int getQuantidadeDepressaoMinima() {
		return quantidadeDepressaoMinima;
	}
	public void setQuantidadeDepressaoMinima(int quantidadeDepressaoMinima) {
		this.quantidadeDepressaoMinima = quantidadeDepressaoMinima;
	}
	public int getQuantidadeDepressaoLeve() {
		return quantidadeDepressaoLeve;
	}
	public void setQuantidadeDepressaoLeve(int quantidadeDepressaoLeve) {
		this.quantidadeDepressaoLeve = quantidadeDepressaoLeve;
	}
	
	

}
