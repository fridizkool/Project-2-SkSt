package com.skillstorm.taxprep.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprep.models.TaxInfo1099;

@Repository
public interface TaxInfo1099Repository extends JpaRepository<TaxInfo1099, Long> {

    List<TaxInfo1099> getByUserId(Long userId);

    @Query("select sum(t.otherIncome + t.rents + t.royalties + t.healthcare + t.cropInsurance + t.attorney + t.deferrals + t.nonqualifiedDeferrals) from TaxInfo1099 t where t.userId = ?1")
    public Optional<Double> getAllIncomeByUserId(Long userId);

    @Query("select sum(t.withheldFederal) from TaxInfo1099 t where t.userId = ?1")
    public Optional<Double> getAllWithheldByUserId(Long userId);

        //For deleting all records associated with this user
    @Modifying
    @Query("delete from TaxInfo1099 t where t.userId = ?1")
    public void deleteAllByUserId(Long userId);

    @Query("select t from TaxInfo1099 t where t.userId = ?1")
    public List<TaxInfo1099> selectAllByUserId(Long userId);
    
}
