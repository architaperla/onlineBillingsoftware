package com.billing.machine;

import org.json.simple.JSONObject;

import java.sql.*;
import java.time.Instant;
import java.util.*;

public class Order {
    public void display() throws SQLException {
        int n;
        Scanner sc1 = new Scanner(System.in);
        String name = new String();
        int phno;
        List<JSONObject> myOrderObjects = new ArrayList<JSONObject>();

        Map<Integer, MenuPojo> itemMenuPriceMap = new HashMap<>();

        System.out.println("please enter name of the customer:");
        name = sc1.nextLine();
        System.out.println("please enter phno of the customer:");
        phno = sc1.nextInt();


        Connection con = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/restaurant", "root", "root");

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("select * from menu");
            System.out.println("ItemId:ItemName:Price");

            while (rs.next()) {
                MenuPojo np = new MenuPojo(rs.getInt(3), rs.getString(2));
                itemMenuPriceMap.put(rs.getInt(1), np);
                System.out.println(rs.getInt(1) + ":" + rs.getString(2) + ":" + rs.getInt(3));
            }
            System.out.println("-1:exit");
            //  System.out.println("please enter the number of items");
            System.out.println("please choose the items");
            Map<Integer, Map<Integer, Integer>> itemMap = new HashMap<>();
            int itemnumber = 0;
            int k = 0;
            while (itemnumber != -1) {
                if (k > 0)
                    System.out.println("please choose another item else choose exit ");
                itemnumber = sc1.nextInt();
                if (itemnumber != -1) {
                    System.out.println("please enter quantity ");
                    JSONObject obj = new JSONObject();
                    int quantity = sc1.nextInt();
                    obj.put("name", itemMenuPriceMap.get(itemnumber).getName());
                    obj.put("price", itemMenuPriceMap.get(itemnumber).getPrice());
                    obj.put("quantity", quantity);
                    MenuPojo np1 = itemMenuPriceMap.get(itemnumber);
                    np1.setQuantity(quantity);
                    int totalprice = itemMenuPriceMap.get(itemnumber).getPrice() * quantity;
                    itemMenuPriceMap.get(itemnumber).setTotalprice(totalprice);
                    obj.put("totalprice", totalprice);
                    myOrderObjects.add(obj);
                    // Map<Integer,Integer> mp = new HashMap<>();
                    // mp.put(quantity,itemMenuPriceMap.get(itemnumber)*quantity);
                    // itemMap.put(itemnumber, mp);
                    k++;
                }
            }
            insertCustomerDetails(name, phno, myOrderObjects, con);

            System.out.println("************** Order Bill *******************");
            System.out.println("Name of the customer: "+ name);
            System.out.println("Item-Name      Price   Quantity   TotalPrice");
            for (int i = 0; i < myOrderObjects.size(); i++) {
                System.out.println(myOrderObjects.get(i).get("name") + "           " + myOrderObjects.get(i).get("price") + "          " + myOrderObjects.get(i).get("quantity") + "                 " + myOrderObjects.get(i).get("totalprice"));
            }


        } catch (Exception e) {
            System.out.println(e);
        } finally {
            con.close();
        }


    }

    public void insertCustomerDetails(String name, int phno, List<JSONObject> myOrderObjects, Connection con) throws SQLException {

        // Statement stmt = con.createStatement();
        String sql = "insert into customer "
                + " (id, name, phno,orderdetails,createdatetime)" + " values (?, ?, ?,?,?)";

        PreparedStatement myStmt = null;
        try {
            myStmt = con.prepareStatement(sql);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        // set param values
        String uniqueID = UUID.randomUUID().toString();
        Instant time = Instant.now();
        myStmt.setString(1, uniqueID);
        myStmt.setString(2, name);
        myStmt.setInt(3, phno);
        myStmt.setString(4, myOrderObjects.toString());
        myStmt.setTimestamp(5, Timestamp.from(time));
        myStmt.execute();
        System.out.println("data inserted ");


    }
}
