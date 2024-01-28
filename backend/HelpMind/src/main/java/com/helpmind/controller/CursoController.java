package com.helpmind.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/curso")
public class CursoController {

	@GetMapping("/listarAllCursos")
	public List<String> retornarListaTodosOsCursos() throws IOException {
		FileLeitura objeto = new FileLeitura();
		List<String> lista = null;
		lista = objeto.carregarCursos();
		
		return lista;

	}

	@GetMapping("/listarCampus")
	public List<String> retornarListaDeCampus() throws IOException {
		FileLeitura objeto = new FileLeitura();
		List<String> lista = null;
		lista = objeto.carregarCampi();
		
		return lista;
	}

	@GetMapping("/listarCursosPorCampus")
	public List<String> retornarListaDeCursosPorCampus(String campus) {
		FileLeitura objeto = new FileLeitura();

		return objeto.carregarCursosPorCampus(campus);

	}

}
