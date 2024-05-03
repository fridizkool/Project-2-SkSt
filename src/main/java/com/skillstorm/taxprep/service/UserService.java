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


    public void resetUserPassword(String username, AppUser user_updated) {
        Optional<AppUser> foundUserOptional = userRepository.findByUsername(username);
        if (foundUserOptional.isPresent()) {
            // System.out.println("\n\n\n " + user_updated.getPassword() + "\n\n\n");
            AppUser foundUser = foundUserOptional.get();
            foundUser.setPassword(passwordEncoder.encode(user_updated.getPassword()));
            userRepository.save(foundUser);
            System.out.println(foundUser);
        } else {
            throw new RuntimeException("Could not reset password.");
        }
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
    public void updateUser(String user_name, AppUser user_update) {
        Optional<AppUser> foundUserOptional = userRepository.findByUsername(user_name);
        if (foundUserOptional.isPresent()) {
            AppUser foundUser = foundUserOptional.get();

            foundUser.setFirstName(user_update.getFirstName());
            foundUser.setLastName(user_update.getLastName());
            foundUser.setInitial(user_update.getInitial());
            foundUser.setSuffix(user_update.getSuffix());
            foundUser.setAddress(user_update.getAddress());

            // TODO For some reason SSN won't update. Fix schema first, then debug again. 
            foundUser.setSsn(user_update.getSsn());

            System.out.println(foundUser.getSsn());
        
            userRepository.save(foundUser);
        } else {
            throw new RuntimeException("User with that username does not exist.");
        }
    }

}
