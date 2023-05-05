package com.helpmind.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "encaminhamento")
public class Encaminhamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String psicologo;
	private String profSaude;
	private String discente;
	private String idProfissionalDeSaude;
	private String idPsicologo;
	private String idDiscente;
	@Column(name = "descrisao", length = 10000)
	private String descrisao;
	private LocalDateTime data;
	private String status;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getPsicologo() {
		return psicologo;
	}
	public void setPsicologo(String psicologo) {
		this.psicologo = psicologo;
	}
	public String getProfSaude() {
		return profSaude;
	}
	public void setProfSaude(String profSaude) {
		this.profSaude = profSaude;
	}
	public String getDiscente() {
		return discente;
	}
	public void setDiscente(String discente) {
		this.discente = discente;
	}
	public String getIdProfissionalDeSaude() {
		return idProfissionalDeSaude;
	}
	public void setIdProfissionalDeSaude(String idProfissionalDeSaude) {
		this.idProfissionalDeSaude = idProfissionalDeSaude;
	}
	public String getDescrisao() {
		return descrisao;
	}
	public void setDescrisao(String descrisao) {
		this.descrisao = descrisao;
	}
	public LocalDateTime getData() {
		return data;
	}
	public void setData(LocalDateTime data) {
		this.data = data;
	}
	public String getIdPsicologo() {
		return idPsicologo;
	}
	public void setIdPsicologo(String idPsicologo) {
		this.idPsicologo = idPsicologo;
	}
	public String getIdDiscente() {
		return idDiscente;
	}
	public void setIdDiscente(String idDiscente) {
		this.idDiscente = idDiscente;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
