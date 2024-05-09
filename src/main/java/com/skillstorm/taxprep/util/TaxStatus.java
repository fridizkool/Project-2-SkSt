package com.skillstorm.taxprep.util;

public class TaxStatus
{
    String status;
    Double deduction;
    TaxBracket brackets[]; 

    public TaxStatus(String status, Double deduction, TaxBracket[] brackets)
    {
        this.status = status;
        this.deduction = deduction;
        this.brackets = brackets;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public TaxBracket[] getBrackets() {
        return brackets;
    }

    public void setBrackets(TaxBracket[] brackets) {
        this.brackets = brackets;
    }

    public Double getDeduction() {
        return deduction;
    }

    public void setDeduction(Double deduction) {
        this.deduction = deduction;
    }
    
}
