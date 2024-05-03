package com.skillstorm.taxprep.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.repository.TaxInfo1099Repository;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;
import com.skillstorm.taxprep.util.TaxBracketHelper;

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

    public CalculationService(DatabaseService dbS) {
        this.dbS = dbS;
    }

    @Transactional
    public String calculateTaxesOwed(Long userId) {
        TaxInfo userTaxInfo = taxInfoRepository.getById(userId);
        String status = userTaxInfo.getFilingStatus();
        JSONObject brackets = TaxBracketHelper.brackets();
        try
        {
            JSONArray statusBracket = (JSONArray) brackets.get(status);
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        

        return "";
    }

    public Double getIncomeById(Long userId) {
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
        // System.out.println("income:" + income.get() + "/ incomew2:" + incomesW2.get()
        // + "/ income1099:" + incomes1099.get());
        return sum;
    }

    public Double getDeductionsById(Long userId) {
        Double sum = 0.0;
        Optional<Double> specialDeductions = taxInfoRepository.findSpecialDeductionsByUserId(userId);
        if (specialDeductions.isPresent())
            sum += specialDeductions.get();

        return sum;
    }

    public Double getWithheldById(Long userId) {
        Double sum = 0.0;
        Optional<Double> withheldW2 = taxInfoW2Repository.getAllWithheldByUserId(userId);
        if (withheldW2.isPresent())
            sum += withheldW2.get();
        Optional<Double> withheld1099 = taxInfo1099Repository.getAllWithheldByUserId(userId);
        if (withheld1099.isPresent())
            sum += withheld1099.get();
        return sum;
    }
}
