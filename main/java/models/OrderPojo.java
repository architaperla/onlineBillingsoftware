package models;

import java.util.List;

public class OrderPojo {

    String customerName;
    String phoneNumber;
   List<OrderList>  OrderList;

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<OrderList> getOrderList() {
        return OrderList;
    }

    public void setOrderList(List<OrderList> orderList) {
        this.OrderList = orderList;
    }
}
