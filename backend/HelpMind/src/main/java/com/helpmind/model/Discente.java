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
	private String matricula;
	private String curso;
	private float mediaDoDiscenteQuestionariosDeAnsiedade;
	private String StatusDoDiscenteAnsiedade;
	private float mediaDoDiscenteQuestionariosDeDepresao;
	private String StatusDoDiscenteDepresao;
	private int ultimaNotaAnsiedade;
	private int ultimaNotaDepressao;
	private String googleId;
	private String imagemPerfilUri;
	private String periodo;
	private String campus;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	private List<QuestionarioDeAnsiedadeDeBeck> listaQuestionarioDeAnsiedadeDeBeck;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	private List<QuestionarioDeDepressaoDeBeck> listaQuestionarioDeDepresaoDeBeck;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
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
	public String getMatricula() {
		return matricula;
	}
	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	public float getMediaDoDiscenteQuestionariosDeAnsiedade() {
		return mediaDoDiscenteQuestionariosDeAnsiedade;
	}
	public void setMediaDoDiscenteQuestionariosDeAnsiedade(float mediaDoDiscenteQuestionariosDeAnsiedade) {
		this.mediaDoDiscenteQuestionariosDeAnsiedade = mediaDoDiscenteQuestionariosDeAnsiedade;
	}
	public String getStatusDoDiscenteAnsiedade() {
		return StatusDoDiscenteAnsiedade;
	}
	public void setStatusDoDiscenteAnsiedade(String statusDoDiscenteAnsiedade) {
		StatusDoDiscenteAnsiedade = statusDoDiscenteAnsiedade;
	}
	public float getMediaDoDiscenteQuestionariosDeDepresao() {
		return mediaDoDiscenteQuestionariosDeDepresao;
	}
	public void setMediaDoDiscenteQuestionariosDeDepresao(float mediaDoDiscenteQuestionariosDeDepresao) {
		this.mediaDoDiscenteQuestionariosDeDepresao = mediaDoDiscenteQuestionariosDeDepresao;
	}
	public String getStatusDoDiscenteDepresao() {
		return StatusDoDiscenteDepresao;
	}
	public void setStatusDoDiscenteDepresao(String statusDoDiscenteDepresao) {
		StatusDoDiscenteDepresao = statusDoDiscenteDepresao;
	}
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public String getGoogleId() {
		return googleId;
	}
	public void setGoogleId(String googleId) {
		this.googleId = googleId;
	}
	public String getImagemPerfilUri() {
		return imagemPerfilUri;
	}
	public void setImagemPerfilUri(String imagemPerfilUri) {
		this.imagemPerfilUri = imagemPerfilUri;
	}
	public String getPeriodo() {
		return periodo;
	}
	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}
	public String getCampus() {
		return campus;
	}
	public void setCampus(String campus) {
		this.campus = campus;
	}
	public int getUltimaNotaAnsiedade() {
		return ultimaNotaAnsiedade;
	}
	public void setUltimaNotaAnsiedade(int ultimaNotaAnsiedade) {
		this.ultimaNotaAnsiedade = ultimaNotaAnsiedade;
	}
	public int getUltimaNotaDepressao() {
		return ultimaNotaDepressao;
	}
	public void setUltimaNotaDepressao(int ultimaNotaDepressao) {
		this.ultimaNotaDepressao = ultimaNotaDepressao;
	}
	
}
