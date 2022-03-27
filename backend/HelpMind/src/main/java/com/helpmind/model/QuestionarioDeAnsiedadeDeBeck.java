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
@Table(name = "questionarioDeAnsiedadeDeBeck")
public class QuestionarioDeAnsiedadeDeBeck implements Questionario{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

}
