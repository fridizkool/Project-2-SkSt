package com.skillstorm.taxprep.controllers;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class MyControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testToFiling() throws Exception {
        mockMvc.perform(get("/filing"))
               .andExpect(status().isOk())
               .andExpect(view().name("forward:/"));
    }

    @Test
    void testToLogin() throws Exception {
        mockMvc.perform(get("/login"))
               .andExpect(status().isOk())
               .andExpect(view().name("forward:/"));
    }

    @Test
    void testToCreate() throws Exception {
        mockMvc.perform(get("/create"))
               .andExpect(status().isOk())
               .andExpect(view().name("forward:/"));
    }

    @Test
    void testToAccount() throws Exception {
        mockMvc.perform(get("/account"))
               .andExpect(status().isOk())
               .andExpect(view().name("forward:/"));
    }

    @Test
    void testToUsers() throws Exception {
        mockMvc.perform(get("/users"))
               .andExpect(status().isOk())
               .andExpect(view().name("forward:/"));
    }

    @Test
    void testToContentNotFound() throws Exception {
        mockMvc.perform(get("/404"))
               .andExpect(status().isOk())
               .andExpect(view().name("forward:/"));
    }

    @Test
    void testToInaccessibleViewPage() throws Exception {
        mockMvc.perform(get("/inaccessible"))
               .andExpect(status().isOk())
               .andExpect(view().name("forward:/"));
    }
}
