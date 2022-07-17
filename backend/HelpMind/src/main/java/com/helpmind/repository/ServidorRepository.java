package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Servidor;

@Repository
public interface ServidorRepository extends JpaRepository<Servidor, Integer>{

}
