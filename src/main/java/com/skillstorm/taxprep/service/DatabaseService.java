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

    public TaxInfoW2 fixW2(TaxInfoW2 info)    //clamp to atleast 0 and sanitation
    {
        info.setDependentCare(Math.max(0.0, (info.getDependentCare() == null ? 0.0 : info.getDependentCare())));
        info.setIncome(Math.max(0.0, (info.getIncome() == null ? 0.0 : info.getIncome())));
        info.setAllocatedTips(Math.max(0.0, (info.getAllocatedTips() == null ? 0.0 : info.getAllocatedTips())));
        info.setMedicare(Math.max(0.0, (info.getMedicare() == null ? 0.0 : info.getMedicare())));
        info.setSocialSecurity(Math.max(0.0, (info.getSocialSecurity() == null ? 0.0 : info.getSocialSecurity())));
        info.setSocialSecurityTips(Math.max(0.0, (info.getSocialSecurityTips() == null ? 0.0 : info.getSocialSecurityTips())));
        info.setWithheldFederal(Math.max(0.0, (info.getWithheldFederal() == null ? 0.0 : info.getWithheldFederal())));
        info.setWithheldMedicare(Math.max(0.0, (info.getWithheldMedicare() == null ? 0.0 : info.getWithheldMedicare())));
        info.setWithheldSS(Math.max(0.0, (info.getWithheldSS() == null ? 0.0 : info.getWithheldSS())));
        return info;
    }

    public TaxInfo1099 submit1099(TaxInfo1099 info)
    {
        // AppUser user = userRepo.getById(info.getUserId());
        // info.setUser(user);
        info = fix1099(info);
        return taxInfo1099Repo.save(info);
    }

    public TaxInfo1099 update1099(TaxInfo1099 info, Long id)
    {
        info.setId(id);
        info = fix1099(info);
        return taxInfo1099Repo.save(info);
    }

    public TaxInfo1099 fix1099(TaxInfo1099 info)    //clamp to atleast 0 and sanitation
    {
        info.setAttorney(Math.max(0.0, (info.getAttorney() == null ? 0.0 : info.getAttorney())));
        info.setCropInsurance(Math.max(0.0, (info.getCropInsurance() == null ? 0.0 : info.getCropInsurance())));
        info.setDeferrals(Math.max(0.0, (info.getDeferrals() == null ? 0.0 : info.getDeferrals())));
        info.setFishPurchased(Math.max(0.0, (info.getFishPurchased() == null ? 0.0 : info.getFishPurchased())));
        info.setFishingBoat(Math.max(0.0, (info.getFishingBoat() == null ? 0.0 : info.getFishingBoat())));
        info.setGoldenParachute(Math.max(0.0, (info.getGoldenParachute() == null ? 0.0 : info.getGoldenParachute())));
        info.setHealthcare(Math.max(0.0, (info.getHealthcare() == null ? 0.0 : info.getHealthcare())));
        info.setNonqualifiedDeferrals(Math.max(0.0, (info.getNonqualifiedDeferrals() == null ? 0.0 : info.getNonqualifiedDeferrals())));
        info.setOtherIncome(Math.max(0.0, (info.getOtherIncome() == null ? 0.0 : info.getOtherIncome())));
        info.setRents(Math.max(0.0, (info.getRents() == null ? 0.0 : info.getRents())));
        info.setRoyalties(Math.max(0.0, (info.getRoyalties() == null ? 0.0 : info.getRoyalties())));
        info.setSubstitute(Math.max(0.0, (info.getSubstitute() == null ? 0.0 : info.getSubstitute())));
        info.setWithheldFederal(Math.max(0.0, (info.getWithheldFederal() == null ? 0.0 : info.getWithheldFederal())));
        return info;
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
    public void saveListOfW2Forms(List<TaxInfoW2> newList, Long userId) {
        //delete existing W2 records
            taxInfoW2Repo.deleteAllByUserId(userId);
        //insert list of items
        for (TaxInfoW2 i : newList){
            i = fixW2(i);
            taxInfoW2Repo.save(i);
        }
    }

    public List<TaxInfoW2> selectAllW2ByUserId(Long id) throws Exception {
        // TODO Auto-generated method stub
        try {
            return taxInfoW2Repo.selectAllByUserId(id);
        } catch (Exception e) {
            throw new Exception("Cannot select all W2's");
        }
    }

    @Transactional
    public void saveListOf1099Forms(List<TaxInfo1099> newList, Long userId) {
        //delete existing W2 records
        taxInfo1099Repo.deleteAllByUserId(userId);
        //insert list of items
        for (TaxInfo1099 i : newList){
            i = fix1099(i);
            taxInfo1099Repo.save(i);
        }
    }

    
    public List<TaxInfo1099> selectAll1099ByUserId(Long id) throws Exception {
        // TODO Auto-generated method stub
        try {
            return taxInfo1099Repo.selectAllByUserId(id);
        } catch (Exception e) {
            throw new Exception("Cannot select all W2's");
        }
    }

    public TaxInfo selectMiscByUserId(Long id) throws Exception {
        try {
            TaxInfo t = (TaxInfo) taxInfoRepo.getByUserId(id);
            return t;
        } catch (Exception e) {
            throw new Exception("Cannot get supplemental tax info");
        }
    }

    @Transactional
    public void saveMisc(TaxInfo taxInfo, Long id) {
        taxInfoRepo.deleteAllByUserId(id);
        taxInfoRepo.save(taxInfo);
    }

}
