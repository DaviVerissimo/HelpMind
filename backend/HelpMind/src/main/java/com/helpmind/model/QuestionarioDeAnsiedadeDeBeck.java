package com.helpmind.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

/**
 * @author davi
 *
 */
@Entity
@Table(name = "questionarioDeAnsiedadeDeBeck")
public class QuestionarioDeAnsiedadeDeBeck implements Questionario {

	private String idDiscente;

	private LocalDateTime data;

	private int nota;

	private String status;

	private String semestre;

	public QuestionarioDeAnsiedadeDeBeck() {
		listaDeQuestoes = new ArrayList<Questao>();
	}

	public LocalDateTime getData() {
		return data;
	}

	public void setData(LocalDateTime data) {
		this.data = data;
	}

	public int getNota() {
		return nota;
	}

	public void setNota(int nota) {
		this.nota = nota;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	List<Questao> listaDeQuestoes;

	@Override
	public int calcularNota() {

		if (this.listaDeQuestoes.size() == 0) {

			return nota;
		} else {
			for (int i = 0; i < listaDeQuestoes.size(); i++) {
				nota = nota + Integer.parseInt(listaDeQuestoes.get(i).getResporta());
			}

			return nota;
		}
	}

	public void definirStatus() {

		status = StatusAnsiedade.getStatus(nota);	
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Questao> getListaDeQuestoes() {
		return listaDeQuestoes;
	}

	public void setListaDeQuestoes(List<Questao> listaDeQuestoes) {
		this.listaDeQuestoes = listaDeQuestoes;
	}

	public String getIdDiscente() {
		return idDiscente;
	}

	public void setIdDiscente(String idDiscente) {
		this.idDiscente = idDiscente;
	}

	public String getSemestre() {
		return semestre;
	}

	public void setSemestre(String semestre) {
		this.semestre = semestre;
	}

}
