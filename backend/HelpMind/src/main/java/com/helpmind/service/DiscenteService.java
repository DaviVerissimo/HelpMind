package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.ConsultaEstatistica;
import com.helpmind.model.Discente;
import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;
import com.helpmind.model.QuestionarioDeDepressaoDeBeck;
import com.helpmind.model.QuestionarioSocioeconomico;
import com.helpmind.model.StatusAnsiedade;
import com.helpmind.model.StatusDepressao;
import com.helpmind.model.Usuario;
import com.helpmind.repository.DiscenteRepository;

/**
 * @author davi
 *
 */
@Service
public class DiscenteService {

	@Autowired
	private DiscenteRepository discenteRepository;

	@Autowired
	private QuestionarioDeAnsiedadeDeBeckService questionarioDeAnsiedadeDeBeckService;

	@Autowired
	private QuestionarioDeDepressaoDeBeckService questionarioDeDepressaoDeBeckService;

	@Autowired
	private QuestionarioSocioeconomicoService questionarioSocioeconomicoService;

	public Discente buscarDiscentePorEmail(String email) {
		Discente discente = null;
		List<Discente> lista = retornaAllDiscentes();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getEmail().equals(email)) {
				discente = lista.get(i);
			}
		}

		return discente;
	}

	public Discente buscaDiscentePorID(Integer ID) {

//		Discente discente = (Discente) discenteRepository.findById(ID);
		Discente discente = null;
		List<Discente> lista = retornaAllDiscentes();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getId().equals(ID)) {
				discente = lista.get(i);
			}
		}
		return discente;
	}

	public String buscarNomeDoReportante(String idReportante) {
		String nome = null;
		Integer ID = Integer.parseInt(idReportante);
		Discente discente = this.buscaDiscentePorID(ID);
		nome = discente.getNome();

		return nome;
	}

	public boolean isDiscente(String email) {
		boolean existe = false;
		List<Discente> lista = retornaAllDiscentes();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getEmail().equals(email)) {
				existe = true;
			}
		}

		return existe;
	}

	public boolean isDiscenteComGoogleId(String googleId) {
		boolean existe = false;
		List<Discente> lista = retornaAllDiscentes();
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getGoogleId().equals(googleId)) {
				existe = true;
			}
		}

		return existe;
	}

	public List<Discente> definirMediaDeAnsiedadeDoDiscente(List<Discente> lista) {

		for (int i = 0; i < lista.size(); i++) {
			lista.get(i).setMediaDoDiscenteQuestionariosDeAnsiedade(questionarioDeAnsiedadeDeBeckService
					.calcularMediaDeAnsiedade(Integer.toString(lista.get(i).getId())));
		}

		return lista;
	}

	public List<Discente> definirMediaDeDepressaoDoDiscente(List<Discente> lista) {

		for (int i = 0; i < lista.size(); i++) {
			lista.get(i).setMediaDoDiscenteQuestionariosDeDepresao(questionarioDeDepressaoDeBeckService
					.calcularMediaDeDepressao(Integer.toString(lista.get(i).getId())));
		}

		return lista;
	}

	public String retornaStatusAnsiedadeMedia(float nota) {
		String status = StatusAnsiedade.getStatus(nota);
		return status;
	}

	public List<Discente> definirStatusDeAnsiedadeDoDiscente(List<Discente> lista) {
		float nota = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getMediaDoDiscenteQuestionariosDeAnsiedade() > 0) {
				nota = lista.get(i).getMediaDoDiscenteQuestionariosDeAnsiedade();
			}
			lista.get(i).setStatusDoDiscenteAnsiedade(retornaStatusAnsiedadeMedia(nota));
		}

		return lista;
	}

	public String retornaStatusDepressaoMedia(float nota) {
		String status = StatusDepressao.getStatus(nota);
		return status;
	}

	public List<Discente> definirStatusDeDepressaoDoDiscente(List<Discente> lista) {
		float nota = 0;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getMediaDoDiscenteQuestionariosDeDepresao() > 0) {
				nota = lista.get(i).getMediaDoDiscenteQuestionariosDeDepresao();
			}
			lista.get(i).setStatusDoDiscenteDepresao(retornaStatusDepressaoMedia(nota));
		}

		return lista;
	}

	public List<Discente> definirUltimaNotaAnsiedadeDosDiscentes(List<Discente> lista) {
		for (int i = 0; i < lista.size(); i++) {
			lista.get(i).setUltimaNotaAnsiedade(questionarioDeAnsiedadeDeBeckService
					.retornaNotaDoUltimoQuestionario(lista.get(i).getId().toString()));
		}
		return lista;
	}

	public List<Discente> definirUltimaNotaDepressaoDosDiscentes(List<Discente> lista) {
		for (int i = 0; i < lista.size(); i++) {
			lista.get(i).setUltimaNotaDepressao(questionarioDeDepressaoDeBeckService
					.retornaNotaDoUltimoQuestionario(lista.get(i).getId().toString()));
		}
		return lista;
	}

	public List<Discente> gerar_discentes_basico_com_media_status(List<Discente> lista) {

		lista = this.definirMediaDeAnsiedadeDoDiscente(lista);
		lista = this.definirMediaDeDepressaoDoDiscente(lista);
		lista = this.definirStatusDeAnsiedadeDoDiscente(lista);
		lista = this.definirStatusDeDepressaoDoDiscente(lista);
		lista = this.definirUltimaNotaAnsiedadeDosDiscentes(lista);
		lista = this.definirUltimaNotaDepressaoDosDiscentes(lista);

		return lista;
	}

	public List<Discente> gerar_discentes_completo_com_questionarios_media_status(List<Discente> lista) {

		lista = this.gerar_discentes_basico_com_media_status(lista);
		lista = this.retornaDiscentesPopuladosComQuestionariosDeAnsiedade(lista);
		lista = this.retornaDiscentesPopuladosComQuestionariosDeDepressao(lista);
		lista = this.retornaDiscentesPopuladosComQuestionariosSocioeconomicos(lista);

		return lista;
	}

	public List<Discente> verificarAumentoVulnerabilidadeEmocional() {
		List<Discente> lista = this.retornaAllDiscentes();
		lista = gerar_discentes_basico_com_media_status(lista);
		List<Discente> discentesComAumento = new ArrayList<Discente>();

		for (int i = 0; i < lista.size(); i++) {
			Discente discente = lista.get(i);
			if (discente.getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.GRAVE)
					|| discente.getStatusDoDiscenteDepresao().equals(StatusDepressao.GRAVE)) {
				discentesComAumento.add(discente);
			}

			if (discente.getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.MODERADA)
					|| discente.getStatusDoDiscenteDepresao().equals(StatusDepressao.MODERADA)) {
				discentesComAumento.add(discente);
				if (questionarioDeAnsiedadeDeBeckService.verificaAumentoAnsiedade(discente.getId().toString())
						|| questionarioDeDepressaoDeBeckService.verificaAumentoDepressao(discente.getId().toString())) {
					discentesComAumento.add(discente);
				}
			}
		}

		return discentesComAumento;
	}

	public List<Discente> retornaAllDiscentes() {
		List<Discente> lista = discenteRepository.findAll();
		lista = this.gerar_discentes_basico_com_media_status(lista);
		return lista;
	}

	public Discente criarDiscente(Usuario usuario) {
		Discente discente = new Discente();
		discente.setNome(usuario.getNome());
		discente.setEmail(usuario.getEmail());
		discente.setGoogleId(usuario.getGoogleId());
		discente.setImagemPerfilUri(usuario.getImagemPerfilUri());
		discenteRepository.save(discente);

		return discente;
	}

	public Discente retornarDiscentePeloGoogleId(String googleId) {
		Discente discente = new Discente();
		List<Discente> lista = retornaAllDiscentes();
		for (int i = 0; i < lista.size(); i++) {

			if (lista.get(i).getGoogleId().equals(googleId)) {
				discente = lista.get(i);
			}
		}

		return discente;
	}

	public List<String> retornaAllNomesDiscentes() {
		List<Discente> listaDeDiscentes = discenteRepository.findAll();
		List<String> lista = new ArrayList<String>();
		for (int i = 0; i < listaDeDiscentes.size(); i++) {
			lista.add(listaDeDiscentes.get(i).getNome());
		}

		return lista;
	}

	public List<String> retornaAllEmailDiscentes() {
		List<Discente> listaDeDiscentes = discenteRepository.findAll();
		List<String> lista = new ArrayList<String>();
		for (int i = 0; i < listaDeDiscentes.size(); i++) {
			lista.add(listaDeDiscentes.get(i).getEmail());
		}

		return lista;
	}

	public List<Discente> retornaDiscenteByCurso(String curso) {

		List<Discente> listaAll = this.retornaAllDiscentes();
		List<Discente> lista = new ArrayList<Discente>();
		for (int i = 0; i < listaAll.size(); i++) {
			String aux = " \"" + listaAll.get(i).getCurso() + "\" ";
			if (aux.contains(curso)) {

				lista.add(listaAll.get(i));
			}
		}

		return lista;
	}

	public List<Discente> retornaDiscenteByCursoForListaDeDiscentes(List<Discente> listaDeDiscentes, String curso) {

		List<Discente> lista = new ArrayList<Discente>();
		for (int i = 0; i < listaDeDiscentes.size(); i++) {
			String aux = " \"" + listaDeDiscentes.get(i).getCurso() + "\" ";
			if (aux.contains(curso)) {

				lista.add(listaDeDiscentes.get(i));
			}
		}

		return lista;
	}

	public List<Discente> retornaDiscentesPopuladosComQuestionariosDeAnsiedade(List<Discente> listaDeDiscentes) {
		List<Discente> lista = new ArrayList<Discente>();

		for (int i = 0; i < listaDeDiscentes.size(); i++) {
			List<QuestionarioDeAnsiedadeDeBeck> listaDeQuestionarios = questionarioDeAnsiedadeDeBeckService
					.buscaQuestionariosPeloIdDoDiscente(listaDeDiscentes.get(i).getId().toString());
			if (!listaDeQuestionarios.equals(null) && listaDeQuestionarios.size() > 0) {
				Discente discente = listaDeDiscentes.get(i);
				discente.setListaQuestionarioDeAnsiedadeDeBeck(listaDeQuestionarios);
				lista.add(discente);
			}
		}

		return lista;
	}

	public List<Discente> retornaDiscentesPopuladosComQuestionariosDeDepressao(List<Discente> listaDeDiscentes) {
		List<Discente> lista = new ArrayList<Discente>();

		for (int i = 0; i < listaDeDiscentes.size(); i++) {
			List<QuestionarioDeDepressaoDeBeck> listaDeQuestionarios = questionarioDeDepressaoDeBeckService
					.buscaQuestionariosPeloIdDoDiscente(listaDeDiscentes.get(i).getId().toString());
			if (!listaDeQuestionarios.equals(null) && listaDeQuestionarios.size() > 0) {
				Discente discente = listaDeDiscentes.get(i);
				discente.setListaQuestionarioDeDepresaoDeBeck(listaDeQuestionarios);
				lista.add(discente);
			}
		}

		return lista;
	}

	public List<Discente> retornaDiscentesPopuladosComQuestionariosSocioeconomicos(List<Discente> listaDeDiscentes) {
		List<Discente> lista = new ArrayList<Discente>();

		for (int i = 0; i < listaDeDiscentes.size(); i++) {
			List<QuestionarioSocioeconomico> listaDeQuestionarios = questionarioSocioeconomicoService
					.buscaQuestionariosPeloIdDoDiscente(listaDeDiscentes.get(i).getId());
			if (!listaDeQuestionarios.equals(null) && listaDeQuestionarios.size() > 0) {
				Discente discente = listaDeDiscentes.get(i);
				discente.setListaQuestionarioSocioeconomico(listaDeQuestionarios);
				lista.add(discente);
			}
		}

		return lista;
	}

	public List<Discente> filtraDiscentePorCurso(List<Discente> lista, String curso) {
		List<Discente> listaDeDiscentes = new ArrayList<Discente>();

		for (int i = 0; i < lista.size(); i++) {
			Discente discente = null;
			if (curso.equals("All")) {
				return lista;
			} else if (lista.get(i).getCurso().equals(curso)) {// possivelmente o defeito é aqui
				discente = lista.get(i);
				if (!discente.equals(null)) {
					listaDeDiscentes.add(discente);
					System.out.println(discente.getNome() + " curso");
				}
			}
		}

		return listaDeDiscentes;
	}

	public List<Discente> filtraDiscentePorPeriodo(List<Discente> lista, String periodo) {
		List<Discente> listaDeDiscentes = new ArrayList<Discente>();

		for (int i = 0; i < lista.size(); i++) {
			Discente discente = null;
			if (periodo.equals("All")) {
				listaDeDiscentes.add(lista.get(i));
			} else if (lista.get(i).getPeriodo().equals(periodo)) {
				discente = lista.get(i);
				if (!discente.equals(null)) {
					listaDeDiscentes.add(discente);
					System.out.println(discente.getNome() + " periodo");
				}
			}
		}

		return listaDeDiscentes;
	}

	public List<Discente> filtraDiscentePorCampus(List<Discente> lista, String campus) {
		List<Discente> listaDeDiscentes = new ArrayList<Discente>();

		for (int i = 0; i < lista.size(); i++) {
			Discente discente = null;
			if (campus.equals("All")) {
				listaDeDiscentes.add(lista.get(i));
			} else if (lista.get(i).getCampus().equals(campus)) {
				discente = lista.get(i);
				if (!discente.equals(null)) {
					listaDeDiscentes.add(discente);
					System.out.println(discente.getNome() + " campus");
				}
			}
		}

		return listaDeDiscentes;
	}

	public List<Discente> filtraDiscentePorSemestre(List<Discente> lista, String semestre) {
		List<Discente> listaDeDiscentes = new ArrayList<Discente>();
//pode haver um bug aqui
		for (int i = 0; i < lista.size(); i++) {
			Discente discente = lista.get(i);
			if (semestre.equals("All")) {
				listaDeDiscentes.add(discente);
			} else if (!discente.getListaQuestionarioDeDepresaoDeBeck().equals(null)
					&& discente.getListaQuestionarioDeDepresaoDeBeck().size() > 0) {
				listaDeDiscentes.add(discente);
				System.out.println(discente.getNome() + " semestre depressão e ansiedade");
			}
		}

		return listaDeDiscentes;
	}

	public List<Discente> filtraDiscentePorSemestreAnsiedade(List<Discente> lista, String semestre) {
		List<Discente> listaDeDiscentes = new ArrayList<Discente>();
		for (int i = 0; i < lista.size(); i++) {
			Discente discente = lista.get(i);
			if (semestre.equals("All")) {

				return lista;

			} else if (!discente.getListaQuestionarioDeAnsiedadeDeBeck().equals(null)) {
				if (!questionarioDeAnsiedadeDeBeckService
						.retornaQuestionariosPorSemestre(semestre, discente.getListaQuestionarioDeAnsiedadeDeBeck())
						.equals(null)) {
					listaDeDiscentes.add(discente);
					System.out.println(discente.getNome() + " semestre ansiedade");
				}
			}
		}

		return listaDeDiscentes;
	}

	public List<Discente> filtraDiscentePorSemestreDepressao(List<Discente> lista, String semestre) {
		List<Discente> listaDeDiscentes = new ArrayList<Discente>();
		for (int i = 0; i < lista.size(); i++) {
			Discente discente = lista.get(i);
			if (semestre.equals("All")) {

				return lista;

			} else if (!discente.getListaQuestionarioDeDepresaoDeBeck().equals(null)) {
				if (!questionarioDeDepressaoDeBeckService
						.retornaQuestionariosPorSemestre(semestre, discente.getListaQuestionarioDeDepresaoDeBeck())
						.equals(null)) {
					listaDeDiscentes.add(discente);
					System.out.println(discente.getNome() + " semestre depressão");
				}
			}
		}

		return listaDeDiscentes;
	}

	public List<Discente> preparaDiscentesParaConsulta(List<Discente> lista, String flag,
			ConsultaEstatistica consultaEstatistica) {
		lista = this.filtraDiscentePorCurso(lista, consultaEstatistica.getCurso());
		lista = this.filtraDiscentePorPeriodo(lista, consultaEstatistica.getPeriodo());
		lista = this.filtraDiscentePorCampus(lista, consultaEstatistica.getCampus());
		if (flag.equals("Ansiedade")) {
			lista = this.filtraDiscentePorSemestreAnsiedade(lista, consultaEstatistica.getSemestre());
		}
		if (flag.equals("Depressão")) {
			lista = this.filtraDiscentePorSemestreDepressao(lista, consultaEstatistica.getSemestre());
		}

		if (flag.equals("All")) {
			lista = this.filtraDiscentePorSemestre(lista, consultaEstatistica.getSemestre());
		}

		return lista;
	}

}
