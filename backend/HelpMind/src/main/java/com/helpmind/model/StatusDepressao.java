package com.helpmind.model;

public abstract class StatusDepressao {

	public static final String MINIMA = "Depressão mínima";

	public static final String LEVE = "Depressão leve";

	public static final String MODERADA = "Depressão moderada";

	public static final String GRAVE = "Depressão grave";

	public static final String SEM_STATUS = "Sem status";

	public static String getStatus(float nota) {

		String status = SEM_STATUS;

		if (nota >= 0 && nota <= 9) {
			status = MINIMA;
		}
		if (nota >= 10 && nota <= 18) {
			status = LEVE;
		}
		if (nota >= 19 && nota <= 29) {
			status = MODERADA;
		}
		if (nota >= 30) {
			status = GRAVE;
		}
		return status;
	}

}
