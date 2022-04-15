package com.helpmind.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author davi
 *
 */
@Entity
@Table(name = "questionarioSocioeconomico")
public class QuestionarioSocioeconomico implements Questionario{
	
	/*O sufixo _op significa que a variavel armazena valor advindo de
	 *  um campo alternativo (secundario no bloco da pergunta) no frontend*/
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String email;
	private String nome;
	private String campus;
	private String curso;
	private String periodo;
	private int idade;
	private String cidade;
	private String zonaHurbanaRural_op;
	private String estadoCivil;
	private String comQuemVive;
	private float rendaFamiliar;
	private String cor;
	private String genero;
	private String ingressantePorVagaDeCota;
	private String cotista_op;
	private String pessoaDeficiente;
	private String deficiencia_op;
	private String usoBebidaAlcoolica;
	private String bullying;
	private String resideComPortadorDeProblemaMental;
	private String problemaDeSaudeMentalDiscemte;
	private boolean diaguinostico_op;
	private String problemaPsifico_op;
	private String usoPsicotropicos;
	private String interesseAjudaPsicologica;
	private String beneficiarioBolsa;
	private String beneficio_op;
	private String tipoDomicilio;
	private int quantidadeComodos_op;
	private String doencaGrave;
	private String doenca_op;
	private String familiarComDoencaGrave;
	private String familiarDoente;
	private String doencaFamiliar_op;
	private String matricula;

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public String getCampus() {
		return campus;
	}

	public void setCampus(String campus) {
		this.campus = campus;
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

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
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

	public float getRendaFamiliar() {
		return rendaFamiliar;
	}

	public void setRendaFamiliar(float rendaFamiliar) {
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

	public String getDeficiencia_op() {
		return deficiencia_op;
	}

	public void setDeficiencia_op(String deficiencia_op) {
		this.deficiencia_op = deficiencia_op;
	}

	public String getUsoBebidaAlcoolica() {
		return usoBebidaAlcoolica;
	}

	public void setUsoBebidaAlcoolica(String usoBebidaAlcoolica) {
		this.usoBebidaAlcoolica = usoBebidaAlcoolica;
	}

	public String getBullying() {
		return bullying;
	}

	public void setBullying(String bullying) {
		this.bullying = bullying;
	}

	public String getResideComPortadorDeProblemaMental() {
		return resideComPortadorDeProblemaMental;
	}

	public void setResideComPortadorDeProblemaMental(String resideComPortadorDeProblemaMental) {
		this.resideComPortadorDeProblemaMental = resideComPortadorDeProblemaMental;
	}

	public String getProblemaDeSaudeMentalDiscemte() {
		return problemaDeSaudeMentalDiscemte;
	}

	public void setProblemaDeSaudeMentalDiscemte(String problemaDeSaudeMentalDiscemte) {
		this.problemaDeSaudeMentalDiscemte = problemaDeSaudeMentalDiscemte;
	}

	public boolean isDiaguinostico_op() {
		return diaguinostico_op;
	}

	public void setDiaguinostico_op(boolean diaguinostico_op) {
		this.diaguinostico_op = diaguinostico_op;
	}

	public String getProblemaPsifico_op() {
		return problemaPsifico_op;
	}

	public void setProblemaPsifico_op(String problemaPsifico_op) {
		this.problemaPsifico_op = problemaPsifico_op;
	}

	public String getUsoPsicotropicos() {
		return usoPsicotropicos;
	}

	public void setUsoPsicotropicos(String usoPsicotropicos) {
		this.usoPsicotropicos = usoPsicotropicos;
	}

	public String getInteresseAjudaPsicologica() {
		return interesseAjudaPsicologica;
	}

	public void setInteresseAjudaPsicologica(String interesseAjudaPsicologica) {
		this.interesseAjudaPsicologica = interesseAjudaPsicologica;
	}

	public String getBeneficiarioBolsa() {
		return beneficiarioBolsa;
	}

	public void setBeneficiarioBolsa(String beneficiarioBolsa) {
		this.beneficiarioBolsa = beneficiarioBolsa;
	}

	public String getBeneficio_op() {
		return beneficio_op;
	}

	public void setBeneficio_op(String beneficio_op) {
		this.beneficio_op = beneficio_op;
	}

	public String getTipoDomicilio() {
		return tipoDomicilio;
	}

	public void setTipoDomicilio(String tipoDomicilio) {
		this.tipoDomicilio = tipoDomicilio;
	}

	public int getQuantidadeComodos_op() {
		return quantidadeComodos_op;
	}

	public void setQuantidadeComodos_op(int quantidadeComodos_op) {
		this.quantidadeComodos_op = quantidadeComodos_op;
	}

	public String getDoencaGrave() {
		return doencaGrave;
	}

	public void setDoencaGrave(String doencaGrave) {
		this.doencaGrave = doencaGrave;
	}

	public String getDoenca_op() {
		return doenca_op;
	}

	public void setDoenca_op(String doenca_op) {
		this.doenca_op = doenca_op;
	}

	public String getFamiliarComDoencaGrave() {
		return familiarComDoencaGrave;
	}

	public void setFamiliarComDoencaGrave(String familiarComDoencaGrave) {
		this.familiarComDoencaGrave = familiarComDoencaGrave;
	}

	public String getFamiliarDoente() {
		return familiarDoente;
	}

	public void setFamiliarDoente(String familiarDoente) {
		this.familiarDoente = familiarDoente;
	}

	public String getDoencaFamiliar_op() {
		return doencaFamiliar_op;
	}

	public void setDoencaFamiliar_op(String doencaFamiliar_op) {
		this.doencaFamiliar_op = doencaFamiliar_op;
	}
	
	
}
