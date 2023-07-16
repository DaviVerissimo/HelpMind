package com.helpmind.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "parescerPsicologico")
public class ParescerPsicologico {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String discente;
	private String email;
	private String parescerPsicologico;
	private LocalDateTime data;
	private String idEncaminhamento;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDiscente() {
		return discente;
	}
	public void setDiscente(String discente) {
		this.discente = discente;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getIdEncaminhamento() {
		return idEncaminhamento;
	}
	public void setIdEncaminhamento(String idEncaminhamento) {
		this.idEncaminhamento = idEncaminhamento;
	}
	public String getParescerPsicologico() {
		return parescerPsicologico;
	}
	public void setParescerPsicologico(String parescerPsicologico) {
		this.parescerPsicologico = parescerPsicologico;
	}
	public LocalDateTime getData() {
		return data;
	}
	public void setData(LocalDateTime data) {
		this.data = data;
	}
	
}
