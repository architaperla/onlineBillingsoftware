package models;

import com.google.gson.annotations.SerializedName;

   
public class OrderList {

   @SerializedName("id")
   String id;

   @SerializedName("quantity")
   String quantity;


    public void setId(String id) {
        this.id = id;
    }
    public String getId() {
        return id;
    }
    
    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
    public String getQuantity() {
        return quantity;
    }
    
}