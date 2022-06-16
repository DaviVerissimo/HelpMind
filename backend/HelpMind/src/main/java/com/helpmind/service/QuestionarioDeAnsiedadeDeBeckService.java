package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Discente;
import com.helpmind.model.Questao;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.repository.QuestionarioDeAnsiedadeDeBeckRepository;

@Service
public class QuestionarioDeAnsiedadeDeBeckService {
	
	@Autowired
	private DiscenteService discenteService;
	
	@Autowired
	private QuestionarioDeAnsiedadeDeBeckRepository  questionarioDeAnsiedadeDeBeckRepository;
	
	public QuestionarioDeAnsiedadeDeBeck preencherQuestionarioComQuestao(List<Questao> questoes) {
		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
		//verifica que não existem questões nulas
		for (int i = 0; i < questoes.size(); i++) {
			if (questoes.get(i).getResporta().equals(null)) {
				return null;
			}
		}
		questionario.setListaDeQuestoes(questoes);
		return questionario;
		
	}
	
	public QuestionarioDeAnsiedadeDeBeck preencherQuestionarioComResporta(List<String> questoesResportas) {
		QuestionarioDeAnsiedadeDeBeck questionario = new QuestionarioDeAnsiedadeDeBeck();
		
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

	public QuestionarioDeAnsiedadeDeBeck salvar(QuestionarioDeAnsiedadeDeBeck questionario) {
		
		if(questionario == null) {
			return null;
		}
		else {
			return questionarioDeAnsiedadeDeBeckRepository.save(questionario);
		}
	}

	public List<QuestionarioDeAnsiedadeDeBeck> retornarListaQuestionarioDeAnsiedadeDeBeck() {
		List<QuestionarioDeAnsiedadeDeBeck> lista = questionarioDeAnsiedadeDeBeckRepository.findAll();
		
		return lista;
	}
	
	public List<QuestionarioDeAnsiedadeDeBeck> buscaQuestionariosPeloIdDoDiscente(String ID){
		List<QuestionarioDeAnsiedadeDeBeck> lista = retornarListaQuestionarioDeAnsiedadeDeBeck();
		List<QuestionarioDeAnsiedadeDeBeck> listaDoDiscente = new ArrayList<QuestionarioDeAnsiedadeDeBeck>();
		
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getIdDiscente().equals(ID)) {
				listaDoDiscente.add(lista.get(i));
			}
		}
		
		return listaDoDiscente;
	}

}
