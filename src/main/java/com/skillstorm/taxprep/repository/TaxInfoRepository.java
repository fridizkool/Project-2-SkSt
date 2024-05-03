package com.skillstorm.taxprep.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprep.models.TaxInfo;

@Repository
public interface TaxInfoRepository extends JpaRepository<TaxInfo, Long> {

    @Query("select sum(t.supplementalIncome) from TaxInfo t where t.userId = ?1")
    public Optional<Double> getSupplementalIncomeByUserId(Long UserId);

    @Query("select sum(t.specialDeductions) from TaxInfo t where t.userId = ?1")
    public Optional<Double> findSpecialDeductionsByUserId(Long userId);
}
