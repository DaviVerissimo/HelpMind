package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Questao;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioSimples;
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
	
	public float calcularMediaDeAnsiedade(String ID){
		
		List<QuestionarioDeAnsiedadeDeBeck> listaDoDiscente = this.buscaQuestionariosPeloIdDoDiscente(ID);
		float media = QuestionarioSimples.retornaCalculoDaMediadeDosQuestionariosAnsiedade(listaDoDiscente);
		
		return media;
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
	
	public boolean verificaAumentoAnsiedade(String idDiscente) {
		boolean aumento = false;
		List<QuestionarioDeAnsiedadeDeBeck> lista =this.buscaQuestionariosPeloIdDoDiscente(idDiscente);
		for (int i = 0; i < lista.size() - 1; i++) {
			if (lista.get(i).getNota() < lista.get(i + 1).getNota()) {
				if (lista.get(i).getNota() > 25) {
					aumento = true;
				}
			}
		}
		
		return aumento;
	}
	
	public QuestionarioDeAnsiedadeDeBeck retornaQuestionarioPeloID(Integer ID_QUESTIONARIO) {
		List<QuestionarioDeAnsiedadeDeBeck> lista = questionarioDeAnsiedadeDeBeckRepository.findAll();
		QuestionarioDeAnsiedadeDeBeck questionario = null;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(ID_QUESTIONARIO)) {
				questionario = lista.get(i);
			}
		}
		
		return questionario;
	}

}
