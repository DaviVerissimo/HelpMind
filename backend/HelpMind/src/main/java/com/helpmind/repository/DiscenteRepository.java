package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Discente;

/**
 * @author davi
 *
 */
@Repository
public interface DiscenteRepository extends JpaRepository<Discente, Integer>{
	
	public Discente findByEmail(String email);

}
