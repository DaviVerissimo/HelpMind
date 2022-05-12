package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Questao;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.repository.QuestionarioDeAnsiedadeDeBeckRepository;

@Service
public class QuestionarioDeAnsiedadeDeBeckService {
	
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

}
