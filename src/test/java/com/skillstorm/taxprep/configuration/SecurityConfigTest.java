package com.skillstorm.taxprep.configuration;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.*;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = SecurityConfig.class)
@WebAppConfiguration
public class SecurityConfigTest {
	@Autowired
	private WebApplicationContext context;

	private MockMvc mvc;

	@BeforeEach
    public void setup() {
        mvc = MockMvcBuilders
          .webAppContextSetup(context)
          .apply(springSecurity())
          .build();
    }

    @Test
    @WithMockUser(roles = "USER")
    public void testAdminRouteUnauthorizedForUser() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/admin"))
               .andExpect(MockMvcResultMatchers.status().isForbidden()); // Expect 403 Forbidden
    }

    @Test
    @WithMockUser(roles = "ADMIN") 
    public void testAdminRouteAccessibleForAdmin() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/admin"))
               .andExpect(MockMvcResultMatchers.status().isOk()); // Expect 200 OK
    }

    @Test
    @WithMockUser // Defaults to role "USER"
    public void testAdminRouteUnauthorizedForUserWithDefaultRole() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/admin"))
               .andExpect(MockMvcResultMatchers.status().isForbidden()); // Expect 403 Forbidden
    }

}


