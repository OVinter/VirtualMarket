package com.example.VirtualMarket.AdminPackage;

import com.example.VirtualMarket.VisitorPackage.Visitor;
import lombok.NonNull;

import javax.persistence.Entity;

@Entity
public class Admin extends Visitor {

    @NonNull
    private String adminPhoneNumber;
    @NonNull
    private String adminPassword;


    public Admin(String adminPhoneNumber, String adminPassword) {
        super();
        this.adminPhoneNumber = adminPhoneNumber;
        this.adminPassword = adminPassword;
    }

    public Admin(Long id, String adminPhoneNumber, String adminPassword) {
        super(id);
        this.adminPhoneNumber = adminPhoneNumber;
        this.adminPassword = adminPassword;
    }

    public Admin() {
        super();
    }

    public String getAdminPhoneNumber() {
        return adminPhoneNumber;
    }

    public void setAdminPhoneNumber(String adminPhoneNumber) {
        this.adminPhoneNumber = adminPhoneNumber;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "adminPhoneNumber='" + adminPhoneNumber + '\'' +
                ", adminPassword='" + adminPassword + '\'' +
                ", ID=" + ID +
                '}';
    }
}
