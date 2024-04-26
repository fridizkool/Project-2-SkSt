package com.skillstorm.taxprep.util;

// Calculates exact progressive income tax based on 2024 tax brackets
public class TaxBracketHelper {

    /**
     * TODO a static method that returns the cumulative progressive tax on the given amount. References tax brackets from the tax-brackets.json file. 
     * @param number the number to be returned
     * @return the same number as the input parameter
     */
    public static Double returnTaxesOwedOn(Double taxableIncome) {
        return taxableIncome + 1;
    }
}
