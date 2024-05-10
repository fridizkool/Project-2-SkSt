package com.skillstorm.taxprep.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.skillstorm.taxprep.models.AppUser;

@DataJpaTest
class UserRepositoryTests {

    @Autowired
    private UserRepository userRepository;

    @MockBean
    private UserRepository mockUserRepository;

    @Test
    void testFindByName() {
        AppUser user = new AppUser();
        user.setUsername("testUser");

        when(mockUserRepository.findByName("testUser")).thenReturn(user);

        AppUser result = userRepository.findByName("testUser");
        assertNotNull(result); 
        assertEquals("testUser", result.getUsername());
    }

    @Test
    void testFindByUsername() {
        AppUser user = new AppUser();
        user.setUsername("testUser");

        when(mockUserRepository.findByUsername("testUser")).thenReturn(Optional.of(user));
        Optional<AppUser> result = userRepository.findByUsername("testUser");

        assertTrue(result.isPresent()); 
        assertEquals("testUser", result.get().getUsername()); 
    }
}