package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.controller.FileLeitura;
import com.helpmind.model.ConsultaEstatistica;
import com.helpmind.model.ContadorDeNotas;
import com.helpmind.model.Discente;
import com.helpmind.model.Estatistica;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioDeDepressaoDeBeck;
import com.helpmind.model.StatusAnsiedade;
import com.helpmind.model.StatusDepressao;

@Service
public class EstatisticaService {

	private FileLeitura leitura = new FileLeitura();

	@Autowired
	private DiscenteService discenteService;

	public List<Estatistica> retornaEstatisticasAnsiedade(ConsultaEstatistica consultaEstatistica) {
		List<Discente> lista = discenteService.retornaAllDiscentes();
//		lista = discenteService.preparaDiscentesParaConsulta(lista, "Ansiedade", consultaEstatistica);
		lista = this.filtrarDiscentes(lista, consultaEstatistica.getCampus(), consultaEstatistica.getCurso(),
				consultaEstatistica.getPeriodo(), consultaEstatistica.getSemestre() );
		List<Estatistica> estatisticas = new ArrayList<Estatistica>();
		Estatistica estatistica = new Estatistica();
		List<String> cursos = configurarCursos(consultaEstatistica);

		for (int i = 0; i < cursos.size(); i++) {
			String curso = cursos.get(i);
			estatistica = this.gerarEstatisticasAnsiedade(lista, curso);
			estatisticas.add(estatistica);
		}

		return estatisticas;

	}

	public List<Estatistica> retornaEstatisticasDepressao(ConsultaEstatistica consultaEstatistica) {

		List<Discente> lista = discenteService.retornaAllDiscentes();
//		lista = discenteService.preparaDiscentesParaConsulta(lista, "Ansiedade", consultaEstatistica);
		lista = this.filtrarDiscentes(lista, consultaEstatistica.getCampus(), consultaEstatistica.getCurso(),
				consultaEstatistica.getPeriodo(), consultaEstatistica.getSemestre() );
		List<Estatistica> estatisticas = new ArrayList<Estatistica>();
		Estatistica estatistica = new Estatistica();
		List<String> cursos = configurarCursos(consultaEstatistica);

		for (int i = 0; i < cursos.size(); i++) {
			String curso = cursos.get(i);
			estatistica = this.gerarEstatisticasDepressao(lista, curso);
			estatisticas.add(estatistica);
		}

		return estatisticas;

	}

	public List<String> configurarCursos(ConsultaEstatistica consultaEstatistica) {
		List<String> cursos = new ArrayList<String>();
		List<String> campusLista = new ArrayList<String>();
		if (consultaEstatistica.getCampus().equals("All")) {
			campusLista = leitura.carregarCampi();
			if (consultaEstatistica.getCurso().equals("All")) {
				cursos = leitura.carregarCursos();
			} else {
				cursos = leitura.carregarCursosPorCampus(consultaEstatistica.getCampus());
			}
		} else {
			String campus = consultaEstatistica.getCampus();
			if (consultaEstatistica.getCurso().equals("All")) {
				cursos = leitura.carregarCursosPorCampus(campus);
			} else {
				cursos.add(consultaEstatistica.getCurso());
			}
		}
		return cursos;
	}

	public boolean isContemEstatisticaDoCurso(List<Estatistica> lista, Estatistica estatistica, String curso) {

		for (int i = 0; i < lista.size(); i++) {
			if (estatistica.getCurso().equals(lista.get(i).getCurso())) {

				return true;
			}
		}

		return false;
	}

	public List<Discente> filtrarDiscentes(List<Discente> discentes, String campus, String curso, String periodo,
			String semestre) {
		List<Discente> resultado = new ArrayList<>();

		for (Discente discente : discentes) {
			boolean atendeCampus = campus.equalsIgnoreCase("All") || discente.getCampus().equalsIgnoreCase(campus);
			boolean atendeCurso = curso.equalsIgnoreCase("All") || discente.getCurso().equalsIgnoreCase(curso);
			boolean atendePeriodo = periodo.equalsIgnoreCase("All") || discente.getPeriodo().equalsIgnoreCase(periodo);

			if (atendeCampus && atendeCurso && atendePeriodo) {
				resultado.add(discente);
			}
		}
//		resultado = this.filtraDiscentePorSemestre(discentes, semestre);

		return resultado;
	}

	public List<Discente> filtraDiscentePorSemestre(List<Discente> discentes, String semestreFiltrado) {
		List<Discente> discentesFiltrados = new ArrayList<>();
		for (Discente discente : discentes) {
			if (discente.getListaQuestionarioDeAnsiedadeDeBeck() != null) {
				for (QuestionarioDeAnsiedadeDeBeck questionario : discente.getListaQuestionarioDeAnsiedadeDeBeck()) {
					if (questionario.getSemestre().equals(semestreFiltrado) || semestreFiltrado.equals("All")) {
						discentesFiltrados.add(discente);
						// Sai do loop interno para evitar adicionar o mesmo discente várias vezes
						break;
					}
				}
			}

			if (discente.getListaQuestionarioDeDepresaoDeBeck() != null) {
				for (QuestionarioDeDepressaoDeBeck questionario : discente.getListaQuestionarioDeDepresaoDeBeck()) {
					if (questionario.getSemestre().equals(semestreFiltrado) || semestreFiltrado.equals("All")) {
						discentesFiltrados.add(discente);
						// Sai do loop interno para evitar adicionar o mesmo discente várias vezes
						break;
					}
				}
			}
		}
		return discentesFiltrados;
	}

