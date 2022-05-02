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
		
		return materialRepository.findAll();
	}

	public Material remover(String nome) {
		
		return materialRepository.deleteByNome(nome);
	}

}
