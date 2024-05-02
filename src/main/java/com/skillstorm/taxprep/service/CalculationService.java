package com.skillstorm.taxprep.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.models.TaxInfo1099;
import com.skillstorm.taxprep.repository.TaxInfo1099Repository;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;

import static com.skillstorm.taxprep.util.TaxBracketHelper.returnTaxesOwedOn;

import java.util.List;
import java.util.Optional;

@Service
public class CalculationService {

    @Autowired
    private DatabaseService dbS;

    @Autowired
    private TaxInfoW2Repository taxInfoW2Repository;

    @Autowired
    TaxInfo1099Repository taxInfo1099Repository;

    @Autowired
    TaxInfoRepository taxInfoRepository;

    @Value("classpath:/static/tax_brackets.json")
    Resource bracketResource;

    public CalculationService(DatabaseService dbS) {
        this.dbS = dbS;
    }

    @Transactional
    public String calculateTaxesOwed(Long user_id) {
        TaxInfo userTaxInfo = dbS.getTaxInfoFor(user_id);

        // TODO Finish calculations
        Double taxesOwed = returnTaxesOwedOn(1.0);

        return "Calculated taxes: " + taxesOwed;
    }

    public Double getIncomeByID(Long userId) {
        Double sum = 0.0;
        Optional<Double> incomesW2 = taxInfoW2Repository.getAllIncomeByUserId(userId);
        if (incomesW2.isPresent())
            sum += incomesW2.get();
        Optional<Double> incomes1099 = taxInfo1099Repository.getAllIncomeByUserId(userId);
        if (incomes1099.isPresent())
            sum += incomes1099.get();
        Optional<Double> income = taxInfoRepository.getSupplementalIncomeByUserId(userId);
        if (income.isPresent())
            sum += income.get();
        System.out.println("income:" + income.get() + "/ incomew2:" + incomesW2.get() + "/ income1099:" + incomes1099.get());
        return sum;
    }

}
