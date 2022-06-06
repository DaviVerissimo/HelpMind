package com.helpmind.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpmind.model.Material;
import com.helpmind.repository.MaterialRepository;

@Service
public class MaterialService {

	@Autowired
	private MaterialRepository materialRepository;

	public Material salvar(Material material) {
		materialRepository.save(material);
		
		return material;
		
	}
	
	public List<Material> listarTodosMateriais(){
		LimpezaDeArquivos limpeza = new LimpezaDeArquivos();
		limpeza.limparArquivosOrfaos();
		
		return materialRepository.findAll();
	}

	public void remover(Material material) {
		
		materialRepository.delete(material);
	}
	
	public Material PesquisarPorID(Integer ID) {
		Material material = new Material();
		material.setId(ID);
		List<Material> lista = this.listarTodosMateriais();
		
		for (int i = 0; i < this.listarTodosMateriais().size(); i++) {
			if (lista.get(i).getId().equals(ID)) {
				material = lista.get(i);
			} 
		}
		return material;
	}

	public Material pesquisarPorNome(String nome) {
		System.out.println(nome);
		Material material = new Material();
		material.setNome(nome);
		List<Material> lista = this.listarTodosMateriais();
		
		for (int i = 0; i < this.listarTodosMateriais().size(); i++) {
			if (lista.get(i).getNome().equals(nome)) {
				material = lista.get(i);
			} 
		}
		
		System.out.println(material.getNome() + "  "  + material.getCategoria() + "  " +  material.getId() );
		return material;
		
	}
	
	

}
