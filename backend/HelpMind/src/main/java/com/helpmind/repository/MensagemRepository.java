package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Mensagem;

@Repository
public interface MensagemRepository extends JpaRepository<Mensagem, Integer> {	

}
