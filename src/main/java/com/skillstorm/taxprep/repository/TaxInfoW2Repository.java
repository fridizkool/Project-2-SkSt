package com.skillstorm.taxprep.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprep.models.TaxInfoW2;

@Repository
public interface TaxInfoW2Repository extends JpaRepository<TaxInfoW2, Long> {
}
