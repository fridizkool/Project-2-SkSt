package com.skillstorm.taxprep.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tax_info")
public class TaxInfo {
    @Id
    @Column(name = "user_id")
    private Long userId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonBackReference
    private AppUser user;

    @Column(name = "supplemental_income")
    private Double supplementalIncome;

    @Column(name = "additional_withholdings")
    private Double additionalWithholdings;

    @Column(name = "filing_status", nullable = false)
    private String filingStatus;

    @Column
    private Integer dependents;

    @Column(name = "student_status")
    private Boolean studentStatus;

    @Column(name = "standard_deduction")
    private Double isTakingStandardDeduction;

    @Column(name = "special_deductions")
    private Double specialDeductions;

    public TaxInfo() {
    }

    public TaxInfo(Long userId, AppUser user, Double supplementalIncome, String filingStatus, Integer dependents,
            Boolean studentStatus, Double specialDeductions) {
        this.userId = userId;
        this.user = user;
        this.supplementalIncome = supplementalIncome;
        this.filingStatus = filingStatus;
        this.dependents = dependents;
        this.studentStatus = studentStatus;
        this.specialDeductions = specialDeductions;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser user) {
        this.user = user;
    }

    public Double getSupplementalIncome() {
        return supplementalIncome;
    }

    public void setSupplementalIncome(Double supplementalIncome) {
        this.supplementalIncome = supplementalIncome;
    }

    public String getFilingStatus() {
        return filingStatus;
    }

    public void setFilingStatus(String filingStatus) {
        this.filingStatus = filingStatus;
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
        return "TaxInfo [userId=" + userId + ", user=" + user + ", supplementalIncome=" + supplementalIncome
                + ", filingStatus=" + filingStatus + ", dependents=" + dependents + ", studentStatus=" + studentStatus
                + ", specialDeductions=" + specialDeductions + "]";
    }

    public Double getAdditionalWithholdings() {
        return additionalWithholdings;
    }

    public void setAdditionalWithholdings(Double additionalWithholdings) {
        this.additionalWithholdings = additionalWithholdings;
    }

    public Double getIsTakingStandardDeduction() {
        return isTakingStandardDeduction;
    }

    public void setIsTakingStandardDeduction(Double isTakingStandardDeduction) {
        this.isTakingStandardDeduction = isTakingStandardDeduction;
    }
}
