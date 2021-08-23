//package com.shane.todo.config;
//
////import com.shane.todo.services.MyUserDetailsService;
//import com.shane.todo.services.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
////@EnableWebSecurity
//public class SecurityConfigurer extends WebSecurityConfigurerAdapter {
////    @Autowired
////    private MyUserDetailsService myUserDetailsService;
//
//    @Autowired
//    private UserService userService;
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        super.configure(auth);
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/user")
//                .hasAnyRole("USER")
//                .antMatchers("/").permitAll()
//                .and().formLogin();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return NoOpPasswordEncoder.getInstance();
//    }
//}
