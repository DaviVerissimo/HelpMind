package com.helpmind.controller;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class JsonLeitura {
	
	public String carregarJson() throws IOException {

		BufferedReader buffRead = new BufferedReader(new FileReader("cursos.json"));
		String linha = "";
		String dados = null;
		while (true) {
			if (linha != null) {
				System.out.println(linha);
				dados = linha;

			} else
				break;
			linha = buffRead.readLine();
		}
		
		buffRead.close();
		
        return dados;
	}

}
