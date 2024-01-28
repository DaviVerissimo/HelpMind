//package com.helpmind.controller;
//
//import java.io.IOException;
//
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.security.oauth2.core.oidc.OidcIdToken;
//import org.springframework.security.oauth2.core.oidc.user.OidcUser;
//import org.springframework.security.oauth2.jwt.Jwt;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/authetication")
//public class AutheticationController {
//	
//    @GetMapping("/login")
//    public String login() {
//        
//        return "redirect:/oauth2/authorization/google";
//    }
//
//	@GetMapping("/perfil")
//	public String testeLoginAutenticado(@AuthenticationPrincipal OidcUser principal) throws IOException {
//		String idGoogue = principal.getName();
//		String nomeCompleto = principal.getFullName();
//		String email = principal.getEmail();
//		OidcIdToken idToken = principal.getIdToken();
//		String accesToken = principal.getAccessTokenHash();
//		String fotoURI = principal.getPicture();
//		System.out.println("id google: " + idGoogue);
//		System.out.println("nome completo: " + nomeCompleto);
//		System.out.println("email " + email);
//		System.out.println("idToken: " + idToken);
//		System.out.println("acestoken: " + accesToken);
//		System.out.println("foto de perfil: " + fotoURI);
//
//		String uri = "error";
//		uri = "/Admin/perfil";
//		uri = "/profissionalDeSaude/perfil";
//		uri = "/psicologo/perfil";
//		uri = "/servidor/perfil";
//		return uri;
//
//	}
//
//	@GetMapping("/login/jwt3")
//	String jwt(@AuthenticationPrincipal Jwt jwt) {
//
//		String x = String.format("""
//				Principal: %s\n
//				Email attribute: %s\n
//				JWT: %s\n
//				""", jwt.getClaims(), jwt.getClaim("email"), jwt.getTokenValue());
//
//		System.out.println("JWT: " + x);
//
//		return null;
//	}
//}
