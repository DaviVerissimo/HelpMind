
package com.helpmind.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Value("${config.frontend.uri}")
	private String URI;

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http.authorizeHttpRequests(authorizeConfig -> {
			authorizeConfig.requestMatchers("/curso/**").permitAll();
			authorizeConfig.requestMatchers("/authetication/**").permitAll();
			authorizeConfig.requestMatchers("/material/allMaterial").permitAll();
			authorizeConfig.requestMatchers("/file/files/**").permitAll();
			authorizeConfig.anyRequest().authenticated();
		}).oauth2Login(Customizer.withDefaults()).oauth2ResourceServer(config -> {
			config.jwt(Customizer.withDefaults());
		})
				 .cors(Customizer.withDefaults()) // Configuração CORS
				.build();
	}

}
