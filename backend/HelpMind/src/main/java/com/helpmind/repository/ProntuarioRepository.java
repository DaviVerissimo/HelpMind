package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.helpmind.model.Prontuario;

@Repository
public interface ProntuarioRepository extends JpaRepository<Prontuario, Integer>{

	Prontuario findByDiscente(String string);

}
