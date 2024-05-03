package com.skillstorm.taxprep.util;

public class TaxBracket {
    double min;
    double max;
    double rate;

    public TaxBracket(double min, double max, double rate)
    {
        this.min = min;
        this.max = max;
        this.rate = rate;
    }

    public double getMin() {
        return min;
    }

    public void setMin(double min) {
        this.min = min;
    }

    public double getMax() {
        return max;
    }

    public void setMax(double max) {
        this.max = max;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }
    
}
