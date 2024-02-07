package com.helpmind.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rotinaQuestionarioSocioeconomico")
public class RotinaQuestionarioSocioeconomico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String idDiscente;

	private boolean primeiroAcesso = true;

	private LocalDateTime dataProximoQuestionario;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIdDiscente() {
		return idDiscente;
	}

	public void setIdDiscente(String idDiscente) {
		this.idDiscente = idDiscente;
	}

	public boolean isPrimeiroAcesso() {
		return primeiroAcesso;
	}

	public void setPrimeiroAcesso(boolean primeiroAcesso) {
		this.primeiroAcesso = primeiroAcesso;
	}

	public LocalDateTime getDataProximoQuestionario() {
		return dataProximoQuestionario;
	}

	public void setDataProximoQuestionario(LocalDateTime dataProximoQuestionario) {
		this.dataProximoQuestionario = dataProximoQuestionario;
	}



}
