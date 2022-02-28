package com.helpmind.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;



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
