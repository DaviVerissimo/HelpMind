package com.helpmind.controller;

import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.helpmind.service.FileService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/file")
public class FileController {
	
	@Autowired
	private FileService fileService;
	
	@PostMapping("/upload") //VERIFICAR TIPO DE REQUISIÇÃO NO SHOWCASE DO PRIMEREACT
	public void fileUpload(@RequestParam MultipartFile multipartFile) throws URISyntaxException {
		String nome = multipartFile.getOriginalFilename();
		fileService.nomeArquivo(nome);
	}

}
