package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Administrador;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Integer>{

}
