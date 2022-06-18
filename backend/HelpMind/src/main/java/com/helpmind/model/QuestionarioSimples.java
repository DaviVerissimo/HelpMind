package com.helpmind.model;

import java.util.List;

public class QuestionarioSimples {
	
	private String id;
	private List<String> lista;
	private boolean dieta = false;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public List<String> getLista() {
		return lista;
	}
	public void setLista(List<String> lista) {
		this.lista = lista;
	}
	public boolean isDieta() {
		return dieta;
	}
	public void setDieta(boolean dieta) {
		this.dieta = dieta;
	}
	
	
	
	

}
