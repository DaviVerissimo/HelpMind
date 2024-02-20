package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.RelatorioPsicologico;

@Repository
public interface RelatorioPsicologicoRepository extends JpaRepository<RelatorioPsicologico, Integer>{

	RelatorioPsicologico findByDiscente(String string);

}
