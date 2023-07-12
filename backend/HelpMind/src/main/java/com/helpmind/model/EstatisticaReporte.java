package com.helpmind.model;

public class EstatisticaReporte {

	private String curso;
	
	private int quantidadeReportado;

	private int quantidadeReportante;

	private int quantidadeTentativaSuicidio;

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public int getQuantidadeReportado() {
		return quantidadeReportado;
	}

	public void setQuantidadeReportado(int quantidadeReportado) {
		this.quantidadeReportado = quantidadeReportado;
	}

	public int getQuantidadeReportante() {
		return quantidadeReportante;
	}

	public void setQuantidadeReportante(int quantidadeReportante) {
		this.quantidadeReportante = quantidadeReportante;
	}

	public int getQuantidadeTentativaSuicidio() {
		return quantidadeTentativaSuicidio;
	}

	public void setQuantidadeTentativaSuicidio(int quantidadeTentativaSuicidio) {
		this.quantidadeTentativaSuicidio = quantidadeTentativaSuicidio;
	}

}
