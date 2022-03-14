package com.helpmind.service;

import org.springframework.stereotype.Service;

@Service
public class FileService {
	
	public String nomeArquivo(String nome) {
		System.out.println(nome);
		return nome;
	}

}
