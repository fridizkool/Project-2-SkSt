package com.skillstorm.taxprep.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.TaxInfo;
import com.skillstorm.taxprep.models.User;
import com.skillstorm.taxprep.service.CalculationService;
import com.skillstorm.taxprep.service.DatabaseService;
import com.skillstorm.taxprep.service.TestService;

@RestController
public class WebController {
    @Autowired
    private TestService s;


    @Autowired
    private DatabaseService dbS;

    @Autowired
    private CalculationService cS;

    @GetMapping("/api/users")
    public List<User> getUsers() {
        return s.getUsers();
    }

    @GetMapping("/api/taxInfo")
    public List<TaxInfo> getTaxes() {
        return s.getTaxes();
    }

    //TODO On entering page as existing user, populate page with existing data

    //TODO Use spring security to get current user, and set that userinfo to taxInfo user_id field
    @PostMapping("/taxinfo")
    public ResponseEntity<String> processTaxInfo(@RequestBody TaxInfo taxInfo) {

        dbS.submit(taxInfo);
                
        return new ResponseEntity<>("TAXES OWED", HttpStatus.OK);
    }

    @GetMapping("/calculateTaxesOwed")
    public ResponseEntity<String> calculateTaxesOwed(@RequestParam Long userId) {
        String x = cS.calculateTaxesOwed(userId);
        return new ResponseEntity<>(x, HttpStatus.OK);
    }

}
