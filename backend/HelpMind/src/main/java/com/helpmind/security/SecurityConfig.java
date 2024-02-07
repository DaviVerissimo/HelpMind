
package com.helpmind.security;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter{

	@Value("${config.frontend.uri}")
	private String URI;
	
	  @Override
	  protected void configure(HttpSecurity http) throws Exception {
	    //http.requiresChannel(channel -> channel.anyRequest().requiresSecure());
	    http.authorizeRequests(authorize -> authorize.anyRequest().permitAll());
	    http.cors().configurationSource(corsConfigurationSource()).and().csrf().disable();
	  }

	  @Bean
	  CorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();
	    configuration.setAllowedOrigins(Arrays.asList(URI));
	    configuration.setAllowedMethods(Arrays.asList("*"));
	    configuration.setAllowedHeaders(Collections.singletonList("*"));
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	  }

//	@Bean
//	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//		return http.authorizeHttpRequests(authorizeConfig -> {
//			authorizeConfig.requestMatchers("/curso/**").permitAll();
//			authorizeConfig.requestMatchers("/authetication/**").permitAll();
//			authorizeConfig.requestMatchers("/material/allMaterial").permitAll();
//			authorizeConfig.requestMatchers("/file/files/**").permitAll();
//			authorizeConfig.anyRequest().authenticated();
//		}).oauth2Login(Customizer.withDefaults()).oauth2ResourceServer(config -> {
//			config.jwt(Customizer.withDefaults());
//		})
//				 .cors(Customizer.withDefaults()) // Configuração CORS
//				.build();
//	}

}
