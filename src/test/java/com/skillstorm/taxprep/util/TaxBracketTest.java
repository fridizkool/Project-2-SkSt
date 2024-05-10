package com.skillstorm.taxprep.util;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.skillstorm.taxprep.util.TaxBracket;

class TaxBracketTests {

    @Test
    void testConstructorAndGetters() {
        TaxBracket taxBracket = new TaxBracket(10000.0, 20000.0, 0.1);

        assertEquals(10000.0, taxBracket.getMin());
        assertEquals(20000.0, taxBracket.getMax());
        assertEquals(0.1, taxBracket.getRate());
    }

    @Test
    void testSettersAndGetters() {
        TaxBracket taxBracket = new TaxBracket(0.0, 0.0, 0.0);

        taxBracket.setMin(50000.0);
        assertEquals(50000.0, taxBracket.getMin());

        taxBracket.setMax(100000.0);
        assertEquals(100000.0, taxBracket.getMax());

        taxBracket.setRate(0.2);
        assertEquals(0.2, taxBracket.getRate());
    }
}
