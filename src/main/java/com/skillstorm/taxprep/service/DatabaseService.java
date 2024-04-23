package com.skillstorm.taxprep.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.repository.TaxInfoRepository;

@Service
public class DatabaseService {

    @Autowired
    private TaxInfoRepository taxInfoRepo;

    public DatabaseService(TaxInfoRepository taxInfoRepo) {
        this.taxInfoRepo = taxInfoRepo;
    }

    @Transactional
    public void submit(TaxInfo taxInfo) {
        taxInfoRepo.save(taxInfo);
    }

    public TaxInfo getTaxInfoFor(Long user_id) {
        try{
            return taxInfoRepo.getById(user_id);
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    
}
