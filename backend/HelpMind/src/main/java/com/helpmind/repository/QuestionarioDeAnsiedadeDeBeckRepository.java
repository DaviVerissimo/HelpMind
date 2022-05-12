package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.QuestionarioDeAnsiedadeDeBeck;

@Repository
public interface QuestionarioDeAnsiedadeDeBeckRepository extends JpaRepository<QuestionarioDeAnsiedadeDeBeck, Integer>{

}
