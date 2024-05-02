package com.skillstorm.taxprep.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprep.models.TaxInfoW2;
import java.util.List;
import com.skillstorm.taxprep.models.AppUser;


@Repository
public interface TaxInfoW2Repository extends JpaRepository<TaxInfoW2, Long> {
    public List<TaxInfoW2> getByUser(AppUser user);

    public List<TaxInfoW2> getByUserId(Long userId);
}
