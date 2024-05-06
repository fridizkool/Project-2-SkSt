package com.skillstorm.taxprep.controllers;

import org.apache.catalina.authenticator.SpnegoAuthenticator.AuthenticateAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprep.models.AppUser;
import com.skillstorm.taxprep.models.TaxInfo;
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
        // newInfo.setId(u.getId());
        // System.out.println(newInfo);
        // newInfo.setUser(u);

        dbS.submitW2(newInfo);
        return ResponseEntity.ok("asdf");
    }

}
