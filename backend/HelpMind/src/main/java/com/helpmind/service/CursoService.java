package com.helpmind.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.controller.JsonDados;
import com.helpmind.model.Curso;
import com.helpmind.repository.CursoRepository;

@Service
public class CursoService {
	
	@Autowired
	private CursoRepository cursoRepository;
	//@Autowired
	//private CampusSessaoRepository campusSessaoRepository;
	
	public Curso addCurso(Curso curso) {
		cursoRepository.save(curso);
		return curso;
	}

	public List<String> retornarCursosPorCampus(String campus) {
		/*EXISTE UM BUG DE SICRONIZAÇÃO. OS CURSOS MOSTRANDOS SÃO SEMPRE
		 * DO ULTIMO ESTADO DO CAMPUS EM RELAÇÃO AO CAMPUS ATUAL.
		 * cOMO SUGESTÃO TENTAR COM REPOSITORIO PARA CAMPUS NA ESTRUTURA DO SPRING NA JPA*/
		
		//List<Curso> cursos = cursoRepository.findByCampus(campus);
		List<Curso> cursos = cursoRepository.findAll();
		//List<Curso> lista = new ArrayList<Curso>();
		List<String> cursosPorCampus = new ArrayList<String>();
		for (int i = 0; i < cursos.size(); i++) {
		String str = "\""+ cursos.get(i).getCampus() +"\"";
			if (str.equals(campus)) {
				String curso = cursos.get(i).getNomeCurso().toString();
				cursosPorCampus.add(curso);
			}

		}

		return cursosPorCampus;
	}
	
//	public List<String> retornarCursosPorCampus3(String campus) {
//		/*EXISTE UM BUG DE SICRONIZAÇÃO. OS CURSOS MOSTRANDOS SÃO SEMPRE
//		 * DO ULTIMO ESTADO DO CAMPUS EM RELAÇÃO AO CAMPUS ATUAL.
//		 * cOMO SUGESTÃO TENTAR COM REPOSITORIO PARA CAMPUS NA ESTRUTURA DO SPRING NA JPA*/
//		//campus = "COORDENAÇÃO DE EDUCAÇÃO À DISTANCIA - CAMPUS CAJAZEIRAS";
//		//campus = "\""+ campus +"\"";
//		List<Curso> cursos = cursoRepository.findByCampus(campus);
//		//List<Curso> cursos = cursoRepository.findAll();
//		//List<Curso> lista = new ArrayList<Curso>();
//		List<String> cursosPorCampus = new ArrayList<String>();
//		
//		
//		System.out.println(campus);
//		System.out.println(cursos.size());
//		for (int i = 0; i < cursos.size(); i++) {
//		String str = cursos.get(i).getCampus();
//		str = "\""+ str +"\"";
//		System.out.println(str);
//			if (str.equals(campus)) {
//				String curso = cursos.get(i).getNomeCurso();
//				cursosPorCampus.add(curso);
//			}
//
//		}
//
//		return cursosPorCampus;
//	}
	
	public List<String> retornaNomeDosCursos(List<Curso> listaDeCursos){
		List<String> lista = new ArrayList<String>();
		for (int i = 0; i < listaDeCursos.size(); i++) {
			String nomeDoCurso = listaDeCursos.get(i).getNomeCurso();
			lista.add(nomeDoCurso);
		}
		return lista;
	}
	
	public List<String> retornarCampus(){
		List<Curso> cursos = cursoRepository.findAll();
		List<String> listaComCampusRepetidos = new ArrayList<String>();
		List<String> listaComFiltro = new ArrayList<String>();
		
		for (int i = 0; i < cursos.size(); i++) {
			listaComCampusRepetidos.add(cursos.get(i).getCampus());
		}
		
		for (int i = 0; i < listaComCampusRepetidos.size(); i++) {
			if (!listaComFiltro.contains(listaComCampusRepetidos.get(i))) {
				listaComFiltro.add(listaComCampusRepetidos.get(i));
			}
		}
		
		return listaComFiltro;
	}
	
	public List<Curso> updateCursos(){
		List<Curso> cursos = null;
		JsonDados dados = new JsonDados();
		if (this.resetCursos()) {
			cursos = dados.trasferiObjetosJSOMparaObjetosCurso();
			for (int i = 0; i < cursos.size(); i++) {
				Curso curso = cursos.get(i);
				this.addCurso(curso);
			}
		}
		
		return cursos;
	}
	
	public boolean resetCursos() {
		boolean exec = false;
		Object obj = cursoRepository.count();
		if(!obj.equals(null)) {
			cursoRepository.deleteAll();
			exec = true;
		}
		return exec;
	}

	public List<Curso> retornaAllCursos() {
		
		return cursoRepository.findAll();
	}
	
	public void definirCampus(String campus) {//codigo temporario
		BufferedWriter buffWrite;
		try {
			buffWrite = new BufferedWriter(new FileWriter("campusSessao.txt"));
			buffWrite.append(campus + "\n");
			buffWrite.close();
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		
	}
	
//	public void definirCampus3(String campus) {//codigo temporario
//		campusSessaoRepository.deleteAll();
//		CampusSessao campusSessao = new CampusSessao();
//		campusSessao.setCampus(campus);
//		campusSessaoRepository.save(campusSessao);
//	}
	
	public String getCampus() { //codigo temporario
		String dados = null;
		
		try {
			BufferedReader buffRead = new BufferedReader(new FileReader("campusSessao.txt"));
			String linha = "";
			
			while (true) {
				if (linha != null) {
					
					dados = linha;

				} else
					break;
				linha = buffRead.readLine();
			}
			
			buffRead.close();
		     
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(dados);
        return dados;
	}
	
//	public String getCampus() { //codigo temporario
//		String dados = null;
//		List<CampusSessao> item = campusSessaoRepository.findAll();
//		dados = item.get(0).getCampus();
//		
//		
//        return dados;
//	}

}
