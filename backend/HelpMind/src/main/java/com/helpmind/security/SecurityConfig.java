//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    private CustomOAuth2UserService customOAuth2UserService;
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//            .cors().and().csrf().disable()
//            .authorizeRequests()
//                .antMatchers("/public/**").permitAll()
//                .antMatchers("/servidor/**").hasRole("SERVIDOR")
//                .antMatchers("/discente/**").hasRole("DISCENTE")
//                .anyRequest().authenticated()
//                .and()
//            .oauth2Login()
//                .loginPage("/login")
//                .defaultSuccessUrl("/dashboard")
//                .userInfoEndpoint()
//                .userService(customOAuth2UserService) // Substitua pelo seu serviço personalizado OAuth2UserService
//                .and()
//            .and()
//            .logout()
//                .logoutSuccessUrl("/login")
//                .permitAll();
//    }
//}
