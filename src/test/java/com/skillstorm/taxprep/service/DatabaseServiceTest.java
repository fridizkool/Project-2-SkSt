package com.skillstorm.taxprep.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.skillstorm.taxprep.models.TaxInfoW2;
import com.skillstorm.taxprep.repository.TaxInfo1099Repository;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;
import com.skillstorm.taxprep.repository.UserRepository;
import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.TaxInfo;

class DatabaseServiceTests {

    @Mock
    private TaxInfoRepository taxInfoRepository;

    @Mock
    private TaxInfoW2Repository taxInfoW2Repository;

    @Mock
    private TaxInfo1099Repository taxInfo1099Repository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private DatabaseService databaseService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testSubmit() {
        TaxInfo taxInfo = new TaxInfo();
        when(taxInfoRepository.save(taxInfo)).thenReturn(taxInfo);
        try {
            databaseService.submit(taxInfo);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void testGetUserByName() {
        String name = "testUser";
        AppUser result = databaseService.getUserByName(name);
        assertEquals(null, result);
    }
}
