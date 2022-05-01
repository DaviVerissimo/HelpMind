package com.helpmind.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helpmind.service.FileService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/file")
public class FileController {
	
	@Autowired
	private FileService fileService;

}
