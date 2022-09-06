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
	private int quantiddeAnsiedadeGrave;
	private int quantidadeAnsiedadeModerada;
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
		return quantiddeAnsiedadeGrave;
	}
	public void setQuantiddeAnsiedadeGrave(int quantiddeAnsiedadeGrave) {
		this.quantiddeAnsiedadeGrave = quantiddeAnsiedadeGrave;
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
	
	

}
