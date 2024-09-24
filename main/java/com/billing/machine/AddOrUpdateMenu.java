package com.billing.machine;

import java.sql.*;
import java.util.Scanner;

public class AddOrUpdateMenu {
    public void addOrUpdateMenu()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the username");
        String username=sc.nextLine();
        System.out.println("enter the password");
        String password=sc.nextLine();
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/restaurant", "root", "root");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("select * from password where username ='" + username + "'and password =" + password + "");

            if(rs.next()) {
                System.out.println("Logged in as " + username);
                System.out.println("please choose the options");
                System.out.println("1)Add Menu item");
                System.out.println("2)update Menu item");
                int option =  Integer.parseInt(sc.nextLine());
                if (option == 1) {
                    System.out.println("Please enter the name of the  Menu item");
                    String menuitemname = sc.nextLine();
                    System.out.println("Please enter the price of the  Menu item");
                    int menuitemprice = sc.nextInt();
                    ResultSet  rs1 =   stmt.executeQuery("select max(menuid) from menu");
                    int menuid = 0;
                    while(rs1.next()) {
                        menuid =rs1.getInt(1)+1;
                    }

                    boolean menuRecord = stmt.execute("insert into menu values("+menuid+",'" + menuitemname + "'," + menuitemprice + ")");
                    if (!menuRecord) {
                        System.out.println("Menu item inserted");
                    } else {
                        System.out.println("Menu Item Not inserted");
                    }
                }
                if (option == 2)
                {
                    System.out.println("enter item id to be updated");
                    int id=sc.nextInt();
                    System.out.println("enter the price to be updated");
                    int pr=sc.nextInt();
                    boolean updated = stmt.execute("update menu set price="+pr+" where menuid="+id);
                    if (!updated) {
                        System.out.println("Menu item inserted");
                    } else
                    {
                        System.out.println("Menu Item Not inserted");
                    }
                }

            }
            else{
                System.out.println("wrong username or password");
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
