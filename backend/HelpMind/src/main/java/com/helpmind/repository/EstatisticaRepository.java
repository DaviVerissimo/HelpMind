package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Estatistica;

@Repository
public interface EstatisticaRepository extends JpaRepository<Estatistica, Integer>{

}
