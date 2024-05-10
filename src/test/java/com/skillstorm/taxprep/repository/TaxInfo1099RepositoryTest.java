package com.skillstorm.taxprep.repository;

import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.skillstorm.taxprep.models.TaxInfo1099;

@DataJpaTest
class TaxInfo1099RepositoryTests {

    @Autowired
    private TaxInfo1099Repository repository;

    @MockBean
    private TaxInfo1099Repository mockRepository; // Only required if you need to mock methods

    @Test
    void testGetByUserId() {
        TaxInfo1099 info1 = new TaxInfo1099();
        info1.setUserId(1L);

        repository.saveAll(Arrays.asList(info1)); // Add more objects as needed
        List<TaxInfo1099> result = repository.getByUserId(1L);

        assertEquals(0, result.size()); // Assert expected size of the result list
    }

}
