package com.skillstorm.taxprep.util;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TaxStatusTests {

    @Test
    void testConstructorAndGetters() {
        TaxBracket[] brackets = {
            new TaxBracket(0, 10000, 0.1),
            new TaxBracket(10001, 20000, 0.2)
        };

        // create a TaxStatus instance
        TaxStatus taxStatus = new TaxStatus("Single", 1000.0, brackets);

        // contructor and getters
        assertEquals("Single", taxStatus.getStatus());
        assertEquals(1000.0, taxStatus.getDeduction());
        assertArrayEquals(brackets, taxStatus.getBrackets());
    }

    @Test
    void testSettersAndGetters() {
        TaxBracket[] brackets = new TaxBracket[0];
        TaxStatus taxStatus = new TaxStatus("", 0.0, brackets);

        taxStatus.setStatus("Married");
        assertEquals("Married", taxStatus.getStatus());

        taxStatus.setDeduction(2000.0);
        assertEquals(2000.0, taxStatus.getDeduction());

        TaxBracket[] newBrackets = {
            new TaxBracket(0, 20000, 0.1),
            new TaxBracket(20001, 40000, 0.2)
        };
        taxStatus.setBrackets(newBrackets);
        assertArrayEquals(newBrackets, taxStatus.getBrackets());
    }
}
