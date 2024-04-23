package com.skillstorm.taxprep.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tax_info")
public class TaxInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(nullable = false)
    private Double income;

    @Column(name = "self_employed_income")
    private Double selfEmployedIncome;

    @Column(name = "filing_status", nullable = false)
    private String filingStatus;

    @Column(name = "withheld_federal")
    private Double withheldFederal;

    @Column(name = "withheld_ss")
    private Double withheldSS;

    @Column(name = "withheld_medicare")
    private Double withheldMedicare;

    private Integer dependents;

    @Column(name = "student_status")
    private Boolean studentStatus;

    @Column(name = "special_deductions")
    private Double specialDeductions;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getIncome() {
        return income;
    }

    public void setIncome(Double income) {
        this.income = income;
    }

    public Double getSelfEmployedIncome() {
        return selfEmployedIncome;
    }

    public void setSelfEmployedIncome(Double selfEmployedIncome) {
        this.selfEmployedIncome = selfEmployedIncome;
    }

    public String getFilingStatus() {
        return filingStatus;
    }

    public void setFilingStatus(String filingStatus) {
        this.filingStatus = filingStatus;
    }

    public Double getWithheldFederal() {
        return withheldFederal;
    }

    public void setWithheldFederal(Double withheldFederal) {
        this.withheldFederal = withheldFederal;
    }

    public Double getWithheldSS() {
        return withheldSS;
    }

    public void setWithheldSS(Double withheldSS) {
        this.withheldSS = withheldSS;
    }

    public Double getWithheldMedicare() {
        return withheldMedicare;
    }

    public void setWithheldMedicare(Double withheldMedicare) {
        this.withheldMedicare = withheldMedicare;
    }

    public Integer getDependents() {
        return dependents;
    }

    public void setDependents(Integer dependents) {
        this.dependents = dependents;
    }

    public Boolean getStudentStatus() {
        return studentStatus;
    }

    public void setStudentStatus(Boolean studentStatus) {
        this.studentStatus = studentStatus;
    }

    public Double getSpecialDeductions() {
        return specialDeductions;
    }

    public void setSpecialDeductions(Double specialDeductions) {
        this.specialDeductions = specialDeductions;
    }

    @Override
    public String toString() {
        return "TaxInfo{" +
                "userId=" + userId +
                ", user=" + user +
                ", income=" + income +
                ", selfEmployedIncome=" + selfEmployedIncome +
                ", filingStatus='" + filingStatus + '\'' +
                ", withheldFederal=" + withheldFederal +
                ", withheldSS=" + withheldSS +
                ", withheldMedicare=" + withheldMedicare +
                ", dependents=" + dependents +
                ", studentStatus=" + studentStatus +
                ", specialDeductions=" + specialDeductions +
                '}';
    }
}
