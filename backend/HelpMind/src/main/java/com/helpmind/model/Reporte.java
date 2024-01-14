package com.helpmind.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Modelo de Reporte.
 * 
 * @author davi
 *
 */
@Entity
@Table(name = "reporte")
public class Reporte {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String discente;
	
	private String campus;
	
	private String curso;
	
	private String periodo;
	
	private boolean tentativaDeSuicidio;
	
	@Column(name = "descrisao", length = 10000)
	private String descrisao;
	
	private LocalDateTime data;
	
	private String idReportante;

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

	public boolean isTentativaDeSuicidio() {
		return tentativaDeSuicidio;
	}

	public void setTentativaDeSuicidio(boolean tentativaDeSuicidio) {
		this.tentativaDeSuicidio = tentativaDeSuicidio;
	}

	public String getDescrisao() {
		return descrisao;
	}

	public void setDescrisao(String descrisao) {
		this.descrisao = descrisao;
	}

	public String getIdReportante() {
		return idReportante;
	}

	public void setIdReportante(String idReportante) {
		this.idReportante = idReportante;
	}

}
