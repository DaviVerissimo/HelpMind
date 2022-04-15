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
	
	//private String enunciado01 = "chocolate doce";
	
	public QuestionarioDeDepressaoDeBeck() {
		listaDeQuestoes = new ArrayList<Questao>();
		Questao questao01 = new Questao();
		Questao questao02 = new Questao();
		//questao01.setEnuciado(enunciado01);
		questao01.setAlternativa1("0 Não me sinto triste");
		questao01.setAlternativa2("1 Eu me sinto triste");
		questao01.setAlternativa3("2 Estou sempre triste e não consigo sair disto");
		questao01.setAlternativa4("3 Estou tão triste ou infeliz que não consigo suportar");
		
		questao02.setAlternativa1("0 Não estou especialmente desanimado quanto ao futuro");
		questao02.setAlternativa2("1 Eu me sinto desanimado quanto ao futuro");
		questao02.setAlternativa3("2 Acho que nada tenho a esperar");
		questao02.setAlternativa4("3 Acho o futuro sem esperanças e tenho a impressão de que as coisas não podem melhorar");
		
		listaDeQuestoes.add(questao01);
		listaDeQuestoes.add(questao02);
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
