package com.skillstorm.taxprep.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.repository.UserRepository;
import static org.mockito.Mockito.when;

import static org.junit.jupiter.api.Assertions.assertEquals;


class UserServiceTests {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testRegisterUser() {
        // Create a sample user
        AppUser user = new AppUser();
        user.setUsername("testUser");
        user.setPassword("password");
        when(userRepository.findByUsername("testUser")).thenReturn(Optional.empty());

        userService.registerUser(user);
    }

    @Test
    void testGetAllUsers() {
        // Create a list of sample users
        List<AppUser> users = new ArrayList<>();
        users.add(new AppUser());
        users.add(new AppUser());

        // Mock repository method behavior
        when(userRepository.findAll()).thenReturn(users);

        // Call the service method
        List<AppUser> result = userService.getAllUsers();

        // Assert the result
        assertEquals(users, result);
    }

    // Add tests for other methods as needed
}