package com.skillstorm.taxprep.repository;

import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.skillstorm.taxprep.models.TaxInfo;

@DataJpaTest
class TaxInfoRepositoryTests {

    @Autowired
    private TaxInfoRepository repository;

    @MockBean
    private TaxInfoRepository mockRepository; 

    @Test
    void testGetByUserId() {
        TaxInfo info1 = new TaxInfo();
        info1.setUserId(1L);

        repository.saveAll(Arrays.asList(info1));
        List<TaxInfo> result = (List<TaxInfo>) repository.getByUserId(1L);

        assertEquals(null, result); 
    }

}
