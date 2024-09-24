package com.billing.machine;

public class MenuPojo {

    int quantity;
    int price;
    String name;
    int totalprice;

    public MenuPojo(int price, String name) {
        this.price = price;
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public void setPrice(int price) {
        this.price = price;
    }


    public void setName(String name) {
        this.name = name;
    }

    public int getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(int totalprice) {
        this.totalprice = totalprice;
    }
}
