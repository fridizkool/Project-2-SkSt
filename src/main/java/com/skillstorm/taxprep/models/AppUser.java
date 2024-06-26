package com.skillstorm.taxprep.models;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class AppUser implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "role")
    private String role; // USER, ADMIN, MOD, etc.

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column
    private String initial;

    @Column
    private String suffix;

    @Column
    private String address;

    @Column(name = "telephone_number")
    private String telephoneNumber;

    @Column(name = "social_security")
    private String ssn;

    @OneToOne(targetEntity = TaxInfo.class, mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private TaxInfo taxInfo;
    
    @OneToMany(targetEntity = TaxInfoW2.class, mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<TaxInfoW2> taxInfoW2;

    @OneToMany(targetEntity = TaxInfo1099.class, mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<TaxInfo1099> taxInfo1099;

    public AppUser() {

    }

    public AppUser(Long id, String username, String password, String role, String firstName, String lastName,
            String initial, String suffix, String address, String telephoneNumber, String ssn) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.initial = initial;
        this.suffix = suffix;
        this.address = address;
        this.telephoneNumber = telephoneNumber;
        this.ssn = ssn;
    }

    
    public AppUser(AppUser u) {
        this.id = u.id;
        this.username = u.username;
        this.password = u.password;
        this.role = u.role;
        this.firstName = u.firstName;
        this.lastName = u.lastName;
        this.initial = u.initial;
        this.suffix = u.suffix;
        this.address = u.address;
        this.telephoneNumber = u.telephoneNumber;
        this.ssn = u.ssn;
    }

    public AppUser returnRedactedUser(AppUser u){
        AppUser tempUser = new AppUser(u);
        tempUser.setPassword("");
        tempUser.setSsn("");
        return tempUser;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        SimpleGrantedAuthority userRole = new SimpleGrantedAuthority(role);
        authorities.add(userRole);

        return authorities; // USER -> USER_ROLE
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getInitial() {
        return initial;
    }

    public void setInitial(String initial) {
        this.initial = initial;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public TaxInfo getTaxInfo() {
        return taxInfo;
    }

    public void setTaxInfo(TaxInfo taxInfo) {
        this.taxInfo = taxInfo;
    }

    public Set<TaxInfoW2> getTaxInfoW2() {
        return taxInfoW2;
    }

    public void setTaxInfoW2(Set<TaxInfoW2> taxInfoW2) {
        this.taxInfoW2 = taxInfoW2;
    }

    public Set<TaxInfo1099> getTaxInfo1099() {
        return taxInfo1099;
    }

    public void setTaxInfo1099(Set<TaxInfo1099> taxInfo1099) {
        this.taxInfo1099 = taxInfo1099;
    }

    
}
