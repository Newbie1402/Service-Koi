package com.shopkoi.shopkoi.config;

import com.shopkoi.shopkoi.Service.Right;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomJwtDecoder jwtDecoder;

    private final String[] PublicEndpoints = {
            "/api/customers/create",
            "/api/staff/create",
            "/api/auth/login-staff",
            "/api/auth/login-customer",
            "/api/auth/logout-customer",
            "/api/auth/logout-staff",
            "/api/auth/introspect-customer",
            "/api/auth/introspect-staff",
            "/api/staff/create",
            "/api/auth/refreshtoken",
            "/api/roles/create",
            "/api/customers/me",
            "/api/bookings/create",
            "/api/feedback/create",

    };

    private final String[] PublicGetEndpoints = {
            "/api/staff",
            "/api/services",
            "/api/services/{id}",
            "/api/customers/me",
            "/api/bookings",
            "/api/booking/{id}",
            "/api/feedback",
    };

    private final String[] PublicPutEndpoints = {

            "/api/staff/update/{id}"
    };

    private final String[] AdminGetEndpoints = {
            "/api/customers",
            "/api/customers/{id}",
            "/api/staff/{id}",
            "/api/blog",
            "/api/blog/{id}",
            "/api/blogslug",
            "/api/feedback/{id}",
            "/api/roles",
            "/api/roles/{id}"
    };

    private final String[] AdminDeleteEndpoints = {
            "/api/customers/delete/{id}",
            "/api/staff/delete/{id}",
            "/api/blog/delete/{id}",
            "/api/blogslug/delete/{id}",
            "/api/bookings/delete/{id}",
            "/api/feedback/delete/{id}",
            "/api/roles/delete/{id}",
            "/api/services/delete/{id}"
    };

    private final String[] AdminPutEndpoints = {
            "/api/customers/update/{id}",
            "/api/staff/update/{id}",
            "/api/blog/update/{id}",
            "/api/blogslug/update/{id}",
            "/api/bookings/update/{id}",
            "/api/feedback/update/{id}",
            "/api/roles/update/{id}",
            "/api/services/update/{id}"
    };

    private final String[] AdminPostEndpoints = {
            "/api/customers/create",
            "/api/staff/create",
            "/api/blog/create",
            "/api/blogslug/create",
            "/api/roles/create",
            "/api/services/create",
            "/api/medicine/create"
    };

    @NonFinal
    protected static final String SIGNER_KEY = "bJAlGYJC+G5iUfD2OQv6u0fWXOeV67Dz0uz+O9BIlgOA1At7QEp/Zh9eqXUUoU+K\n";

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .authorizeHttpRequests(request ->
                        request.requestMatchers(HttpMethod.POST, PublicEndpoints).permitAll()
                                .requestMatchers(HttpMethod.GET, PublicGetEndpoints).permitAll()
                                .requestMatchers(HttpMethod.PUT, PublicPutEndpoints).permitAll()
                                .requestMatchers(HttpMethod.GET, AdminGetEndpoints).hasAnyAuthority("SCOPE_ADMIN")
                                .requestMatchers(HttpMethod.DELETE, AdminDeleteEndpoints).hasAnyAuthority("SCOPE_ADMIN")
                                .requestMatchers(HttpMethod.POST, AdminPostEndpoints).hasAnyAuthority("SCOPE_ADMIN")
                                .requestMatchers(HttpMethod.PUT, AdminPutEndpoints).hasAnyAuthority("SCOPE_ADMIN")
                                .anyRequest().authenticated())
                .oauth2ResourceServer(login ->
                        login.jwt(jwtConfigurer -> jwtConfigurer.decoder(jwtDecoder)))
                .csrf(httpSecurityCsrfConfigurer -> httpSecurityCsrfConfigurer.disable())
                .cors(); // Enable CORS support

        return httpSecurity.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000")); // Add allowed origins
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Add allowed methods
        configuration.setAllowedHeaders(List.of("Content-Type", "Authorization", "Content-Type", "Cache-Control", "Access-Control-Allow-Origin"));
        configuration.setAllowCredentials(true); // Allow cookies or authorization headers

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // Apply configuration globally
        return source;
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

    @Bean
    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder =
                http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder
                .inMemoryAuthentication()
                .withUser("admin").password(passwordEncoder().encode("1234")).roles("USER");
        return authenticationManagerBuilder.build();
    }
}