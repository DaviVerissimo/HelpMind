package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Questao;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioDeDepressaoDeBeck;
import com.helpmind.repository.QuestionarioDeDepressaoDeBeckRepository;

@Service
public class QuestionarioDeDepressaoDeBeckService {
	
	@Autowired
	private QuestionarioDeDepressaoDeBeckRepository questionarioDeDepressaoDeBeckRepository;
	
	public QuestionarioDeDepressaoDeBeck retornaQuestionarios() {
		QuestionarioDeDepressaoDeBeck questionario = new QuestionarioDeDepressaoDeBeck();

		return questionario;
	}

	//atualizar este metodo
	public QuestionarioDeDepressaoDeBeck preencherQuestionarioComQuestao(List<Questao> questoes) {
		QuestionarioDeDepressaoDeBeck questionario = new QuestionarioDeDepressaoDeBeck();
		//verifica que não existem questões nulas
		for (int i = 0; i < questoes.size(); i++) {
			if (questoes.get(i).getResporta().equals(null)) {
				return null;
			}
		}
		questionario.setListaDeQuestoes(questoes);
		return questionario;
		
	}
	
	public QuestionarioDeDepressaoDeBeck preencherQuestionarioComResporta(List<String> questoesResportas) {
		QuestionarioDeDepressaoDeBeck questionario = new QuestionarioDeDepressaoDeBeck();
		List<Questao> lista = new  ArrayList<Questao>();
		//verifica que não existem questões nulas
		for (int i = 0; i < questoesResportas.size(); i++) {
			if (questoesResportas.get(i).equals(null)) {
				return null;
			}
			else {
				Questao questao = new Questao();
				questao.setResporta(questoesResportas.get(i));
				lista.add(questao);
			}
		}
		questionario.setListaDeQuestoes(lista);
		return questionario;
		
	}

	public QuestionarioDeDepressaoDeBeck salvar(QuestionarioDeDepressaoDeBeck questionario) {
		
		if(questionario == null) {
			return null;
		}
		else {
			return questionarioDeDepressaoDeBeckRepository.save(questionario);
		}
	}
	
	public List<QuestionarioDeDepressaoDeBeck> retornarListaQuestionarioDeDepressaoDeBeck() {
		List<QuestionarioDeDepressaoDeBeck> lista = questionarioDeDepressaoDeBeckRepository.findAll();
		
		return lista;
	}
	
	public List<QuestionarioDeDepressaoDeBeck> buscaQuestionariosPeloIdDoDiscente(String ID){
		List<QuestionarioDeDepressaoDeBeck> lista = retornarListaQuestionarioDeDepressaoDeBeck();
		List<QuestionarioDeDepressaoDeBeck> listaDoDiscente = new ArrayList<QuestionarioDeDepressaoDeBeck>();
		
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getIdDiscente().equals(ID)) {
				listaDoDiscente.add(lista.get(i));
			}
		}
		
		return listaDoDiscente;
	}
	
	public QuestionarioDeDepressaoDeBeck retornaQuestionarioPeloID(Integer ID_QUESTIONARIO) {
		List<QuestionarioDeDepressaoDeBeck> lista = questionarioDeDepressaoDeBeckRepository.findAll();
		QuestionarioDeDepressaoDeBeck questionario = null;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(ID_QUESTIONARIO)) {
				questionario = lista.get(i);
			}
		}
		
		return questionario;
	}

}
