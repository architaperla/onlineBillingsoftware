package com.billing.machine;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
public class Rest {
    public static void main(String args[]) {


          try{
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection con=DriverManager.getConnection(
                        "jdbc:mysql://localhost:3306/restaurant","root","root");

                Statement stmt=con.createStatement();
ResultSet rs=stmt.executeQuery("select * from menu");
while(rs.next())
                   System.out.println("id "+ rs.getInt(1)+"  item "+rs.getString(2));
             con.close();
            }catch(Exception e){ System.out.println(e);}
       }
    }

