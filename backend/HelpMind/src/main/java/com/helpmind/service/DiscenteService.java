package com.helpmind.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Discente;
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

		for (int i = 0; i < lista.size(); i++) {
			lista.get(i).setStatusDoDiscenteAnsiedade(
					retornaStatusAnsiedadeMedia(lista.get(i).getMediaDoDiscenteQuestionariosDeAnsiedade()));
		}

		return lista;
	}

	public String retornaStatusDepressaoMedia(float nota) {
		String status = StatusDepressao.getStatus(nota);
		return status;
	}

	public List<Discente> definirStatusDeDepressaoDoDiscente(List<Discente> lista) {

		for (int i = 0; i < lista.size(); i++) {
			lista.get(i).setStatusDoDiscenteDepresao(
					retornaStatusDepressaoMedia(lista.get(i).getMediaDoDiscenteQuestionariosDeAnsiedade()));
		}

		return lista;
	}

	public List<Discente> definirMediasDeAnsiedade_depressao_e_status(List<Discente> lista) {

		lista = this.definirMediaDeAnsiedadeDoDiscente(lista);
		lista = this.definirMediaDeDepressaoDoDiscente(lista);
		lista = this.definirStatusDeAnsiedadeDoDiscente(lista);
		lista = this.definirStatusDeDepressaoDoDiscente(lista);

		return lista;
	}

	public List<Discente> verificarAumentoVulnerabilidadeEmocional() {
		List<Discente> lista = this.retornaAllDiscentes();
		lista = definirMediasDeAnsiedade_depressao_e_status(lista);
		List<Discente> discentesComAumento = new ArrayList<Discente>();

		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.MODERADA)
					|| lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.GRAVE)
					|| lista.get(i).getStatusDoDiscenteAnsiedade().equals(StatusAnsiedade.GRAVE)
					|| lista.get(i).getStatusDoDiscenteDepresao().equals(StatusDepressao.MODERADA)) {
				if (questionarioDeAnsiedadeDeBeckService.verificaAumentoAnsiedade(lista.get(i).getId().toString())
						|| questionarioDeDepressaoDeBeckService
								.verificaAumentoDepressao(lista.get(i).getId().toString())) {
					discentesComAumento.add(lista.get(i));
				}
			}
		}

		return discentesComAumento;

	}

	public List<Discente> retornaAllDiscentes() {
		List<Discente> lista = discenteRepository.findAll();
		lista = this.definirMediasDeAnsiedade_depressao_e_status(lista);

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

}
