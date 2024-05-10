package com.skillstorm.taxprep.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.skillstorm.taxprep.repository.TaxInfo1099Repository;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;
import com.skillstorm.taxprep.models.TaxInfo;

class CalculationServiceTests {

    @Mock
    private DatabaseService dbService;

    @Mock
    private TaxInfoW2Repository taxInfoW2Repository;

    @Mock
    private TaxInfo1099Repository taxInfo1099Repository;

    @Mock
    private TaxInfoRepository taxInfoRepository;

    @InjectMocks
    private CalculationService calculationService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCalculateTaxes() throws Exception {
        Long userId = 1L;
        TaxInfo taxInfo = new TaxInfo();
        taxInfo.setFilingStatus("SINGLE");
        when(dbService.selectMiscByUserId(userId)).thenReturn(taxInfo);
        Double result = calculationService.calculateTaxes(userId);

        assertEquals(0.0, result); 
    }

    @Test
    void testGetIncomeById() {
        Long userId = 1L;
        when(taxInfoW2Repository.getAllIncomeByUserId(userId)).thenReturn(Optional.of(50000.0));
        when(taxInfo1099Repository.getAllIncomeByUserId(userId)).thenReturn(Optional.of(10000.0));
        when(taxInfoRepository.getSupplementalIncomeByUserId(userId)).thenReturn(Optional.of(2000.0));
    }

}
