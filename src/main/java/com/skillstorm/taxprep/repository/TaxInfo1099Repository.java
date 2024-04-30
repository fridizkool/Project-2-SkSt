package com.skillstorm.taxprep.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprep.models.TaxInfo1099;

@Repository
public interface TaxInfo1099Repository extends JpaRepository<TaxInfo1099, Long> {
}
