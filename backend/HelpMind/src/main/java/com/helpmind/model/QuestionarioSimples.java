package com.helpmind.model;

import java.util.ArrayList;
import java.util.List;

public class QuestionarioSimples {

	private String id;
	private List<String> lista;
	private boolean dieta = false;
	private String semestre;

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

	public static List<String> converteListaDeQuestaoEmStrings(List<Questao> lista) {

		List<String> listaQuestoEmEmStrings = new ArrayList<String>();
		for (int i = 0; i < lista.size(); i++) {
			String resporta = lista.get(i).getResporta();
			listaQuestoEmEmStrings.add(resporta);
		}
		return listaQuestoEmEmStrings;
	}

	public static float retornaCalculoDaMediadeDosQuestionariosAnsiedade(List<QuestionarioDeAnsiedadeDeBeck> lista) {
		float media = 0;

		for (int i = 0; i < lista.size(); i++) {
			media = media + lista.get(i).getNota();
		}

		media = media / lista.size();

		return media;
	}

	public static float retornaCalculoDaMediadeDosQuestionariosDepressao(List<QuestionarioDeDepressaoDeBeck> lista) {
		float media = 0;

		for (int i = 0; i < lista.size(); i++) {
			media = media + lista.get(i).getNota();
		}

		media = media / lista.size();

		return media;
	}

	public String getSemestre() {
		return semestre;
	}

	public void setSemestre(String semestre) {
		this.semestre = semestre;
	}

}
