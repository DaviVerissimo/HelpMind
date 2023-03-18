package com.helpmind.model;

public abstract class StatusAnsiedade {

	public static final String MINIMA = "01 Ansiedade mínima";

	public static final String LEVE = "02 Ansiedade leve";

	public static final String MODERADA = "03 Ansiedade moderada";

	public static final String GRAVE = "04 Ansiedade grave";

	public static final String SEM_STATUS = "Sem status";

	public static String getStatus(float nota) {

		String status = "Sem status*";

		if (nota >= 0 && nota <= 7) {
			status = MINIMA;
		}
		if (nota >= 8 && nota <= 15) {
			status = LEVE;
		}
		if (nota >= 16 && nota <= 25) {
			status = MODERADA;
		}
		if (nota >= 26) {
			status = GRAVE;
		}

		return status;
	}

}
