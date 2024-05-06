package com.skillstorm.taxprep.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.models.TaxInfo1099;
import com.skillstorm.taxprep.models.TaxInfoW2;
import com.skillstorm.taxprep.repository.TaxInfo1099Repository;
import com.skillstorm.taxprep.repository.TaxInfoRepository;
import com.skillstorm.taxprep.repository.TaxInfoW2Repository;
import com.skillstorm.taxprep.repository.UserRepository;

@Service
public class DatabaseService {

    @Autowired
    private TaxInfoRepository taxInfoRepo;

    @Autowired
    private TaxInfoW2Repository taxInfoW2Repo;

    @Autowired
    private TaxInfo1099Repository taxInfo1099Repo;

    @Autowired
    private UserRepository userRepo;


    public DatabaseService(TaxInfoRepository taxInfoRepo) {
        this.taxInfoRepo = taxInfoRepo;
    }

    @Transactional
    public void submit(TaxInfo taxInfo) {
        taxInfoRepo.save(taxInfo);
    }

    public TaxInfo getTaxInfoFor(Long user_id) {    //wont work that way
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

    public TaxInfoW2 submitW2(TaxInfoW2 info)
    {
        return taxInfoW2Repo.save(info);
    }

    public TaxInfoW2 updateW2(TaxInfoW2 info, Long id)
    {
        info.setId(id);
        return taxInfoW2Repo.save(info);
    }

    public List<TaxInfoW2> getAllTaxInfoW2s()
    {
        return taxInfoW2Repo.findAll();
    }

    public List<TaxInfoW2> getTaxInfoW2ByUser(Long userId)
    {
        try{
            return taxInfoW2Repo.getByUserId(userId);
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public TaxInfo1099 submit1099(TaxInfo1099 info)
    {
        // AppUser user = userRepo.getById(info.getUserId());
        // info.setUser(user);
        return taxInfo1099Repo.save(info);
    }

    public TaxInfo1099 update1099(TaxInfo1099 info, Long id)
    {
        info.setId(id);
        return taxInfo1099Repo.save(info);
    }

    public List<TaxInfo1099> getAllTaxInfo1099s()
    {
        return taxInfo1099Repo.findAll();
    }

    public List<TaxInfo1099> getTaxInfo1099ByUser(Long userId)
    {
        try{
            return taxInfo1099Repo.getByUserId(userId);
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public void saveListOfW2Forms(List<TaxInfoW2> newList) {
        //delete existing W2 records
        
        //insert list of items
        for (TaxInfoW2 i : newList){
            taxInfoW2Repo.save(i);
        }
    }
}
