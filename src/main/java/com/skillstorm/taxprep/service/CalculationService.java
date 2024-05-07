package com.skillstorm.taxprep.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.repository.TaxInfo1099Repository;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;
import com.skillstorm.taxprep.util.TaxBracket;
import com.skillstorm.taxprep.util.TaxStatus;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Map;
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

    @Autowired
    ApplicationContext context;

    private static Map<String, TaxStatus> taxBrackets = null;

    public CalculationService(DatabaseService dbS) {
        this.dbS = dbS;
    }

    @Transactional
    public String calculateTaxesOwed(Long userId) {
        try {
            TaxInfo userTaxInfo = dbS.selectMiscByUserId(userId);
            String status = userTaxInfo.getFilingStatus();
    
            if (taxBrackets == null) {  //lazy load
                Resource bracketResource = context.getResource("classpath:static/tax_brackets.json");
                TypeToken<Map<String, TaxStatus>> mapType = new TypeToken<Map<String, TaxStatus>>() {
                };
                Gson taxJson = new Gson();
                try {
                    taxBrackets = taxJson.fromJson(bracketResource.getContentAsString(Charset.defaultCharset()), mapType);
                } catch (JsonSyntaxException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                } catch (IOException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                } catch (Exception e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }
            double sum = 0.0;
            sum += getIncomeById(userId);
            sum -= getDeductionsById(userId);
            TaxStatus t = taxBrackets.get(status);
            TaxBracket[] x = t.getBrackets();
            Double tax = doProgressiveTax(sum, x);
            tax -= getWithheldById(userId);
    
    
            return "" + tax;
        } catch (Exception e){
            return "0";
        }
       
    }

    private Double doProgressiveTax(Double taxable, TaxBracket[] brackets)
    {
        Double tax = 0.0;
        for(TaxBracket bracket : brackets)
        {
            if(taxable <= 0)
                break;
            Double taxedAtBracket = Math.min(bracket.getMax() - bracket.getMin() + 1, taxable); //clamp taxable for this bracket
            tax += taxedAtBracket * bracket.getRate();
            taxable -= taxedAtBracket;
        }
        return tax;
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
