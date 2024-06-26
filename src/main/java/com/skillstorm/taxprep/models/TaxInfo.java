package com.skillstorm.taxprep.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(insertable = false, updatable = false, name = "user_id", referencedColumnName = "id")
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
    private Boolean isTakingStandardDeduction;

    @Column(name = "special_deductions")
    private Double specialDeductions;

    public TaxInfo() {
    }

    public TaxInfo(Long id, Long userId, AppUser user, Double supplementalIncome, Double additionalWithholdings,
            String filingStatus, Integer dependents, Boolean studentStatus, Boolean isTakingStandardDeduction,
            Double specialDeductions) {
        this.id = id;
        this.userId = userId;
        this.user = user;
        this.supplementalIncome = supplementalIncome;
        this.additionalWithholdings = additionalWithholdings;
        this.filingStatus = filingStatus;
        this.dependents = dependents;
        this.studentStatus = studentStatus;
        this.isTakingStandardDeduction = isTakingStandardDeduction;
        this.specialDeductions = specialDeductions;
    }



    public TaxInfo(AppUser u, TaxInfo taxInfo) {
        //TODO Auto-generated constructor stub
        this.userId = u.getId();
        this.user = u;
        this.supplementalIncome = taxInfo.supplementalIncome;
        this.additionalWithholdings = taxInfo.additionalWithholdings;
        this.filingStatus = taxInfo.filingStatus;
        this.dependents = taxInfo.dependents;
        this.studentStatus = taxInfo.studentStatus;
        this.isTakingStandardDeduction = taxInfo.isTakingStandardDeduction;
        this.specialDeductions = taxInfo.specialDeductions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Double getAdditionalWithholdings() {
        return additionalWithholdings;
    }

    public void setAdditionalWithholdings(Double additionalWithholdings) {
        this.additionalWithholdings = additionalWithholdings;
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

    public Boolean getIsTakingStandardDeduction() {
        return isTakingStandardDeduction;
    }

    public void setIsTakingStandardDeduction(Boolean isTakingStandardDeduction) {
        this.isTakingStandardDeduction = isTakingStandardDeduction;
    }

    public Double getSpecialDeductions() {
        return specialDeductions;
    }

    public void setSpecialDeductions(Double specialDeductions) {
        this.specialDeductions = specialDeductions;
    }

    @Override
    public String toString() {
        return "TaxInfo [id=" + id + ", userId=" + userId + ", supplementalIncome="
                + supplementalIncome + ", additionalWithholdings=" + additionalWithholdings + ", filingStatus="
                + filingStatus + ", dependents=" + dependents + ", studentStatus=" + studentStatus
                + ", isTakingStandardDeduction=" + isTakingStandardDeduction + ", specialDeductions="
                + specialDeductions + "]";
    }

    
}
