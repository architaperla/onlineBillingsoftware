package com.billing.machine;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.sql.*;
import java.util.Date;
import java.util.*;

public class BillFrequency {
    void billsummary() {
        int val;
        Scanner sc = new Scanner(System.in);
        System.out.println(" select any option given below ");
        System.out.println("---------------------------------");
        System.out.println("1)summary based on day");
        System.out.println("2)Summary based on week");
        System.out.println("3)Summary based on month");
        System.out.println("4)Summary based on year");
        System.out.println("enter the option:");
        val = sc.nextInt();
        switch (val) {
            case 1:
                datecalculator(-1);
                break;
            case 2:
                datecalculator(-7);
                break;
            case 3:
                datecalculator(-31);
                break;
            case 4:
                datecalculator(-365);
                break;
            default:
                System.out.println("select a valid option");
                break;
        }


    }

    void datecalculator(int noOfDays) {
        String fromDate, toDate;
        Date todayDate = new Date();

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(todayDate);
        calendar.add(Calendar.DAY_OF_YEAR, noOfDays);
        Date afterDate = calendar.getTime();

        fromDate = new String(String.valueOf(new Timestamp(afterDate.getTime())));
        toDate = new String(String.valueOf(new Timestamp(todayDate.getTime())));
        List<String> myOrdersList = fetchRecordsBasedOnFrequency(fromDate, toDate);
        calculateIncome(myOrdersList);

    }

    List<String> fetchRecordsBasedOnFrequency(String fromDate, String toDate) {

        Connection con = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/restaurant", "root", "root");

            Statement stmt = con.createStatement();

            ResultSet rs = stmt.executeQuery("select * from customer where createdatetime>='" + fromDate + "' and createdatetime <= '" + toDate + "'");
            List<String> myOrders = new ArrayList<>();
            while (rs.next()) {
                String s1 = rs.getString(4).toString();
                myOrders.add(s1);


            }
            return myOrders;


        } catch (SQLException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    void calculateIncome(List<String> myOrdersList) {
        int totalIncome = 0;
        System.out.println("Name" + "     " + "price" + "     " + "quantity" + "    " + "totalprice" + "    ");

        for (int i = 0; i < myOrdersList.size(); i++) {
            JsonArray ja = JsonParser.parseString(myOrdersList.get(i)).getAsJsonArray();

            for (int j = 0; j < ja.size(); j++) {
                //  System.out.println();
                JsonObject jo = (JsonObject) ja.get(j);
                System.out.println(jo.get("name") + "       " + jo.get("price") + "          " + jo.get("quantity") + "        " + jo.get("totalprice"));
                totalIncome = totalIncome + jo.get("totalprice").getAsInt();


            }


        }

        System.out.println("TOTAL INCOME   "+totalIncome );


    }

}