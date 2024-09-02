package com.diep.SecurityApp;

import org.springframework.beans.factory.annotation.*;
import org.springframework.context.annotation.*;
import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
//@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true)
public class SecurityAppConfig {

//	@Autowired
//	private UserDetailsService userDetailsService;

//	connect with database to get user data
//	without Oauth2 ------------------------------------
//	@Bean
//	public AuthenticationProvider authProvider() {
//		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//		provider.setUserDetailsService(this.userDetailsService);
//		provider.setPasswordEncoder(new BCryptPasswordEncoder());
//		return provider;
//	}
//
//	@Bean
//	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//		http.authorizeHttpRequests((authorize) -> authorize.dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
//				.requestMatchers("/private/**").authenticated()
//				.anyRequest().permitAll());
//		http.formLogin(login -> login.loginPage("/login").defaultSuccessUrl("/private", true).permitAll());
//		http.logout(logout -> logout.logoutUrl("/logout").logoutSuccessUrl("/logout-success").permitAll());
//		http.csrf(csrf -> csrf.disable());
//
//		return http.build();
//	}

//	with Oauth2 -------------------------------------

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		return http.authorizeHttpRequests(auth -> {
			auth.requestMatchers("/private/**").authenticated();
			auth.anyRequest().permitAll();
		}).oauth2Login(withDefaults()).formLogin(withDefaults()).logout(withDefaults()).build();
	}
}
