package com.helpmind.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import com.helpmind.model.Curso;



public class JsonDados {
	
	public JSONArray extrairDados(){
		
		JsonLeitura leitura = new JsonLeitura();
		JSONArray lista = null;

		try {
			String dados = leitura.carregarJson();
		    Object obj = JSONValue.parse(dados);
		    JSONArray array = (JSONArray)obj;
		    lista = array;
		     
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return lista;
	}
	
	public List<Curso> trasferiObjetosJSOMparaObjetosCurso() {
		List<Curso> listaDeCursos = new ArrayList<Curso>();
		JSONArray listaDeIFs = this.extrairDados();
		
	     for (int i = 0;i < listaDeIFs.size(); i++) {
	    	 String valor = listaDeIFs.get(i).toString();
	    	 JSONObject objeto = (JSONObject) listaDeIFs.get(i);
	    	 String nomeCurso = (String) objeto.get("descricao");
	    	 String campus = (String) objeto.get("diretoria");
	    	 Curso curso = new Curso();
	    	 curso.setNomeCurso(nomeCurso);
	    	 curso.setCampus(campus);
	    	 listaDeCursos.add(curso);
	    	 System.out.println(curso.getNomeCurso() + " " + curso.getCampus());
	     }
		
		return listaDeCursos;
	}
	
	public List<String> carregarPorChave(String chave){
		
		List<String> lista = new ArrayList<String>();
		JSONArray listaDeIFs = this.extrairDados();
		
	     for (int i = 0;i < listaDeIFs.size(); i++) {
	    	 String valor = listaDeIFs.get(i).toString();
	    	 JSONObject objeto = (JSONObject) listaDeIFs.get(i);
	    	 String x = (String) objeto.get(chave);
	    	 System.out.println(x);
	     }
		return lista;
	}

}
