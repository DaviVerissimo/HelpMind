package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Integer>{

	Contato findByNome(String string);
	
	


}
