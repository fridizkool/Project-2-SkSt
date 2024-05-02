package com.skillstorm.taxprep.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found."));
        return user;
    }

    public void registerUser(AppUser user) {
        Optional<AppUser> foundUser = userRepository.findByUsername(user.getUsername());
        if(foundUser.isPresent()) {
            throw new RuntimeException("User with that username already exists.");
        };

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
        userRepository.save(user);
    }

    public void registerAdmin(AppUser user) {

        Optional<AppUser> foundUser = userRepository.findByUsername(user.getUsername());
        if(foundUser.isPresent()) {
            throw new RuntimeException("User with that username already exists.");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_ADMIN");
        userRepository.save(user);
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")     // security advice - works like @Before 
    public long countAllUsers() {
        return userRepository.count();
    }

}
