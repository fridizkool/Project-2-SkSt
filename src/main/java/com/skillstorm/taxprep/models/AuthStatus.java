package com.skillstorm.taxprep.models;

public class AuthStatus {
    private boolean authenticated;
    private String userRole;

    // Constructors, getters, and setters
    public AuthStatus() {
        this.authenticated = false;
        this.userRole = "NONE";
    }

    public AuthStatus(boolean isAuthenticated, String userRole) {
        this.authenticated = isAuthenticated;
        this.userRole = userRole;
    }

    // Getters and setters
    public boolean isAuthenticated() {
        return authenticated;
    }

    public void setAuthenticated(boolean isAuthenticated) {
        authenticated = isAuthenticated;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }
}
