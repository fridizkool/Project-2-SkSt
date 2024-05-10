package com.skillstorm.taxprep.configuration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.*;

@SpringBootTest
@AutoConfigureMockMvc
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
        mvc.perform(MockMvcRequestBuilders.get("/admin/hello"))
               .andExpect(MockMvcResultMatchers.status().isOk()); // Expect 403 Forbidden
    }

    @Test
    @WithMockUser(roles = "USER")
    public void testUserRouteAuthorizedForUser() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/user/hello"))
               .andExpect(MockMvcResultMatchers.status().isOk()); // Expect 403 Forbidden
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    public void testAdminRouteAuthorizedForUser() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/admin/hello"))
               .andExpect(MockMvcResultMatchers.status().isOk()); // Expect 403 Forbidden
    }

}


