package com.helpmind.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Reporte;

@Repository
public interface ReporteRepository extends JpaRepository<Reporte, Integer>{
	
	public List<Reporte> findByDiscente(String discente);
	
	//public List<Reporte> findAll();

}
