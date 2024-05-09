package com.skillstorm.taxprep.models;

import java.text.DecimalFormat;

public class ReviewModel {
    Double incomeW2;
    Double income1099;
    Double incomePersonal;
    Double withheldW2;
    Double withheld1099;
    Double withheldPersonal;
    Double deductions;
    Double tax;
    Double taxReturn;
    String effective;

    public ReviewModel() {
        this.deductions = 0.0;
        this.income1099 = 0.0;
        this.incomePersonal = 0.0;
        this.incomeW2 = 0.0;
        this.withheld1099 = 0.0;
        this.withheldPersonal = 0.0;
        this.withheldW2 = 0.0;
        this.tax = 0.0;
        this.taxReturn = 0.00;
        this.effective = "%00.00";
    }

    public ReviewModel(Double incomeW2, Double income1099, Double incomePersonal, Double withheldW2,
            Double withheld1099, Double withheldPersonal, Double deductions, Double tax, Double taxReturn,
            String effective) {
        this.incomeW2 = incomeW2;
        this.income1099 = income1099;
        this.incomePersonal = incomePersonal;
        this.withheldW2 = withheldW2;
        this.withheld1099 = withheld1099;
        this.withheldPersonal = withheldPersonal;
        this.deductions = deductions;
        this.tax = tax;
        this.taxReturn = taxReturn;
        this.effective = effective;
    }

    public Double getIncomeW2() {
        return incomeW2;
    }

    public void setIncomeW2(Double incomeW2) {
        this.incomeW2 = incomeW2;
    }

    public Double getIncome1099() {
        return income1099;
    }

    public void setIncome1099(Double income1099) {
        this.income1099 = income1099;
    }

    public Double getIncomePersonal() {
        return incomePersonal;
    }

    public void setIncomePersonal(Double incomePersonal) {
        this.incomePersonal = incomePersonal;
    }

    public Double getWithheldW2() {
        return withheldW2;
    }

    public void setWithheldW2(Double withheldW2) {
        this.withheldW2 = withheldW2;
    }

    public Double getWithheld1099() {
        return withheld1099;
    }

    public void setWithheld1099(Double withheld1099) {
        this.withheld1099 = withheld1099;
    }

    public Double getWithheldPersonal() {
        return withheldPersonal;
    }

    public void setWithheldPersonal(Double withheldPersonal) {
        this.withheldPersonal = withheldPersonal;
    }

    public Double getDeductions() {
        return deductions;
    }

    public void setDeductions(Double deductions) {
        this.deductions = deductions;
    }

    public Double getTaxReturn() {
        return taxReturn;
    }

    public void setTaxReturn(Double taxReturn) {
        this.taxReturn = taxReturn;
    }

    public Double getTax() {
        return tax;
    }

    public void setTax(Double tax) {
        this.tax = tax;
        DecimalFormat f = new DecimalFormat("##.00");
        Double total = income1099 + incomeW2 + incomePersonal - deductions;
        setEffective(f.format(100.0 * tax / total) + "%");
    }

    public String getEffective() {
        return effective;
    }

    public void setEffective(String effective) {
        this.effective = effective;
    }

    @Override
    public String toString() {
        return "ReviewModel [incomeW2=" + incomeW2 + ", income1099=" + income1099 + ", incomePersonal=" + incomePersonal
                + ", withheldW2=" + withheldW2 + ", withheld1099=" + withheld1099 + ", withheldPersonal="
                + withheldPersonal + ", deductions=" + deductions + ", tax=" + tax + ", taxReturn=" + taxReturn
                + ", effective=" + effective + "]";
    }

}
