package com.skillstorm.taxprep.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tax_info_w2")
public class TaxInfoW2 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private AppUser user;

    @Column(name = "employer_id_b")
    private Long employerId;

    @Column(name = "employer_information_c")
    private String employerInformation;

    @Column(name = "control_number_d")
    private Long controlNumber;

    @Column(name = "income_1")
    private Long income;

    @Column(name = "withheld_federal_2")
    private Double withheldFederal;

    @Column(name = "social_security_3")
    private Double socialSecurity;

    @Column(name = "withheld_ss_4")
    private Double withheldSS;

    @Column(name = "medicare_5")
    private Double medicare;

    @Column(name = "withheld_medicare_6")
    private Double withheldMedicare;

    @Column(name = "social_security_tips_7")
    private Double socialSecurityTips;

    @Column(name = "allocated_tips_8")
    private Double allocatedTips;

    @Column(name = "dependent_care_10")
    private Double dependantCare;

    @Column(name = "nonqualified_plan_11")
    private String nonqualifiedPlan;

    @Column(name = "deferrals_12")
    private String deferrals;

    @Column(name = "statutory_13")
    private boolean statutory;

    @Column(name = "retirement_13")
    private boolean retirement;

    @Column(name = "sick_pay_13")
    private boolean sickPay;

    @Column(name = "other_14")
    private String other;

    public TaxInfoW2() {
    }

    public TaxInfoW2(Long id, AppUser user, Long employerId, String employerInformation, Long controlNumber,
            Long income, Double withheldFederal, Double socialSecurity, Double withheldSS, Double medicare,
            Double withheldMedicare, Double socialSecurityTips, Double allocatedTips, Double dependantCare,
            String nonqualifiedPlan, String defferals, boolean statutory, boolean retirement, boolean sickPay,
            String other) {
        this.id = id;
        this.user = user;
        this.employerId = employerId;
        this.employerInformation = employerInformation;
        this.controlNumber = controlNumber;
        this.income = income;
        this.withheldFederal = withheldFederal;
        this.socialSecurity = socialSecurity;
        this.withheldSS = withheldSS;
        this.medicare = medicare;
        this.withheldMedicare = withheldMedicare;
        this.socialSecurityTips = socialSecurityTips;
        this.allocatedTips = allocatedTips;
        this.dependantCare = dependantCare;
        this.nonqualifiedPlan = nonqualifiedPlan;
        this.deferrals = defferals;
        this.statutory = statutory;
        this.retirement = retirement;
        this.sickPay = sickPay;
        this.other = other;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser user) {
        this.user = user;
    }

    public Long getEmployerId() {
        return employerId;
    }

    public void setEmployerId(Long employerId) {
        this.employerId = employerId;
    }

    public String getEmployerInformation() {
        return employerInformation;
    }

    public void setEmployerInformation(String employerInformation) {
        this.employerInformation = employerInformation;
    }

    public Long getControlNumber() {
        return controlNumber;
    }

    public void setControlNumber(Long controlNumber) {
        this.controlNumber = controlNumber;
    }

    public Long getIncome() {
        return income;
    }

    public void setIncome(Long income) {
        this.income = income;
    }

    public Double getWithheldFederal() {
        return withheldFederal;
    }

    public void setWithheldFederal(Double withheldFederal) {
        this.withheldFederal = withheldFederal;
    }

    public Double getSocialSecurity() {
        return socialSecurity;
    }

    public void setSocialSecurity(Double socialSecurity) {
        this.socialSecurity = socialSecurity;
    }

    public Double getWithheldSS() {
        return withheldSS;
    }

    public void setWithheldSS(Double withheldSS) {
        this.withheldSS = withheldSS;
    }

    public Double getMedicare() {
        return medicare;
    }

    public void setMedicare(Double medicare) {
        this.medicare = medicare;
    }

    public Double getWithheldMedicare() {
        return withheldMedicare;
    }

    public void setWithheldMedicare(Double withheldMedicare) {
        this.withheldMedicare = withheldMedicare;
    }

    public Double getSocialSecurityTips() {
        return socialSecurityTips;
    }

    public void setSocialSecurityTips(Double socialSecurityTips) {
        this.socialSecurityTips = socialSecurityTips;
    }

    public Double getAllocatedTips() {
        return allocatedTips;
    }

    public void setAllocatedTips(Double allocatedTips) {
        this.allocatedTips = allocatedTips;
    }

    public Double getDependantCare() {
        return dependantCare;
    }

    public void setDependantCare(Double dependantCare) {
        this.dependantCare = dependantCare;
    }

    public String getNonqualifiedPlan() {
        return nonqualifiedPlan;
    }

    public void setNonqualifiedPlan(String nonqualifiedPlan) {
        this.nonqualifiedPlan = nonqualifiedPlan;
    }

    public String getDeferrals() {
        return deferrals;
    }

    public void setDeferrals(String defferals) {
        this.deferrals = defferals;
    }

    public boolean isStatutory() {
        return statutory;
    }

    public void setStatutory(boolean statutory) {
        this.statutory = statutory;
    }

    public boolean isRetirement() {
        return retirement;
    }

    public void setRetirement(boolean retirement) {
        this.retirement = retirement;
    }

    public boolean isSickPay() {
        return sickPay;
    }

    public void setSickPay(boolean sickPay) {
        this.sickPay = sickPay;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }

}
