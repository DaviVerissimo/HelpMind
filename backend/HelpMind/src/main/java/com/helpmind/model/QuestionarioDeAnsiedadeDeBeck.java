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
@Table(name = "questionarioDeAnsiedadeDeBeck")
public class QuestionarioDeAnsiedadeDeBeck implements Questionario{
	
	private LocalDateTime data;
	
	private int nota;
	
	private String status;
	
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
	
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	List<Questao> listaDeQuestoes;
	
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
		
		if (nota >= 0 && nota <= 7) {
			status = "01 Ansiedade mínima";
		}
		if(nota >= 8 && nota <= 15) {
			status = "02 Ansiedade leve";
		}
		if(nota >= 16 && nota <= 25) {
			status = "03 Ansiedade moderada";
		}
		if(nota >= 26 && nota <= 63) {
			status = "04 Ansiedade grave";
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
	


}
