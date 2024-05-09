package com.skillstorm.taxprep.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import com.skillstorm.taxprep.models.ReviewModel;
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

    private Map<String, TaxStatus> getBrackets() {
        if (taxBrackets == null) { // lazy load
            Resource bracketResource = context.getResource("classpath:static/tax_brackets.json");
            TypeToken<Map<String, TaxStatus>> mapType = new TypeToken<Map<String, TaxStatus>>() {
            };
            Gson taxJson = new Gson();
            try {
                taxBrackets = taxJson.fromJson(bracketResource.getContentAsString(Charset.defaultCharset()),
                        mapType);
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

        return taxBrackets;
    };

    public CalculationService(DatabaseService dbS) {
        this.dbS = dbS;
    }

    @Transactional
    public Double calculateTaxesOwed(Long userId) {
        try {
            Double tax = calculateTaxes(userId);
            tax -= getWithheldById(userId);
            return tax;
        } catch (Exception e) {
            e.printStackTrace();
            return 0.0;
        }

    }

    public Double calculateTaxes(Long userId)
    {
        TaxInfo userTaxInfo;
        try {
            userTaxInfo = dbS.selectMiscByUserId(userId);
            String status = userTaxInfo.getFilingStatus();

            Double sum = 0.0;
            TaxStatus t = getBrackets().get(status);
            TaxBracket[] x = t.getBrackets();
            sum += getIncomeById(userId);
            sum -= getDeductionsById(userId, t);
            return doProgressiveTax(sum, x);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return 0.0;
        }
    }

    private Double doProgressiveTax(Double taxable, TaxBracket[] brackets) {
        Double tax = 0.0;
        for (TaxBracket bracket : brackets) {
            if (taxable <= 0)
                break;
            Double taxedAtBracket = Math.min(bracket.getMax() - bracket.getMin() + 1, taxable); // clamp taxable for
                                                                                                // this bracket
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

    public Double getDeductionsById(Long userId, TaxStatus status) {
        Double sum = 0.0;
        Optional<Boolean> standard = taxInfoRepository.findStandardDeductionByUserId(userId);
        if (standard.isPresent() && standard.get())
            return status.getDeduction();
        Optional<Double> specialDeductions = taxInfoRepository.findSpecialDeductionsByUserId(userId);
        if (specialDeductions.isPresent())
            sum += specialDeductions.get();

        return sum;
    }

    public Double getDeductionsById(Long userId) {
        Double sum = 0.0;
        TaxStatus status = getBrackets().get(taxInfoRepository.getByUserId(userId).getFilingStatus());
        Optional<Boolean> standard = taxInfoRepository.findStandardDeductionByUserId(userId);
        Optional<Double> specialDeductions = taxInfoRepository.findSpecialDeductionsByUserId(userId);
        if (standard.isPresent() && standard.get())
            sum += status.getDeduction();
        else if (specialDeductions.isPresent())
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
        Optional<Double> additional = taxInfoRepository.findAdditionalWithholdingsByUserId(userId);
        if (additional.isPresent())
            sum += additional.get();
        return sum;
    }

    public ReviewModel getReview(Long userId) {
        ReviewModel review = new ReviewModel();
        Optional<Double> incomesW2 = taxInfoW2Repository.getAllIncomeByUserId(userId);
        if (incomesW2.isPresent())
            review.setIncomeW2(incomesW2.get());
        Optional<Double> incomes1099 = taxInfo1099Repository.getAllIncomeByUserId(userId);
        if (incomes1099.isPresent())
            review.setIncome1099(incomes1099.get());
        Optional<Double> income = taxInfoRepository.getSupplementalIncomeByUserId(userId);
        if (income.isPresent())
            review.setIncomePersonal(income.get());
        Optional<Double> withheldW2 = taxInfoW2Repository.getAllWithheldByUserId(userId);
        if (withheldW2.isPresent())
            review.setWithheldW2(withheldW2.get());
        Optional<Double> withheld1099 = taxInfo1099Repository.getAllWithheldByUserId(userId);
        if (withheld1099.isPresent())
            review.setWithheld1099(withheld1099.get());
        Optional<Double> additional = taxInfoRepository.findAdditionalWithholdingsByUserId(userId);
        if (additional.isPresent())
            review.setWithheldPersonal(additional.get());
        review.setDeductions(getDeductionsById(userId));
        review.setTax(calculateTaxes(userId));
        review.setTaxReturn(calculateTaxesOwed(userId));
        return review;
    }
}
