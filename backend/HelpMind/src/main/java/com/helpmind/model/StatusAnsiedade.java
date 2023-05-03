package com.helpmind.model;

public abstract class StatusAnsiedade {

	public static final String MINIMA = "Ansiedade mínima";

	public static final String LEVE = "Ansiedade leve";

	public static final String MODERADA = "Ansiedade moderada";

	public static final String GRAVE = "Ansiedade grave";

	public static final String SEM_STATUS = "Sem status";

	public static String getStatus(float nota) {

		String status = SEM_STATUS;

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
