package com.helpmind.model;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public abstract class Log {
	
	public static void gravarEmLog(String dado) {
        try {
            FileWriter fw = new FileWriter("log.txt");
            PrintWriter pw = new PrintWriter(fw);
            pw.println(dado);
            pw.close();
            
        } catch (IOException e) {
            System.err.println("Erro ao criar ou escrever no arquivo.");
            e.printStackTrace();
        }
	}

}
