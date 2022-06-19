package com.helpmind.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author davi
 *
 */
@Entity
@Table(name = "questionarioDeDepresaoDeBeck")
public class QuestionarioDeDepressaoDeBeck implements Questionario{
	
	private String idDiscente;
	
	private LocalDateTime data;
	
	private int nota;
	
	private String status;
	
	private boolean dieta = false;
	
	public QuestionarioDeDepressaoDeBeck() {
		listaDeQuestoes = new ArrayList<Questao>();
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	List<Questao> listaDeQuestoes;
	
	@Override
	public int calcularNota() {
		
		if (this.listaDeQuestoes.size() == 0) {
			
			return nota;
		}
		else {
			for (int i = 0; i < listaDeQuestoes.size(); i++) {
				nota = nota + Integer.parseInt(listaDeQuestoes.get(i).getResporta());
			}
			
			return nota;
		}
	}
	
	public void definirStatus() {
		
		if (nota >= 0 && nota <= 9) {
			status = "01 Depressão mínima";
		}
		if(nota >= 10 && nota <= 18) {
			status = "02 Depressão leve";
		}
		if(nota >= 19 && nota <= 29) {
			status = "03 Depressão moderada";
		}
		if(nota >= 30 && nota <= 63) {
			status = "04 Depressão grave";
		}
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

	public String getIdDiscente() {
		return idDiscente;
	}

	public void setIdDiscente(String idDiscente) {
		this.idDiscente = idDiscente;
	}

	public boolean isDieta() {
		return dieta;
	}

	public void setDieta(boolean dieta) {
		this.dieta = dieta;
	}
	
	
	
}
