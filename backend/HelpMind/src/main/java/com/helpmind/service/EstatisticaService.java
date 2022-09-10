package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Discente;
import com.helpmind.model.Estatistica;
import com.helpmind.model.QuestionarioSocioeconomico;

@Service
public class EstatisticaService {
	
	@Autowired
	private DiscenteService discenteService;
	@Autowired
	private QuestionarioSocioeconomicoService questionarioSocioeconomicoService;
	
	public Estatistica retornaEstatisticaAllDiscente() {
		List<Discente> lista = discenteService.retornaAllDiscentes();
		
		return this.gerarEstatistica(lista);
		
	}
	
	public Estatistica retornaEstatisticaByCurso(String curso) {
		List<Discente> lista = discenteService.retornaDiscenteByCurso(curso);
		
		return this.gerarEstatistica(lista);
		
	}
	
	public Estatistica retornaEstatisticaByPeriodo(String periodo) {
		
		List<String> listaEmail = retornarEmailByPeriodo(periodo);
		List<Discente> lista = retornaDiscentesByListaEmail(listaEmail);
		
		return this.gerarEstatistica(lista);
		
	}
	
	public Estatistica retornaEstatisticaByCursoAndPeriodo(String curso ,String periodo) {
		String cursoAux = "\"" + curso + "\"";
		String periodoAux = "\"" + periodo + "\"";
		List<String> listaEmail = retornarEmailByPeriodo(periodoAux);
		List<Discente> lista = retornaDiscentesByListaEmail(listaEmail);
		List<Discente> listaByCurso = discenteService.retornaDiscenteByCursoForListaDeDiscentes(lista, cursoAux);
		
		return this.gerarEstatistica(listaByCurso);
		
	}
	
	public int retornaQuantidadeDiscente(List<Discente> lista) {
		return lista.size();
		
	}
	
	public int retornaQuantidadeDepressaoGrave(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteDepresao().equals("04 Depressão grave")) {
				contador++;
			}
		}
		return contador;
		
	}
	
	public int retornaQuantidadeDepressaoModerada(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteDepresao().equals("03 Depressão moderada")) {
				contador++;
			}
		}
		return contador;
		
	}
	
	public int retornaQuantiddeAnsiedadeGrave(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteAnsiedade().equals("04 Ansiedade grave")) {
				contador++;
			}
		}
		return contador;
		
	}
	
	public int retornaQuantidadeAnsiedadeModerada(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteAnsiedade().equals("03 Ansiedade moderada")) {
				contador++;
			}
		}
		return contador;
		
	}
	
	public String retornaStatusMedioDepressao(List<Discente> lista) {
		float nota = 0;
		for (int i = 0; i < lista.size(); i++) {
			nota += lista.get(i).getMediaDoDiscenteQuestionariosDeDepresao();
		}
		nota = nota / (lista.size());
		String status = discenteService.calcularDepressaoMedia(nota);
		
		return status;
		
	}

	public String retornaStatusMedioAnsiedade(List<Discente> lista) {
		float nota = 0;
		for (int i = 0; i < lista.size(); i++) {
			nota += lista.get(i).getMediaDoDiscenteQuestionariosDeAnsiedade();
		}
		nota = nota / (lista.size());
		String status = discenteService.calcularAnsiedadeMedia(nota);
		
		return status;
		
	}
	
	public Estatistica gerarEstatistica(List<Discente> lista) {
		Estatistica estatistica = new Estatistica();
		lista = discenteService.definirMediasDeAnsiedade_depressao_e_status(lista);
		estatistica.setQuantidadeDiscente(this.retornaQuantidadeDiscente(lista));
		estatistica.setQuantidadeDepressaoGrave(this.retornaQuantidadeDepressaoGrave(lista));
		estatistica.setQuantidadeDepressaoModerada(this.retornaQuantidadeDepressaoModerada(lista));
		estatistica.setQuantiddeAnsiedadeGrave(this.retornaQuantiddeAnsiedadeGrave(lista));
		estatistica.setQuantidadeAnsiedadeModerada(this.retornaQuantidadeAnsiedadeModerada(lista));
		estatistica.setStatusMedioDepressao(this.retornaStatusMedioDepressao(lista));
		estatistica.setStatusMedioAnsiedade(this.retornaStatusMedioAnsiedade(lista));
		
		return estatistica;
		
	}
	
	public List<String> retornarEmailByPeriodo(String periodo){
		List<String> listaDeEmail = new ArrayList<String>();
		List<QuestionarioSocioeconomico> listaDeQuestionarios = questionarioSocioeconomicoService.retornarListaAllQuestionarioSocioeconomico();
		
		for (int i = 0; i < listaDeQuestionarios.size(); i++) {
			String aux = "\"" + listaDeQuestionarios.get(i).getPeriodo() + "\"";
			if (aux.equals(periodo)) {
				String email = listaDeQuestionarios.get(i).getEmail();
				listaDeEmail.add(email);
			}
		}
		
		return listaDeEmail;
	}
	
	public List<Discente> retornaDiscentesByListaEmail(List<String> listaDeEmail){
		List<Discente> listaDeDiscentes = new ArrayList<Discente>();
		List<Discente> allDiscente = discenteService.retornaAllDiscentes();
		for (int i = 0; i < allDiscente.size(); i++) {
			for (int j = 0;j < listaDeEmail.size();j++) {
				if (listaDeEmail.get(i).equals(allDiscente.get(j).getEmail())) {
					listaDeDiscentes.add(allDiscente.get(j));
				}
			}
		}
		
		return listaDeDiscentes;
	}

}
