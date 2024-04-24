package com.skillstorm.taxprep.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.UserRepository;

@Service
public class DatabaseService {

    @Autowired
    private TaxInfoRepository taxInfoRepo;

    @Autowired
    private UserRepository userRepo;


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

    public AppUser getUserByName(String name) {
        try{
            return userRepo.findByName(name);
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    
}
