package com.helpmind.controller;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.model.Curso;
import com.helpmind.service.CursoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/curso")
public class CursoController {
	private String campus;
	@Autowired
	private CursoService cursoService;
	
	@GetMapping("/update")
	public void updateCursos() {
		cursoService.updateCursos();
	}
	
	@GetMapping("/listarAllCursos")
	public List<String> retornarListaTodosOsCursos(){
		return cursoService.retornaNomeDosCursos(cursoService.retornaAllCursos());
		
	}
	
	@PostMapping("/definirCampus")
	public void definirCampus(@RequestBody String campus) throws URISyntaxException {
		this.campus = campus;
	}
	
	@GetMapping("/listarCampus")
	public List<String> retornarListaDeCampus(){
		return cursoService.retornarCampus();
	}
	
	@GetMapping("/listarCursosPorCampus")
	public List<String> retornarListaDeCursosPorCampus(){
		return cursoService.retornarCursosPorCampus(campus);
	}

}
