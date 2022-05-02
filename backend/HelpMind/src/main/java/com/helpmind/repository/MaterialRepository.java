package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Material;

@Repository
public interface MaterialRepository extends JpaRepository<Material, Integer>{
	
	public Material deleteByNome(String nome);
	
	public Material findByNome(String nome);

}
