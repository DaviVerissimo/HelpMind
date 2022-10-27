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
		periodo = periodo.substring(1, periodo.length() - 1);
		List<Integer> IDs = retornaIdPorPeriodo(periodo);
		List<Discente> lista = retornaDiscentesPorIDs(IDs);
		
		return this.gerarEstatistica(lista);
		
	}
	
	public Estatistica retornaEstatisticaByCursoAndPeriodo(String curso ,String periodo) {
		List<Integer> IDs = retornaIdPorPeriodoAndCurso(periodo, curso);
		List<Discente> lista = retornaDiscentesPorIDs(IDs);
		
		return this.gerarEstatistica(lista);
		
	}
	
	public int retornaQuantidadeDiscente(List<Discente> lista) {
		return lista.size();
		
	}
	
	public int retornaQuantidadeDepressaoGrave(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if(lista.get(i).getStatusDoDiscenteDepresao() != null ) {
				if (lista.get(i).getStatusDoDiscenteDepresao().equals("04 Depressão grave")) {
					contador++;
				}
			}

		}
		return contador;
		
	}
	
	public int retornaQuantidadeDepressaoModerada(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if(lista.get(i).getStatusDoDiscenteDepresao() != null ) {
				if (lista.get(i).getStatusDoDiscenteDepresao().equals("03 Depressão moderada")) {
					contador++;
				}
			}

		}
		return contador;
		
	}
	
	public int retornaQuantiddeAnsiedadeGrave(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if(lista.get(i).getStatusDoDiscenteAnsiedade() != null ) {
				if (lista.get(i).getStatusDoDiscenteAnsiedade().equals("04 Ansiedade grave")) {
					contador++;
				}
			}

		}
		return contador;
		
	}
	
	public int retornaQuantidadeAnsiedadeModerada(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if(lista.get(i).getStatusDoDiscenteAnsiedade() != null ) {
				if (lista.get(i).getStatusDoDiscenteAnsiedade().equals("03 Ansiedade moderada")) {
					contador++;
				}
			}

		}
		return contador;
		
	}
	
	public String retornaStatusMedioDepressao(List<Discente> lista) {
		float nota = 0;
		for (int i = 0; i < lista.size(); i++) {
			nota += lista.get(i).getMediaDoDiscenteQuestionariosDeDepresao();
		}
		if (nota > 0) {
			nota = nota / (lista.size());
		}
		
		String status = "01 Depressão mínima (Alguém faltou preencher)";
		if (discenteService.calcularDepressaoMedia(nota) != null) {
			status = discenteService.calcularDepressaoMedia(nota);
		}
		
		return status;
		
	}

	public String retornaStatusMedioAnsiedade(List<Discente> lista) {
		float nota = 0;
		for (int i = 0; i < lista.size(); i++) {
			nota += lista.get(i).getMediaDoDiscenteQuestionariosDeAnsiedade();
		}
		if (nota > 0) {
			nota = nota / (lista.size());
		}
		String status = "01 Ansiedade mínima (Alguém faltou preencher)";
		if (discenteService.calcularAnsiedadeMedia(nota) != null) {
			status = discenteService.calcularAnsiedadeMedia(nota);
		}
		
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
	
	public List<Integer> retornaIdPorPeriodo(String periodo){
		List<String> lista_id_discente = new ArrayList<String>();
		List<QuestionarioSocioeconomico> listaQuestionarioSocioeconomico = questionarioSocioeconomicoService
				.retornarListaAllQuestionarioSocioeconomico();
		List<Integer>listaID = new ArrayList<Integer>();
		for (int i = 0; i < listaQuestionarioSocioeconomico.size(); i++) {
			if (listaQuestionarioSocioeconomico.get(i).getPeriodo().equals(periodo)) {
				lista_id_discente.add(listaQuestionarioSocioeconomico.get(i).getIdDiscente());
			}
		}
		
		for (int i = 0; i < lista_id_discente.size(); i++) {
			Integer ID = Integer.parseInt(lista_id_discente.get(i));
			listaID.add(ID);
		}
		
		return listaID;

	}
	
	public List<Integer> retornaIdPorPeriodoAndCurso(String periodo, String curso){
		List<String> lista_id_discente = new ArrayList<String>();
		List<QuestionarioSocioeconomico> listaQuestionarioSocioeconomico = questionarioSocioeconomicoService
				.retornarListaAllQuestionarioSocioeconomico();
		List<Integer>listaID = new ArrayList<Integer>();
		for (int i = 0; i < listaQuestionarioSocioeconomico.size(); i++) {
			if (listaQuestionarioSocioeconomico.get(i).getPeriodo().equals(periodo) 
					&& listaQuestionarioSocioeconomico.get(i).getCurso().equals(curso)) {
							lista_id_discente.add(listaQuestionarioSocioeconomico.get(i).getIdDiscente());
			}
		}
		
		for (int i = 0; i < lista_id_discente.size(); i++) {
			Integer ID = Integer.parseInt(lista_id_discente.get(i));
			listaID.add(ID);
		}
		
		return listaID;

	}
	
	public List<Discente> retornaDiscentesPorIDs(List<Integer> IDs){
		List<Discente> lista = new ArrayList<Discente>();
		for (int i = 0; i < IDs.size(); i++) {
			Discente discente = discenteService.buscaDiscentePorID(IDs.get(i));
			lista.add(discente);
		}
		return lista;
		
	}

}
