package com.helpmind.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
