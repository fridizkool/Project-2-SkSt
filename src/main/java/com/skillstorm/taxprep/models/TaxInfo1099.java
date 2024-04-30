package com.skillstorm.taxprep.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tax_info_1099")
public class TaxInfo1099 {
    @Id
    @Column(name = "user_id")
    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private AppUser user;

    @Column(name = "payer_information")
    private String payerInformation;

    @Column(name = "payer_tin")
    private Long payerTin;

    @Column(name = "account_number")
    private Long accountNumber;

    @Column(name = "rents_1")
    private Double rents;

    @Column(name = "royalties_2")
    private Double royalties;

    @Column(name = "other_income_3")
    private Double otherIncome;

    @Column(name = "withheld_federal_4")
    private Double withheldFederal;

    @Column(name = "fishing_boat_5")
    private Double fishingBoat;

    @Column(name = "healthcare_6")
    private Double healthcare;

    @Column(name = "over_5000_7")
    private boolean over5000;

    @Column(name = "substitute_8")
    private Double substitute;

    @Column(name = "crop_insurance_9")
    private Double cropInsurance;

    @Column(name = "attorney_10")
    private Double attorney;

    @Column(name = "fish_purchased_11")
    private Double fishPurchased;

    @Column(name = "deferrals_12")
    private Double deferrals;

    @Column(name = "fatca_13")
    private boolean fatca;

    @Column(name = "golden_parachute_14")
    private Double goldenParachute;

    @Column(name = "nonqualified_deferrals_15")
    private Double nonqualifiedDeferrals;

    public TaxInfo1099() {
    }

    public TaxInfo1099(Long userId, AppUser user, String payerInformation, Long payerTin, Long accountNumber,
            Double rents, Double royalties, Double otherIncome, Double withheldFederal, Double fishingBoat,
            Double healthcare, boolean over5000, Double substitute, Double cropInsurance, Double attorney,
            Double fishPurchased, Double deferrals, boolean fatca, Double goldenParachute,
            Double nonqualifiedDeferrals) {
        this.userId = userId;
        this.user = user;
        this.payerInformation = payerInformation;
        this.payerTin = payerTin;
        this.accountNumber = accountNumber;
        this.rents = rents;
        this.royalties = royalties;
        this.otherIncome = otherIncome;
        this.withheldFederal = withheldFederal;
        this.fishingBoat = fishingBoat;
        this.healthcare = healthcare;
        this.over5000 = over5000;
        this.substitute = substitute;
        this.cropInsurance = cropInsurance;
        this.attorney = attorney;
        this.fishPurchased = fishPurchased;
        this.deferrals = deferrals;
        this.fatca = fatca;
        this.goldenParachute = goldenParachute;
        this.nonqualifiedDeferrals = nonqualifiedDeferrals;
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

    public String getPayerInformation() {
        return payerInformation;
    }

    public void setPayerInformation(String payerInformation) {
        this.payerInformation = payerInformation;
    }

    public Long getPayerTin() {
        return payerTin;
    }

    public void setPayerTin(Long payerTin) {
        this.payerTin = payerTin;
    }

    public Long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public Double getRents() {
        return rents;
    }

    public void setRents(Double rents) {
        this.rents = rents;
    }

    public Double getRoyalties() {
        return royalties;
    }

    public void setRoyalties(Double royalties) {
        this.royalties = royalties;
    }

    public Double getOtherIncome() {
        return otherIncome;
    }

    public void setOtherIncome(Double otherIncome) {
        this.otherIncome = otherIncome;
    }

    public Double getWithheldFederal() {
        return withheldFederal;
    }

    public void setWithheldFederal(Double withheldFederal) {
        this.withheldFederal = withheldFederal;
    }

    public Double getFishingBoat() {
        return fishingBoat;
    }

    public void setFishingBoat(Double fishingBoat) {
        this.fishingBoat = fishingBoat;
    }

    public Double getHealthcare() {
        return healthcare;
    }

    public void setHealthcare(Double healthcare) {
        this.healthcare = healthcare;
    }

    public boolean isOver5000() {
        return over5000;
    }

    public void setOver5000(boolean over5000) {
        this.over5000 = over5000;
    }

    public Double getSubstitute() {
        return substitute;
    }

    public void setSubstitute(Double substitute) {
        this.substitute = substitute;
    }

    public Double getCropInsurance() {
        return cropInsurance;
    }

    public void setCropInsurance(Double cropInsurance) {
        this.cropInsurance = cropInsurance;
    }

    public Double getAttorney() {
        return attorney;
    }

    public void setAttorney(Double attorney) {
        this.attorney = attorney;
    }

    public Double getFishPurchased() {
        return fishPurchased;
    }

    public void setFishPurchased(Double fishPurchased) {
        this.fishPurchased = fishPurchased;
    }

    public Double getDeferrals() {
        return deferrals;
    }

    public void setDeferrals(Double deferrals) {
        this.deferrals = deferrals;
    }

    public boolean isFatca() {
        return fatca;
    }

    public void setFatca(boolean fatca) {
        this.fatca = fatca;
    }

    public Double getGoldenParachute() {
        return goldenParachute;
    }

    public void setGoldenParachute(Double goldenParachute) {
        this.goldenParachute = goldenParachute;
    }

    public Double getNonqualifiedDeferrals() {
        return nonqualifiedDeferrals;
    }

    public void setNonqualifiedDeferrals(Double nonqualifiedDeferrals) {
        this.nonqualifiedDeferrals = nonqualifiedDeferrals;
    }

    
}
