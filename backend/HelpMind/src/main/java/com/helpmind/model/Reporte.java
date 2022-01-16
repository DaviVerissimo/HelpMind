package com.helpmind.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	
	private int periodo;
	
	private boolean tentativaDeSuicidio;
	
	private String descrisao;

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

	public int getPeriodo() {
		return periodo;
	}

	public void setPeriodo(int periodo) {
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
	

}
