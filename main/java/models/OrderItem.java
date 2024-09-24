package models;
import java.util.List;

import com.google.gson.annotations.SerializedName;

   
public class OrderItem {

   @SerializedName("customerName")
   String customerName;

   @SerializedName("phoneNumber")
   String phoneNumber;

   @SerializedName("OrderList")
   List<OrderList> OrderList;


    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
    public String getCustomerName() {
        return customerName;
    }
    
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    
    public void setOrderList(List<OrderList> OrderList) {
        this.OrderList = OrderList;
    }
    public List<OrderList> getOrderList() {
        return OrderList;
    }
    
}