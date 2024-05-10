package com.skillstorm.taxprep.controllers;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.service.UserService;

@SpringBootTest
@AutoConfigureMockMvc
class UserApiControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    @WithMockUser(roles = "NONE")

    void testGetUserProfile() throws Exception {
        AppUser user = new AppUser();
        user.setUsername("username");
        when(userService.loadUserByUsername("username")).thenReturn(user);

        mockMvc.perform(get("/user"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testUpdateUserProfileSuccess() {
        AppUser userUpdate = new AppUser();
        userUpdate.setFirstName("John");
        userUpdate.setLastName("Doe");

        try {
            mockMvc.perform(put("/user")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(userUpdate)))
                    .andExpect(status().isOk());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @WithMockUser(roles = "NONE")
    void testUpdateUserProfileFailure() {
        AppUser userUpdate = new AppUser();
        userUpdate.setFirstName("John");
        userUpdate.setLastName("Doe");

        try {
            mockMvc.perform(put("/user")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(userUpdate)))
                    .andExpect(status().isBadRequest());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // I guess this works? TODO
    private String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
