package com.helpmind.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Integer>{
	
	public List<Curso> findByCampus(String campus);

}
