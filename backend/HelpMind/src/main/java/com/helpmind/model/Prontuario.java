package com.helpmind.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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
	@Column(name = "Parescer", length = 10000)
	private String parescerProfissionalSaude;
	private String acaoRealizada;
	private LocalDateTime data;
	private String idDiscente;
	private String idProfissionalDeSaude;
	private String profissionalDeSaude;
	
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
	public String getIdDiscente() {
		return idDiscente;
	}
	public void setIdDiscente(String idDiscente) {
		this.idDiscente = idDiscente;
	}
	public String getIdProfissionalDeSaude() {
		return idProfissionalDeSaude;
	}
	public void setIdProfissionalDeSaude(String idProfissionalDeSaude) {
		this.idProfissionalDeSaude = idProfissionalDeSaude;
	}
	public String getProfissionalDeSaude() {
		return profissionalDeSaude;
	}
	public void setProfissionalDeSaude(String profissionalDeSaude) {
		this.profissionalDeSaude = profissionalDeSaude;
	}
	
}
