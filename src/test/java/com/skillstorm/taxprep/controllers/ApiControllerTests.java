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
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.ReviewModel;
import com.skillstorm.taxprep.service.DatabaseService;
import com.skillstorm.taxprep.service.CalculationService;
import com.skillstorm.taxprep.service.UserService;

@SpringBootTest
@AutoConfigureMockMvc
public class ApiControllerTests {

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
    @WithMockUser(roles = "NONE")
    public void testCalculateTaxesOwed() throws Exception {
        ReviewModel reviewModel = new ReviewModel();
        Mockito.when(calculationService.getReview(Mockito.anyLong())).thenReturn(reviewModel);

        mockMvc.perform(MockMvcRequestBuilders.get("/calculateTaxesOwed"))
            .andExpect(status().is3xxRedirection()); // Ensure successful login redirects
    }

    @Test
    @WithMockUser(roles = "NONE")
    void testDeleteUsersByAdmin() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/deleteUser/user"))
        .andExpect(status().is4xxClientError());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testGetAll1099() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/getAll1099"))
        .andExpect(status().is3xxRedirection());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testGetAllW2() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/getAllW2"))
        .andExpect(status().is3xxRedirection());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testGetDeductions() {
        try {
            mockMvc.perform(MockMvcRequestBuilders.get("/getDeductions"))
            .andExpect(status().is4xxClientError());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @WithMockUser(roles = "USER")
    void testGetIncome() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/getIncome"))
        .andExpect(status().is4xxClientError());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testGetMisc() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/getMisc"))
        .andExpect(status().is3xxRedirection());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testGetReview() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/getReview"))
        .andExpect(status().is3xxRedirection());
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    void testGetUsersForAdmin() {
        try {
            mockMvc.perform(MockMvcRequestBuilders.get("/adminUsers"))
            .andExpect(status().is3xxRedirection());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @WithMockUser(roles = "USER")
    void testGetWitheld() {
        try {
            mockMvc.perform(MockMvcRequestBuilders.get("/getWitheld"))
            .andExpect(status().is4xxClientError());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @WithMockUser(roles = "USER")
    void testSubmit1099List() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/submit1099List"))
        .andExpect(status().is4xxClientError());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testSubmitMisc() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/submitMisc"))
        .andExpect(status().is4xxClientError());
    }

    @Test
    @WithMockUser(roles = "USER")
    void testSubmitW2() {
        try {
            mockMvc.perform(MockMvcRequestBuilders.get("/submitW2"))
            .andExpect(status().is4xxClientError());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @WithMockUser(roles = "USER")
    void testSubmitW2List() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/submitW2List"))
        .andExpect(status().is4xxClientError());
    }
}
