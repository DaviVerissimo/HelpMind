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

@Entity
@Table(name = "conversa")
public class Conversa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String idProfissionalSaude;
	private String idPsicologo;
	private String idDiscente;
	private String nomeProfSaude;
	private String nomePsicologo;
	private String nomeDiscente;

	@OneToMany(fetch = FetchType.EAGER, cascade = { CascadeType.ALL })
	private List<Mensagem> mensagens;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIdProfissionalSaude() {
		return idProfissionalSaude;
	}

	public void setIdProfissionalSaude(String idProfissionalSaude) {
		this.idProfissionalSaude = idProfissionalSaude;
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

	public List<Mensagem> getMensagens() {
		return mensagens;
	}

	public void setMensagens(List<Mensagem> mensagens) {
		this.mensagens = mensagens;
	}

	public String getNomeProfSaude() {
		return nomeProfSaude;
	}

	public void setNomeProfSaude(String nomeProfSaude) {
		this.nomeProfSaude = nomeProfSaude;
	}

	public String getNomePsicologo() {
		return nomePsicologo;
	}

	public void setNomePsicologo(String nomePsicologo) {
		this.nomePsicologo = nomePsicologo;
	}

	public String getNomeDiscente() {
		return nomeDiscente;
	}

	public void setNomeDiscente(String nomeDiscente) {
		this.nomeDiscente = nomeDiscente;
	}

}
