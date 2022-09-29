package com.helpmind.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/curso")
public class CursoController {
	
	@GetMapping("/listarAllCursos")  // chamado abaixo na rota do frontend
	public List<String> retornarListaTodosOsCursos(){
		FileLeitura objeto = new FileLeitura();
		List<String> lista = null;
		try {
			lista = objeto.carregarCursos();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return lista;
		
	}
	
	@GetMapping("/listarCampus") // rota  de campus utilizada no frontend
	public List<String> retornarListaDeCampus(){
		
		FileLeitura objeto = new FileLeitura();
		List<String> lista = null;
		try {
			lista = objeto.carregarCampi();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return lista;
	}
	
	@GetMapping("/listarCursosPorCampus")  // rota  de curso utilizada no frontend
	public List<String> retornarListaDeCursosPorCampus(){
		return this.retornarListaTodosOsCursos();
		
	}

}
