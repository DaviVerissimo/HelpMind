package com.helpmind.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "prontuario")
public class Prontuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String discente;
	private String campus;
	private String curso;
	private String periodo;
	private String parescerProfissionalSaude;
	private String acaoRealizada;
	private LocalDateTime data;
	
	public LocalDateTime getData() {
		return data;
	}
	public void setData(LocalDateTime data) {
		this.data = data;
	}
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
	public String getCampus() {
		return campus;
	}
	public void setCampus(String campus) {
		this.campus = campus;
	}
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public String getPeriodo() {
		return periodo;
	}
	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}
	public String getParescerProfissionalSaude() {
		return parescerProfissionalSaude;
	}
	public void setParescerProfissionalSaude(String parescerProfissionalSaude) {
		this.parescerProfissionalSaude = parescerProfissionalSaude;
	}
	public String getAcaoRealizada() {
		return acaoRealizada;
	}
	public void setAcaoRealizada(String acaoRealizada) {
		this.acaoRealizada = acaoRealizada;
	}
	
}
