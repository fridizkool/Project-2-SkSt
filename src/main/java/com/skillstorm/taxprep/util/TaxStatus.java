package com.skillstorm.taxprep.util;

public class TaxStatus
{
    String status;
    TaxBracket brackets[]; 

    public TaxStatus(String status, TaxBracket[] brackets)
    {
        this.status = status;
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
    
}
