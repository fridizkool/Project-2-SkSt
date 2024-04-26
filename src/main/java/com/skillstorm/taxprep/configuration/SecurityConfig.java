package com.skillstorm.taxprep.configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
            //TODO Consider CSRF turning back on and only disable to necessary endpoints
            .csrf((csrf) -> csrf.
                disable())
            // TODO Assign appropriate authorization requirements
			.authorizeHttpRequests((authorize) -> authorize
                .requestMatchers("/").permitAll()
                .requestMatchers("/*").permitAll()
                .requestMatchers("/auth/*").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .requestMatchers("/user/**").hasAnyRole("ADMIN", "USER")
			)
			.formLogin(formLogin -> formLogin
                .loginPage("/login")
                .defaultSuccessUrl("/") // Specify default success URL after successful login
                .failureUrl("/login?error=true") // Specify URL to redirect after failed login
                .permitAll()
            )
            .rememberMe(Customizer.withDefaults())
            .logout(
                logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
            );
            
		return http.build();
	}

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/assets/**");
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

}

