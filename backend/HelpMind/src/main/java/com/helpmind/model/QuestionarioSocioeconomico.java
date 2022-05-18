package com.helpmind.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author davi
 *
 */
@Entity
@Table(name = "questionarioSocioeconomico")
@JsonIgnoreProperties(ignoreUnknown = true)
public class QuestionarioSocioeconomico implements Questionario{
	
	/*O sufixo _op significa que a variavel armazena valor advindo de
	 *  um campo alternativo (secundario no bloco da pergunta) no frontend*/
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String email;
	private String nome;
	private String campusDoDiscente;
	private String matricula;
	private String curso;
	private String periodo;
	private String idade;
	private String cidade;
	private String zonaHurbanaRural_op;
	private String estadoCivil;
	private String comQuemVive;
	private String rendaFamiliar;
	private String cor;
	private String genero;
	private String ingressantePorVagaDeCota;
	private String cotista_op;
	private String pessoaDeficiente;
	private String deficiencia_op_tipo;
	private String usoBebidaAlcoolica;
	private String bullyng;
	private String resideComPortadorDeProblemaMental;
	private String discenteSofrimentoMental;
	private String diaguinostico_op;
	private String problemaPsifico_op;
	private String psicotropico;
	private String interesseAjudaPsicologica;
	private String beneficio;
	private String beneficio_op;
	private String domicilio;
	private String quantidadeComodos_op;
	private String doencaGrave;
	private String doencaGraveDiscente_op;
	private String possuiFamiliarComDoencaGrave;
	private String familiarDoente;
	private String doencaDoFamiliar_op;
	private LocalDateTime data;
	
	public LocalDateTime getData() {
		return data;
	}
	public void setData(LocalDateTime data) {
		this.data = data;
	}
	public Integer getId() {
		return id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCampusDoDiscente() {
		return campusDoDiscente;
	}
	public void setCampusDoDiscente(String campusDoDiscente) {
		this.campusDoDiscente = campusDoDiscente;
	}
	public String getMatricula() {
		return matricula;
	}
	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public String getPeriodo() {
		return periodo;
	}
	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}
	public String getIdade() {
		return idade;
	}
	public void setIdade(String idade) {
		this.idade = idade;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getZonaHurbanaRural_op() {
		return zonaHurbanaRural_op;
	}
	public void setZonaHurbanaRural_op(String zonaHurbanaRural_op) {
		this.zonaHurbanaRural_op = zonaHurbanaRural_op;
	}
	public String getEstadoCivil() {
		return estadoCivil;
	}
	public void setEstadoCivil(String estadoCivil) {
		this.estadoCivil = estadoCivil;
	}
	public String getComQuemVive() {
		return comQuemVive;
	}
	public void setComQuemVive(String comQuemVive) {
		this.comQuemVive = comQuemVive;
	}
	public String getRendaFamiliar() {
		return rendaFamiliar;
	}
	public void setRendaFamiliar(String rendaFamiliar) {
		this.rendaFamiliar = rendaFamiliar;
	}
	public String getCor() {
		return cor;
	}
	public void setCor(String cor) {
		this.cor = cor;
	}
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	public String getIngressantePorVagaDeCota() {
		return ingressantePorVagaDeCota;
	}
	public void setIngressantePorVagaDeCota(String ingressantePorVagaDeCota) {
		this.ingressantePorVagaDeCota = ingressantePorVagaDeCota;
	}
	public String getCotista_op() {
		return cotista_op;
	}
	public void setCotista_op(String cotista_op) {
		this.cotista_op = cotista_op;
	}
	public String getPessoaDeficiente() {
		return pessoaDeficiente;
	}
	public void setPessoaDeficiente(String pessoaDeficiente) {
		this.pessoaDeficiente = pessoaDeficiente;
	}
	public String getDeficiencia_op_tipo() {
		return deficiencia_op_tipo;
	}
	public void setDeficiencia_op_tipo(String deficiencia_op_tipo) {
		this.deficiencia_op_tipo = deficiencia_op_tipo;
	}
	public String getUsoBebidaAlcoolica() {
		return usoBebidaAlcoolica;
	}
	public void setUsoBebidaAlcoolica(String usoBebidaAlcoolica) {
		this.usoBebidaAlcoolica = usoBebidaAlcoolica;
	}
	public String getBullyng() {
		return bullyng;
	}
	public void setBullyng(String bullyng) {
		this.bullyng = bullyng;
	}
	public String getResideComPortadorDeProblemaMental() {
		return resideComPortadorDeProblemaMental;
	}
	public void setResideComPortadorDeProblemaMental(String resideComPortadorDeProblemaMental) {
		this.resideComPortadorDeProblemaMental = resideComPortadorDeProblemaMental;
	}
	public String getDiscenteSofrimentoMental() {
		return discenteSofrimentoMental;
	}
	public void setDiscenteSofrimentoMental(String discenteSofrimentoMental) {
		this.discenteSofrimentoMental = discenteSofrimentoMental;
	}
	public String getDiaguinostico_op() {
		return diaguinostico_op;
	}
	public void setDiaguinostico_op(String diaguinostico_op) {
		this.diaguinostico_op = diaguinostico_op;
	}
	public String getProblemaPsifico_op() {
		return problemaPsifico_op;
	}
	public void setProblemaPsifico_op(String problemaPsifico_op) {
		this.problemaPsifico_op = problemaPsifico_op;
	}
	public String getPsicotropico() {
		return psicotropico;
	}
	public void setPsicotropico(String psicotropico) {
		this.psicotropico = psicotropico;
	}
	public String getInteresseAjudaPsicologica() {
		return interesseAjudaPsicologica;
	}
	public void setInteresseAjudaPsicologica(String interesseAjudaPsicologica) {
		this.interesseAjudaPsicologica = interesseAjudaPsicologica;
	}
	public String getBeneficio() {
		return beneficio;
	}
	public void setBeneficio(String beneficio) {
		this.beneficio = beneficio;
	}
	public String getBeneficio_op() {
		return beneficio_op;
	}
	public void setBeneficio_op(String beneficio_op) {
		this.beneficio_op = beneficio_op;
	}
	public String getDomicilio() {
		return domicilio;
	}
	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}
	public String getQuantidadeComodos_op() {
		return quantidadeComodos_op;
	}
	public void setQuantidadeComodos_op(String quantidadeComodos_op) {
		this.quantidadeComodos_op = quantidadeComodos_op;
	}
	public String getDoencaGrave() {
		return doencaGrave;
	}
	public void setDoencaGrave(String doencaGrave) {
		this.doencaGrave = doencaGrave;
	}
	public String getDoencaGraveDiscente_op() {
		return doencaGraveDiscente_op;
	}
	public void setDoencaGraveDiscente_op(String doencaGraveDiscente_op) {
		this.doencaGraveDiscente_op = doencaGraveDiscente_op;
	}
	public String getPossuiFamiliarComDoencaGrave() {
		return possuiFamiliarComDoencaGrave;
	}
	public void setPossuiFamiliarComDoencaGrave(String possuiFamiliarComDoencaGrave) {
		this.possuiFamiliarComDoencaGrave = possuiFamiliarComDoencaGrave;
	}
	public String getFamiliarDoente() {
		return familiarDoente;
	}
	public void setFamiliarDoente(String familiarDoente) {
		this.familiarDoente = familiarDoente;
	}
	public String getDoencaDoFamiliar_op() {
		return doencaDoFamiliar_op;
	}
	public void setDoencaDoFamiliar_op(String doencaDoFamiliar_op) {
		this.doencaDoFamiliar_op = doencaDoFamiliar_op;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	
}
