package com.helpmind.service;

import java.io.File;
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
		
		return materialRepository.findAll();
	}

	public void remover(Material material) {
		deleteFile(material.getNomeDoArquivo());
		materialRepository.delete(material);
	}
	
	public void removerAllMateriaisAndFiles() {
		materialRepository.deleteAll();
		deleteFiles();
	}
	
	public void deleteFile(String nome) {
		File folder = new File("upload-dir");
		if (folder.isDirectory()) {
			File[] sun = folder.listFiles();
			for (int i = 0; i < sun.length; i++) {
				if (sun[i].getName().equals(nome)) {
					sun[i].delete();
				}
			}
		}
	}
	
	public void deleteFiles() {
		File folder = new File("upload-dir");
		if (folder.isDirectory()) {
			File[] sun = folder.listFiles();
			for (int i = 0; i < sun.length; i++) {
				sun[i].delete();
			}
		}
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
		Material material = new Material();
		material.setNome(nome);
		List<Material> lista = this.listarTodosMateriais();
		
		for (int i = 0; i < this.listarTodosMateriais().size(); i++) {
			if (lista.get(i).getNome().equals(nome)) {
				material = lista.get(i);
			} 
		}
		
		return material;
		
	}
	
	

}
