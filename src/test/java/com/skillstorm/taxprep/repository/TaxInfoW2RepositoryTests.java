package com.skillstorm.taxprep.repository;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.skillstorm.taxprep.models.TaxInfoW2;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;

@DataJpaTest
class TaxInfoW2RepositoryTests {

    @Autowired
    private TaxInfoRepository repository;

    @MockBean
    private TaxInfoRepository mockRepository; 

    @Test
    void testGetByUserId() {
        TaxInfoW2 info1 = new TaxInfoW2();
        info1.setUserId(1L);
        List<TaxInfoW2> result = (List<TaxInfoW2>) repository.getByUserId(1L);

        // Assert the result
        assertEquals(null, result);
    }

}