	public int retornaQuantidadeDiscentesPorCurso(List<Discente> lista, String curso) {
		int quantidade = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getCurso().equals(curso)) {
				quantidade++;
			}
		}

		return quantidade;

	}

	public ContadorDeNotas contadorAnsiedadePorCurso(List<Discente> lista, String curso) {
		ContadorDeNotas notas = new ContadorDeNotas();
		for (int i = 0; i < lista.size(); i++) {
			float media = lista.get(i).getMediaDoDiscenteQuestionariosDeAnsiedade();

			if (lista.get(i).getCurso().equals(curso)) {
				if (StatusAnsiedade.getStatus(media).equals(StatusAnsiedade.MINIMA)) {
					notas.quantidadeMinima++;
				}

				if (StatusAnsiedade.getStatus(media).equals(StatusAnsiedade.LEVE)) {
					notas.quantidadeLeve++;
				}

				if (StatusAnsiedade.getStatus(media).equals(StatusAnsiedade.MODERADA)) {
					notas.quantidadeModerada++;
				}

				if (StatusAnsiedade.getStatus(media).equals(StatusAnsiedade.GRAVE)) {
					notas.quantidadeGrave++;
				}
			}
		}

		return notas;
	}

	public ContadorDeNotas contadorDepressao(List<Discente> lista, String curso) {
		ContadorDeNotas notas = new ContadorDeNotas();
		for (int i = 0; i < lista.size(); i++) {
			float media = lista.get(i).getMediaDoDiscenteQuestionariosDeDepresao();
			if (lista.get(i).getCurso().equals(curso)) {
				if (StatusDepressao.getStatus(media).equals(StatusDepressao.MINIMA)) {
					notas.quantidadeMinima++;
				}

				if (StatusDepressao.getStatus(media).equals(StatusDepressao.LEVE)) {
					notas.quantidadeLeve++;
				}

				if (StatusDepressao.getStatus(media).equals(StatusDepressao.MODERADA)) {
					notas.quantidadeModerada++;
				}

				if (StatusDepressao.getStatus(media).equals(StatusDepressao.GRAVE)) {
					notas.quantidadeGrave++;
				}
			}
		}

		return notas;
	}

	public List<Discente> retornaDiscentesPorIDs(List<Integer> IDs) {
		List<Discente> lista = new ArrayList<Discente>();
		for (int i = 0; i < IDs.size(); i++) {
			Discente discente = discenteService.buscaDiscentePorID(IDs.get(i));
			lista.add(discente);
		}
		return lista;

	}

	public float retornaMediaDoCursoAnsiedade(List<Discente> lista, String curso) {
		float media = 0;
		for (int i = 0; i < lista.size(); i++) {
			System.out.println(lista.get(i).getCurso() + " " + curso);
			if (lista.get(i).getCurso().equals(curso)) {
				media += lista.get(i).getMediaDoDiscenteQuestionariosDeAnsiedade();
			}

		}
		if (media > 0) {
			media = media / (lista.size());
		}

		return media;
	}

	public float retornaMediaDoCursoDepressao(List<Discente> lista, String curso) {
		float media = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getCurso().equals(curso)) {
				media += lista.get(i).getMediaDoDiscenteQuestionariosDeDepresao();
			}

		}
		if (media > 0) {
			media = media / (lista.size());
		}

		return media;
	}

	public Estatistica gerarEstatisticasAnsiedade(List<Discente> lista, String curso) {

		Estatistica estatistica = new Estatistica();
		lista = discenteService.gerar_discentes_completo_com_questionarios_media_status(lista);
		estatistica.setQuantidadeTotal(this.retornaQuantidadeDiscentesPorCurso(lista, curso));
		ContadorDeNotas contador = contadorAnsiedadePorCurso(lista, curso);
		float media = this.retornaMediaDoCursoAnsiedade(lista, curso);
		estatistica.setMedia(media);
		estatistica.setQuantidadeGrave(contador.quantidadeGrave);
		estatistica.setQuantidadeModerada(contador.quantidadeModerada);
		estatistica.setQuantidadeLeve(contador.quantidadeLeve);
		estatistica.setQuantidadeMinima(contador.quantidadeMinima);
		estatistica.setStatusMedio(StatusAnsiedade.getStatus(media));
		estatistica.setCurso(curso);

		return estatistica;

	}

	public Estatistica gerarEstatisticasDepressao(List<Discente> lista, String curso) {
		Estatistica estatistica = new Estatistica();
		lista = discenteService.gerar_discentes_completo_com_questionarios_media_status(lista);
		estatistica.setQuantidadeTotal(this.retornaQuantidadeDiscentesPorCurso(lista, curso));
		ContadorDeNotas contador = contadorDepressao(lista, curso);
		float media = this.retornaMediaDoCursoDepressao(lista, curso);
		estatistica.setMedia(media);
		estatistica.setQuantidadeGrave(contador.quantidadeGrave);
		estatistica.setQuantidadeModerada(contador.quantidadeModerada);
		estatistica.setQuantidadeLeve(contador.quantidadeLeve);
		estatistica.setQuantidadeMinima(contador.quantidadeMinima);
		estatistica.setStatusMedio(StatusDepressao.getStatus(media));
		estatistica.setCurso(curso);

		return estatistica;

	}

}
