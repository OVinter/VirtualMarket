package com.example.VirtualMarket.ProductPackage;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Embeddable
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;
    @Getter @Setter
    private String productName;
    @Getter @Setter
    private String productCategory;
    @Getter @Setter
    private String productDescription;
    @Getter @Setter
    private String productPhoto;

    public Product(String productName, String productCategory, String productDescription, String productPhoto) {
        this.productName = productName;
        this.productCategory = productCategory;
        this.productDescription = productDescription;
        this.productPhoto = productPhoto;
    }

    public Product() {
    }

    public void setID(Long id) {
        this.ID = id;
    }

    public Long getID() {
        return ID;
    }

    @Override
    public String toString() {
        return "Product{" +
                "ID=" + ID +
                ", productName='" + productName + '\'' +
                ", productCategory='" + productCategory + '\'' +
                ", productDescription='" + productDescription + '\'' +
                ", productPhoto='" + productPhoto + '\'' +
                '}';
    }
}
