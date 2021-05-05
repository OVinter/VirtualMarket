package com.example.VirtualMarket.UserPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import com.example.VirtualMarket.VisitorPackage.Visitor;
import com.example.VirtualMarket.security.model.Authority;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.NonNull;
import org.hibernate.annotations.BatchSize;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "USER")
public class User /*extends Visitor*/ {

    @JsonIgnore
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USER_SEQ")
    @SequenceGenerator(name = "USER_SEQ", sequenceName = "USER_SEQ", allocationSize = 1)
    protected Long ID;
    @NonNull
    private String userPhoneNumber;
    @NonNull
    private String userPassword;
    @OneToMany(cascade = CascadeType.ALL)
    //@ElementCollection
    private List<Product> products;
    @JsonIgnore
    @NotNull
    private boolean activated;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "USER_AUTHORITY",
            joinColumns = {@JoinColumn(name = "USER_ID", referencedColumnName = "ID")},
            inverseJoinColumns = {@JoinColumn(name = "AUTHORITY_NAME", referencedColumnName = "NAME")})
    @BatchSize(size = 20)
    private Set<Authority> authorities = new HashSet<>();

    public User(String userPhoneNumber, String UserPassword) {
        super();
        this.userPhoneNumber = userPhoneNumber;
        this.userPassword = UserPassword;
    }

    public User(Long ID,
                @NonNull String userPhoneNumber,
                @NonNull String userPassword,
                List<Product> products,
                boolean activated,
                Set<Authority> authorities) {
        this.userPhoneNumber = userPhoneNumber;
        this.userPassword = userPassword;
        this.products = products;
        this.activated = activated;
        this.authorities = authorities;
    }

    public User(Long ID,
                @NonNull String userPhoneNumber,
                @NonNull String userPassword,
                List<Product> products,
                boolean activated) {
        this.ID = ID;
        this.userPhoneNumber = userPhoneNumber;
        this.userPassword = userPassword;
        this.products = products;
        this.activated = activated;
    }

    public User(@NonNull String userPhoneNumber, @NonNull String userPassword, List<Product> products, boolean activated) {
        this.userPhoneNumber = userPhoneNumber;
        this.userPassword = userPassword;
        this.products = products;
        this.activated = activated;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public Set<Authority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<Authority> authorities) {
        this.authorities = authorities;
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
                ", products=" + products + '\'' +
                ", ID=" + ID /*super.ID*/ + '\'' +
                ", activated=" + activated +
                '}';
    }
}
