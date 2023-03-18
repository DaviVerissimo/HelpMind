package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Discente;
import com.helpmind.model.Estatistica;
import com.helpmind.model.EstatisticaDepressao;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioDeDepressaoDeBeck;
import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.model.StatusAnsiedade;
import com.helpmind.model.StatusDepressao;

@Service
public class EstatisticaService {

	@Autowired
	private DiscenteService discenteService;
	@Autowired
	private QuestionarioSocioeconomicoService questionarioSocioeconomicoService;

	@Autowired
	private QuestionarioDeAnsiedadeDeBeckService questionarioDeAnsiedadeDeBeckService;

	@Autowired
	private QuestionarioDeDepressaoDeBeckService questionarioDeDepressaoDeBeckService;

	private int quantidadeDepressaoMinima;

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

	public Estatistica retornaEstatisticaByCursoAndPeriodo(String curso, String periodo) {
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
			if (lista.get(i).getStatusDoDiscenteDepresao() != null
					&& !lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.SEM_STATUS)) {
				if (lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.GRAVE)) {
					contador++;
				}
			}
		}
		return contador;

	}

	public int retornaQuantidadeDepressaoModerada(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteDepresao() != null
					&& !lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.SEM_STATUS)) {
				if (lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.MODERADA)) {
					contador++;
				}
			}
		}
		return contador;

	}

	public int retornaQuantidadeDepressaoMimima(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteDepresao() != null
					&& !lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.SEM_STATUS)) {
				if (lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.MINIMA)) {
					contador++;
				}
			}
		}
		return contador;

	}

	public int retornaQuantidadeDepressaoLeve(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteDepresao() != null
					&& !lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.SEM_STATUS)) {
				if (lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.LEVE)) {
					contador++;
				}
			}
		}
		return contador;

	}

	public int retornaQuantiddeAnsiedadeGrave(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteAnsiedade() != null
					&& !lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.SEM_STATUS)) {
				if (lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.GRAVE)) {
					contador++;
				}
			}
		}
		return contador;
	}

	public int retornaQuantidadeAnsiedadeModerada(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteAnsiedade() != null
					&& !lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.SEM_STATUS)) {
				if (lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.MODERADA)) {
					contador++;
				}
			}
		}
		return contador;
	}

	public int retornaQuantidadeAnsiedadeMinima(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteAnsiedade() != null
					&& !lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.SEM_STATUS)) {
				if (lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.MINIMA)) {
					contador++;
				}
			}
		}
		return contador;
	}

	public int retornaQuantidadeAnsiedadeLeve(List<Discente> lista) {
		int contador = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteAnsiedade() != null
					&& !lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.SEM_STATUS)) {
				if (lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.LEVE)) {
					contador++;
				}
			}
		}
		return contador;
	}

	public String retornaStatusMedioDepressao(List<Discente> lista) {
		float nota = 0;
		for (int i = 0; i < lista.size(); i++) {
			List<QuestionarioDeDepressaoDeBeck> listaQD = questionarioDeDepressaoDeBeckService
					.buscaQuestionariosPeloIdDoDiscente(lista.get(i).getId().toString());
			if (!listaQD.equals(null) && listaQD.size() > 0) {
				nota += questionarioDeDepressaoDeBeckService.calcularMediaDeDepressao(lista.get(i).getId().toString());
			}
		}

		if (nota > 0) {
			nota = nota / (lista.size());
		}
		String status = "01 Depressão mínima (Alguém faltou preencher)";
		status = StatusDepressao.getStatus(nota);

		return status;
	}

	public String retornaStatusMedioAnsiedade(List<Discente> lista) {
		float nota = 0;
		for (int i = 0; i < lista.size(); i++) {
			List<QuestionarioDeAnsiedadeDeBeck> listaQA = questionarioDeAnsiedadeDeBeckService
					.buscaQuestionariosPeloIdDoDiscente(lista.get(i).getId().toString());
			if (!listaQA.equals(null) && listaQA.size() > 0) {
				nota += questionarioDeAnsiedadeDeBeckService.calcularMediaDeAnsiedade(lista.get(i).getId().toString());
			}
		}

		if (nota > 0) {
			nota = nota / (lista.size());
		}
		String status = "01 Ansiedade mínima (Alguém faltou preencher)";
		status = StatusAnsiedade.getStatus(nota);

		return status;
	}

	public Estatistica gerarEstatistica(List<Discente> lista) {
		Estatistica estatistica = new Estatistica();
		lista = discenteService.definirMediasDeAnsiedade_depressao_e_status(lista);
		estatistica.setQuantidadeDiscente(this.retornaQuantidadeDiscente(lista));
		estatistica.setQuantidadeDepressaoGrave(this.retornaQuantidadeDepressaoGrave(lista));
		estatistica.setQuantidadeDepressaoModerada(this.retornaQuantidadeDepressaoModerada(lista));
		estatistica.setQuantideAnsiedadeGrave(this.retornaQuantiddeAnsiedadeGrave(lista));
		estatistica.setQuantidadeAnsiedadeModerada(this.retornaQuantidadeAnsiedadeModerada(lista));
		estatistica.setQuantidadeAnsiedadeMinima(this.retornaQuantidadeAnsiedadeMinima(lista));
		estatistica.setQuantidadeAnsiedadeleve(this.retornaQuantidadeAnsiedadeLeve(lista));
		estatistica.setQuantidadeDepressaoMinima(this.retornaQuantidadeDepressaoMimima(lista));
		estatistica.setQuantidadeDepressaoLeve(this.retornaQuantidadeDepressaoLeve(lista));
		estatistica.setStatusMedioDepressao(this.retornaStatusMedioDepressao(lista));
		estatistica.setStatusMedioAnsiedade(this.retornaStatusMedioAnsiedade(lista));

		return estatistica;

	}

	public List<Integer> retornaIdPorPeriodo(String periodo) {
		List<String> lista_id_discente = new ArrayList<String>();
		List<QuestionarioSocioeconomico> listaQuestionarioSocioeconomico = questionarioSocioeconomicoService
				.retornarListaAllQuestionarioSocioeconomico();
		List<Integer> listaID = new ArrayList<Integer>();
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

	public List<Integer> retornaIdPorPeriodoAndCurso(String periodo, String curso) {
		List<String> lista_id_discente = new ArrayList<String>();
		List<QuestionarioSocioeconomico> listaQuestionarioSocioeconomico = questionarioSocioeconomicoService
				.retornarListaAllQuestionarioSocioeconomico();
		List<Integer> listaID = new ArrayList<Integer>();
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

	public List<Discente> retornaDiscentesPorIDs(List<Integer> IDs) {
		List<Discente> lista = new ArrayList<Discente>();
		for (int i = 0; i < IDs.size(); i++) {
			Discente discente = discenteService.buscaDiscentePorID(IDs.get(i));
			lista.add(discente);
		}
		return lista;

	}

	public List<EstatisticaDepressao> converteParaEstatisticaDepressao(List<Estatistica> estatisticas,
			List<String> cursos) {
		List<EstatisticaDepressao> lista = new ArrayList<EstatisticaDepressao>();
		for (int i = 0; i < estatisticas.size(); i++) {
			int quantidadeDiscente = estatisticas.get(i).getQuantidadeDiscente();
			int quantidadeDepressaoGrave = estatisticas.get(i).getQuantidadeDepressaoGrave();
			int quantidadeDepressaoModerada = estatisticas.get(i).getQuantidadeDepressaoModerada();
			int quantidadeDepressaoLeve = estatisticas.get(i).getQuantidadeDepressaoLeve();
			String statusMedioDepressao = estatisticas.get(i).getStatusMedioDepressao();
			String curso = cursos.get(i);
			EstatisticaDepressao estatisticaDepressao = new EstatisticaDepressao(quantidadeDiscente,
					quantidadeDepressaoGrave, quantidadeDepressaoModerada, quantidadeDepressaoMinima,
					quantidadeDepressaoLeve, statusMedioDepressao);
			lista.add(estatisticaDepressao);
		}

		return lista;
	}

}
