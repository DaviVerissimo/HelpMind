package com.helpmind.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/file")
public class FileUploadController {
	
	private boolean aceitarArquivo(MultipartFile file) {
		boolean aceito = true;
		//verificamdo tipo
	    String[] arquivosAceitos = {"video/*", "audio/*", "image/*", ".pdf", ".doc", ".docx", ".xls", ".ppt", ".mdb", ".docx", ".xlsx",
	    		".pptx", ".accdb", ".one", ".pub", ".rtf", ".txt", ".odt", ".ods", ".odp", ".odg", ".svg", ".odf", "application/pdf"};
	    String fileContentType = file.getContentType();
	    String fileType = file.getContentType();
		for (String tipo : arquivosAceitos) {
		    if (!fileContentType.equals(tipo) && 
		    		!fileType.startsWith("video/") && 
		    		!fileType.startsWith("audio/") && 
		    		!fileType.startsWith("image/") &&
		    		!fileContentType.equals("application/pdf") ) {
		        
		        aceito = false;
		    }
		}
		
		return aceito;
	}
	
	@PostMapping("/")
	public ResponseEntity<String> fileUpload(@RequestParam("file") MultipartFile file) {

	    if(!this.aceitarArquivo(file)) {
	    	
	    	return new ResponseEntity<>("arquivo com extensão não aceita!", HttpStatus.BAD_REQUEST);
	    }

	    try {
	        // Obtenha o nome original do arquivo
	        String fileName = file.getOriginalFilename();
	        // Obtenha o diretório de destino usando o sistema de propriedades
	        String uploadDir = System.getProperty("user.dir") + "/upload-dir/";
	        // Crie o diretório de destino se ele não existir
	        File directory = new File(uploadDir);
	        if (!directory.exists()) {
	            directory.mkdir();
	        }
	        // Crie o arquivo no diretório de destino
	        File dest = new File(uploadDir + fileName);
	        // Salve o arquivo no disco
	        file.transferTo(dest);
	        return new ResponseEntity<>("Arquivo enviado com sucesso!", HttpStatus.OK);
	    } catch (IOException e) {
	        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	    }
	}

	@GetMapping("/files/{filename:.+}")
	public ResponseEntity<InputStreamResource> downloadFile(@PathVariable String filename) throws IOException {
	    File file = new File("upload-dir/" + filename);
	    InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
	    return ResponseEntity.ok()
	            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
	            .contentType(MediaType.APPLICATION_OCTET_STREAM)
	            .contentLength(file.length())
	            .body(resource);
	}


}
