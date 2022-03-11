package com.helpmind.service;

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
	
	public Curso addCurso(Curso curso) {
		cursoRepository.save(curso);
		return curso;
	}

	public List<String> retornarCursosPorCampus(String campus) {
		List<Curso> cursos = cursoRepository.findByCampus(campus);
		List<String> cursosPorCampus = this.retornaNomeDosCursos(cursos);
		return cursosPorCampus;
	}
	
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

}
