package com.example.VirtualMarket.VisitorPackage;

import javax.persistence.*;

@Entity
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long ID;

    public Visitor() {

    }

    public Visitor(Long ID) {
        this.ID = ID;
    }

    public void setID(Long id) {
        this.ID = id;
    }

    public Long getID() {
        return ID;
    }

    @Override
    public String toString() {
        return "Visitor{" +
                "ID=" + ID +
                '}';
    }
}
