package com.helpmind.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.helpmind.model.QuestionarioDeDepressaoDeBeck;

@Repository
public interface QuestionarioDeDepressaoDeBeckRepository extends JpaRepository<QuestionarioDeDepressaoDeBeck, Integer>{

}
