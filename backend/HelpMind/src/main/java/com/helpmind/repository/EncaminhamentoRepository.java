package com.helpmind.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.Encaminhamento;

@Repository
public interface EncaminhamentoRepository extends JpaRepository<Encaminhamento, Integer>{
	
	public List<Encaminhamento> findByIdProfissionalDeSaude(String id);
	
	public List<Encaminhamento> findByIdPsicologo(String id);

}
