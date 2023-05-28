package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Conversa;

@Repository
public interface ConversaRepository extends JpaRepository<Conversa, Integer>{

}
