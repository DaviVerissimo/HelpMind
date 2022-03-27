package com.helpmind.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author davi
 *
 */
@Entity
@Table(name = "questionarioDeDepresaoDeBeck")
public class QuestionarioDeDepressaoDeBeck implements Questionario{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

}
