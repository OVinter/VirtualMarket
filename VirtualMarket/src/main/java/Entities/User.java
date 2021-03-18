package Entities;

import lombok.NonNull;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import java.util.List;

@Entity
public class User extends Visitor{

    @NonNull
    private String userPhoneNumber;
    @NonNull
    private String UserPassword;
    @ElementCollection
    private List<Product> products;

    public User(String userPhoneNumber, String UserPassword) {
        super();
        this.userPhoneNumber = userPhoneNumber;
        this.UserPassword = UserPassword;
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
        return UserPassword;
    }

    public void setUserPassword(String password) {
        this.UserPassword = password;
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
                ", UserPassword='" + UserPassword + '\'' +
                ", products=" + products +
                ", ID=" + ID +
                '}';
    }
}
