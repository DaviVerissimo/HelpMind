package com.helpmind.model;

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
	
	public QuestionarioDeDepressaoDeBeck() {
		listaDeQuestoes = new ArrayList<Questao>();
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	List<Questao> listaDeQuestoes;

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
