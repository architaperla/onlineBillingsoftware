package com.billing.machine;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CustomerDetails {
    public List<String> displayDetails() {
        Scanner s = new Scanner(System.in);
        String name;
        int phno;
       /* System.out.println("enter the name of the customer");
        name = s.nextLine();
        System.out.println("enter the phone number of the customer");
        phno = s.nextInt();*/

        List<String> results = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/restaurant", "root", "root");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("select * from customer where name ='bunny'and phno = 123");
            results = new ArrayList<>();
            int count = 0;
            while (rs.next()) {
                count++;
                System.out.println(rs.getInt(1) + "  " + rs.getString(2) + "  " + rs.getInt(3));
                String ja = rs.getString(4);
                System.out.println("Name" + "     " + "price" + "     " + "quantity" + "    " + "totalprice" + "    ");
                System.out.println("----------------------------------------------------------------------------");
                results.add(ja);
               /* for (int i = 0; i < ja.size(); i++) {
                    System.out.println();
                    JsonObject jo = (JsonObject) ja.get(i);

                    System.out.print(jo.get("name"));
                    System.out.print("       ");

                    System.out.print(jo.get("price"));
                    System.out.print("        ");
                    System.out.print(jo.get("quantity"));
                    System.out.print("        ");
                    System.out.print(jo.get("totalprice"));
                    System.out.print("        ");
                }
*/
            }

            if (count == 0) {

                System.out.println("no customer with above details");
            }
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
        return results;
    }

}

