package com.helpmind.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

public class Semestre {

	private String periodo;
	private List<Float> notasDoPeriodo;

	public Semestre(String periodo, List<Float> notasDoPeriodo) {
		this.periodo = periodo;
		this.notasDoPeriodo = notasDoPeriodo;
	}

	public float retornarMediaDoPeriodo() {
		float media = 0;

		for (int i = 0; i < notasDoPeriodo.size(); i++) {
			if (notasDoPeriodo.get(i) != null) {
				media = +notasDoPeriodo.get(i);
			}
		}
		if (notasDoPeriodo.size() > 0) {
			media = media / notasDoPeriodo.size();
		}

		return media;
	}

	public String getPeriodo() {
		return periodo;
	}

	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}

	public List<Float> getNotasDoPeriodo() {
		return notasDoPeriodo;
	}

	public void setNotasDoPeriodo(List<Float> notasDoPeriodo) {
		this.notasDoPeriodo = notasDoPeriodo;
	}

}
