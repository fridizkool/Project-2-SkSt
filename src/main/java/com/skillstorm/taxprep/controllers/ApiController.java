package com.skillstorm.taxprep.controllers;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.authenticator.SpnegoAuthenticator.AuthenticateAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.models.TaxInfo1099;
import com.skillstorm.taxprep.models.TaxInfoW2;
import com.skillstorm.taxprep.service.CalculationService;
import com.skillstorm.taxprep.service.DatabaseService;
import com.skillstorm.taxprep.service.UserService;

@RestController
public class ApiController {
    @Autowired
    private DatabaseService dbS;

    @Autowired
    private CalculationService cS;

    @Autowired
    UserService userService;

    @GetMapping("/calculateTaxesOwed")
    public ResponseEntity<String> calculateTaxesOwed(Authentication auth) {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());
        String x = cS.calculateTaxesOwed(u.getId());
        return new ResponseEntity<>(x, HttpStatus.OK);
    }

    @GetMapping("/income")
    public ResponseEntity<Double> getIncome(Authentication auth, @RequestParam Long userid)
    {
        // AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());

        return ResponseEntity.ok(cS.getIncomeById(userid));
    }

    @GetMapping("/deductions")
    public ResponseEntity<Double> getDeductions(Authentication auth)
    {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());

        return ResponseEntity.ok(cS.getDeductionsById(u.getId()));
    }

    @GetMapping("/withheld")
    public ResponseEntity<Double> getWitheld(Authentication auth)
    {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());

        return ResponseEntity.ok(cS.getWithheldById(u.getId()));
    }


    @PostMapping("/submitW2")
    public ResponseEntity<String> submitW2(Authentication auth, @RequestBody TaxInfoW2 info)
    {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());
        TaxInfoW2 newInfo = new TaxInfoW2(u, info);
        dbS.submitW2(newInfo);
        return ResponseEntity.ok("asdf");
    }

    
    @PostMapping("/submitW2List")
    public ResponseEntity<String> submitW2List(Authentication auth, @RequestBody List<TaxInfoW2> taxforms)
    {
        List<TaxInfoW2> newList = new ArrayList();
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());
        for (TaxInfoW2 info : taxforms){
            TaxInfoW2 newInfo = new TaxInfoW2(u, info);
            newList.add(newInfo);
        }
        dbS.saveListOfW2Forms(newList, u.getId());
        return ResponseEntity.ok("Successful push");
    }

    @GetMapping("/getAllW2")
    public ResponseEntity<List<TaxInfoW2>> getAllW2(Authentication auth) {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());

        try {
            List<TaxInfoW2> newList = dbS.selectAllW2ByUserId(u.getId());
            return ResponseEntity.ok(newList);
        } catch (Exception e){
            return ResponseEntity.ok(null);
        }
    }
    
       
    @PostMapping("/submit1099List")
    public ResponseEntity<String> submit1099List(Authentication auth, @RequestBody List<TaxInfo1099> taxforms)
    {
        List<TaxInfo1099> newList = new ArrayList();
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());
        for (TaxInfo1099 info : taxforms){
            TaxInfo1099 newInfo = new TaxInfo1099(u, info);
            newList.add(newInfo);
        }
        dbS.saveListOf1099Forms(newList, u.getId());
        return ResponseEntity.ok("Successful push");
    }

    @GetMapping("/getAll1099")
    public ResponseEntity<List<TaxInfo1099>> getAll1099(Authentication auth) {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());

        try {
            List<TaxInfo1099> newList = dbS.selectAll1099ByUserId(u.getId());
            return ResponseEntity.ok(newList);
        } catch (Exception e){
            return ResponseEntity.ok(null);
        }
    }


       
    @PostMapping("/submitMisc")
    public ResponseEntity<String> submitMisc(Authentication auth, @RequestBody TaxInfo taxInfo)
    {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());
        TaxInfo t = new TaxInfo(u, taxInfo);

        dbS.saveMisc(t, u.getId());
        return ResponseEntity.ok("Successful push");
    }

    @GetMapping("/getMisc")
    public ResponseEntity<TaxInfo> getMisc(Authentication auth) {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());
        try {
            TaxInfo t = dbS.selectMiscByUserId(u.getId());

            if(t == null){
                return ResponseEntity.ok(new TaxInfo());
            } else {
                return ResponseEntity.ok(t);
            }
        } catch (Exception e){
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping("/getReview")
    public ResponseEntity<TaxInfo> getReview(Authentication auth) {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());
        try {
            TaxInfo t = dbS.selectMiscByUserId(u.getId());

            if(t == null){
                return ResponseEntity.ok(new TaxInfo());
            } else {
                return ResponseEntity.ok(t);
            }
        } catch (Exception e){
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping("/adminUsers")
    public ResponseEntity<List<AppUser>> getUsersForAdmin(Authentication auth)
    {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());

        if (u.getRole().equals("ROLE_ADMIN")){
            List<AppUser> l = userService.getAllUsers();
            List<AppUser> sendList = new ArrayList<>();
            for (AppUser user : l){
                if (user.getUsername().equals(auth.getName())) continue;
                sendList.add(user.returnRedactedUser(user));
            }
            return ResponseEntity.ok(sendList);

        }

        return ResponseEntity.ok(null);
    }

    @DeleteMapping("/deleteUser/{username}")
    public ResponseEntity<String> deleteUsersByAdmin(Authentication auth, @PathVariable String username)
    {
        AppUser u = (AppUser) userService.loadUserByUsername(auth.getName());
        if (u.getRole().equals("ROLE_ADMIN")){
            userService.deleteUser(username);
            return ResponseEntity.ok("Deleted user");
        }
        return ResponseEntity.ok("Did not delete user");
    }
}
