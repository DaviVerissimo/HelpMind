package com.helpmind.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
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
@Table(name = "discente")
public class Discente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String email;
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	private List<QuestionarioDeAnsiedadeDeBeck> listaQuestionarioDeAnsiedadeDeBeck;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	private List<QuestionarioDeDepressaoDeBeck> listaQuestionarioDeDepresaoDeBeck;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
	//@OneToMany(targetEntity=QuestionarioSocioeconomico.class, mappedBy="id", fetch=FetchType.EAGER)
	//@ElementCollection(fetch = FetchType.EAGER)
	//@CollectionTable(name = "questionarioSocioeconomico")
	//@Column(name = "VALUE")
	private List<QuestionarioSocioeconomico> listaQuestionarioSocioeconomico;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<QuestionarioDeAnsiedadeDeBeck> getListaQuestionarioDeAnsiedadeDeBeck() {
		return listaQuestionarioDeAnsiedadeDeBeck;
	}
	public void setListaQuestionarioDeAnsiedadeDeBeck(
			List<QuestionarioDeAnsiedadeDeBeck> listaQuestionarioDeAnsiedadeDeBeck) {
		this.listaQuestionarioDeAnsiedadeDeBeck = listaQuestionarioDeAnsiedadeDeBeck;
	}
	public List<QuestionarioDeDepressaoDeBeck> getListaQuestionarioDeDepresaoDeBeck() {
		return listaQuestionarioDeDepresaoDeBeck;
	}
	public void setListaQuestionarioDeDepresaoDeBeck(List<QuestionarioDeDepressaoDeBeck> listaQuestionarioDeDepresaoDeBeck) {
		this.listaQuestionarioDeDepresaoDeBeck = listaQuestionarioDeDepresaoDeBeck;
	}
	public List<QuestionarioSocioeconomico> getListaQuestionarioSocioeconomico() {
		return listaQuestionarioSocioeconomico;
	}
	public void setListaQuestionarioSocioeconomico(List<QuestionarioSocioeconomico> listaQuestionarioSocioeconomico) {
		this.listaQuestionarioSocioeconomico = listaQuestionarioSocioeconomico;
	}
	
}
