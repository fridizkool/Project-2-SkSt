package com.skillstorm.taxprep.util;

import java.io.IOException;
import java.io.InputStream;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;

// Calculates exact progressive income tax based on 2024 tax brackets
public class TaxBracketHelper {

    @Value("classpath:/static/tax_brackets.json")
    static Resource bracketResource;

    /**
     * TODO a static method that returns the cumulative progressive tax on the given amount. References tax brackets from the tax-brackets.json file. 
     * @param number the number to be returned
     * @return the same number as the input parameter
     */
    public static Double returnTaxesOwedOn(Double taxableIncome) {
        return taxableIncome + 1;
    }

    public static JSONObject brackets()
    {
        try {
            JSONObject bracket = new JSONObject(bracketResource.getInputStream());
            return bracket;
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    
}
