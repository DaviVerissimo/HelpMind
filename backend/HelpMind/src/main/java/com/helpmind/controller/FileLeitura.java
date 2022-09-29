package com.helpmind.controller;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.helpmind.repository.CursoRepository;

public class FileLeitura {
	
	public List<String> carregarCursos() throws IOException {
		
		List<String> lista = new ArrayList<String>();
		BufferedReader buffRead = new BufferedReader(new FileReader("cursos.txt"));
		String linha = "";
		String dados = null;
		while (true) {
			if (linha != null) {
//				System.out.println(linha);
				dados = linha;
				lista.add(dados);

			} else
				break;
			linha = buffRead.readLine();
		}
		
		buffRead.close();
		
        return lista;
	}
	
	public List<String> carregarCampi() throws IOException {
		
		List<String> lista = new ArrayList<String>();
		BufferedReader buffRead = new BufferedReader(new FileReader("campus.txt"));
		String linha = "";
		String dados = null;
		while (true) {
			if (linha != null) {
//				System.out.println(linha);
				dados = linha;
				if (!isExistCampus(dados, lista)) {
					lista.add(dados);
				}
				
				
			} else
				break;
			linha = buffRead.readLine();
		}
		
		buffRead.close();
		
        return lista;
	}
	
	private boolean isExistCampus(String campus, List<String> lista) {
		boolean existe = false;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).equals(campus)) {
				existe = true;
			}
		}
		
		return existe;
	}

}
