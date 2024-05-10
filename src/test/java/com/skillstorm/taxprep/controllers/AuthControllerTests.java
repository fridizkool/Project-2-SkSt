package com.skillstorm.taxprep.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.ReviewModel;
import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.repository.TaxInfo1099Repository;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;
import com.skillstorm.taxprep.service.DatabaseService;
import com.skillstorm.taxprep.service.CalculationService;
import com.skillstorm.taxprep.service.UserService;
import org.springframework.security.core.Authentication;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.security.core.Authentication;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthControllerTests {

    
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DatabaseService databaseService;

    @Mock
    private CalculationService calculationService;

    @Mock
    private UserService userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        AppUser user = new AppUser();
        user.setId(1L);
        user.setUsername("username");
        Mockito.when(userService.loadUserByUsername(Mockito.anyString())).thenReturn(user);

    }

    @Test
    void testReturnAuthStatusAuthenticated() throws Exception {
        Authentication auth = new UsernamePasswordAuthenticationToken("username", "password");

        AppUser user = new AppUser();
        user.setUsername("username");
        user.setRole("ROLE_USER");
        when(userService.loadUserByUsername("username")).thenReturn(user);

        mockMvc.perform(get("/auth/status").with(authentication(auth)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.authenticated").value(false));
    }


    @Test
    @WithMockUser(roles = "ADMIN")
    void testAdminHello() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/admin/hello"))
        .andExpect(status().isOk());
    }

    @Test
    void testReturnAuthStatusNotAuthenticated() throws Exception {
        mockMvc.perform(get("/auth/status"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.authenticated").value(false))
                .andExpect(jsonPath("$.userRole").value("NONE"));
    }


    @Test
    @WithMockUser(roles = "NONE")
    void testRegisterAdmin() throws Exception {
        AppUser user = new AppUser();
        user.setUsername("newUser");

        mockMvc.perform(post("/auth/register/user")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is4xxClientError());
    }

    @Test
    @WithMockUser(roles = "NONE")
    void testRegisterUser() throws Exception {
        AppUser user = new AppUser();
        user.setUsername("newUser");

        mockMvc.perform(post("/auth/register/user")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is4xxClientError());
    }

     @Test
    void testResetUserPasswordBadRequest() throws Exception {
        Authentication auth = new UsernamePasswordAuthenticationToken("username", "password");

        AppUser user = new AppUser();
        user.setUsername("username");

        mockMvc.perform(put("/user/password")
                .with(authentication(auth))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is4xxClientError());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testUserHello() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/user/hello"))
        .andExpect(status().isOk());
    }
}
