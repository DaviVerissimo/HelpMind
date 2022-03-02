package com.helpmind.service;

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

	//usar quando for ler do banco
	public List<Curso> retornarCursosPorCampus(String campus) {
		List<Curso> cursosPorCampus = cursoRepository.findByCampus(campus);
		return cursosPorCampus;
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
