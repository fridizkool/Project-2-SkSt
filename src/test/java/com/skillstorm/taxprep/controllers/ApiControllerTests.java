package com.skillstorm.taxprep.controllers;



import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.ReviewModel;
import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.repository.TaxInfo1099Repository;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;
import com.skillstorm.taxprep.service.DatabaseService;
import com.skillstorm.taxprep.service.CalculationService;
import com.skillstorm.taxprep.service.UserService;


public class ApiControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DatabaseService databaseService;

    @MockBean
    private CalculationService calculationService;

    @MockBean
    private UserService userService;

    @Test
    public void testCalculateTaxesOwed() throws Exception {
        // Mock authentication
        Authentication auth = new UsernamePasswordAuthenticationToken("username", "password");

        // Mock userService.loadUserByUsername()
        AppUser user = new AppUser();
        user.setId(1L);
        user.setUsername("username");
        Mockito.when(userService.loadUserByUsername(Mockito.anyString())).thenReturn(user);

        // Mock calculationService.getReview()
        ReviewModel reviewModel = new ReviewModel();
        Mockito.when(calculationService.getReview(Mockito.anyLong())).thenReturn(reviewModel);

        // Perform GET request
        mockMvc.perform(MockMvcRequestBuilders.get("/calculateTaxesOwed")
                .principal(auth))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }


    @Test
    void testDeleteUsersByAdmin() {

    }

    @Test
    void testGetAll1099() {

    }

    @Test
    void testGetAllW2() {

    }

    @Test
    void testGetDeductions() {

    }

    @Test
    void testGetIncome() {

    }

    @Test
    void testGetMisc() {

    }

    @Test
    void testGetReview() {

    }

    @Test
    void testGetUsersForAdmin() {

    }

    @Test
    void testGetWitheld() {

    }

    @Test
    void testSubmit1099List() {

    }

    @Test
    void testSubmitMisc() {

    }

    @Test
    void testSubmitW2() {

    }

    @Test
    void testSubmitW2List() {

    }
}
