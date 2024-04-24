package com.skillstorm.taxprep.configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests((authorize) -> authorize
                .requestMatchers("/").permitAll()
                .requestMatchers("/*").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .requestMatchers("/user/**").hasAnyRole("ADMIN", "USER")
                // .anyRequest().authenticated()
			)
			.formLogin(Customizer.withDefaults())
            //TODO https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/index.html
            // Get login form to work, then get default logout page to load or try the POST logout
            // https://docs.spring.io/spring-security/reference/servlet/authentication/logout.html
			// .formLogin(formLogin -> formLogin
            //     .loginPage("/login")
            //     .permitAll()
            // )
            .rememberMe(Customizer.withDefaults());
            // .logout(
            //     logout -> logout
            //     .logoutUrl("/logout")
            //     .logoutSuccessUrl("/")
            //     .invalidateHttpSession(true)
            //     .deleteCookies("JSESSIONID")
            // );
            
		return http.build();
	}

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/assets/**", "/login");
    }


    //TODO Uncomment once switched to database storage
    // @Bean
    // public PasswordEncoder passwordEncoder() {
    //     return new BCryptPasswordEncoder(10);
    // }

    //TODO Switch from in-memory to datastore 
    @Bean
    public UserDetailsService users() {
        // The builder will ensure the passwords are encoded before saving in memory
        UserBuilder users = User.withDefaultPasswordEncoder();
        UserDetails user = users
            .username("user")
            .password("password")
            .roles("USER")
            .build();
        UserDetails admin = users
            .username("admin")
            .password("password")
            .roles("USER", "ADMIN")
            .build();
        return new InMemoryUserDetailsManager(user, admin);
    }

}

