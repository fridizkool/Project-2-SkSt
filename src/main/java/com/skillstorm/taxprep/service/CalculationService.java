package com.skillstorm.taxprep.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprep.models.TaxInfo;

import static com.skillstorm.taxprep.util.TaxBracketHelper.returnTaxesOwedOn;

@Service
public class CalculationService {
    
    @Autowired
    private DatabaseService dbS;


    public CalculationService(DatabaseService dbS) {
        this.dbS = dbS;
    }

    @Transactional
    public String calculateTaxesOwed(Long user_id) {
        TaxInfo userTaxInfo = dbS.getTaxInfoFor(user_id);

        //TODO Finish calculations
        Double taxesOwed = returnTaxesOwedOn(userTaxInfo.getIncome());

        return "Calculated taxes: " + taxesOwed;
    }

}


