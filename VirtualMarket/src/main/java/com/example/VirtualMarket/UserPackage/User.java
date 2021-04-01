package com.example.VirtualMarket.UserPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import com.example.VirtualMarket.VisitorPackage.Visitor;
import lombok.NonNull;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class User extends Visitor {

    @NonNull
    private String userPhoneNumber;
    @NonNull
    private String userPassword;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Product> products;

    public User(String userPhoneNumber, String UserPassword) {
        super();
        this.userPhoneNumber = userPhoneNumber;
        this.userPassword = UserPassword;
    }

    public User() {
        super();
    }

    public String getUserPhoneNumber() {
        return userPhoneNumber;
    }

    public void setUserPhoneNumber(String phoneNumber) {
        this.userPhoneNumber = phoneNumber;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String password) {
        this.userPassword = password;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "User{" +
                "userPhoneNumber='" + userPhoneNumber + '\'' +
                ", UserPassword='" + userPassword + '\'' +
                ", products=" + products +
                ", ID=" + super.ID +
                '}';
    }
}
