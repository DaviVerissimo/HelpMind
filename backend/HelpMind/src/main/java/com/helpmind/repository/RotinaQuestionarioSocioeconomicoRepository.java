package com.helpmind.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.RotinaQuestionarioSocioeconomico;

@Repository
public interface RotinaQuestionarioSocioeconomicoRepository extends JpaRepository<RotinaQuestionarioSocioeconomico, Integer>{

	Optional<RotinaQuestionarioSocioeconomico> findByIdDiscente(String id);

}
