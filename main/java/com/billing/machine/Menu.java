package com.billing.machine;

import java.sql.SQLException;
import java.util.Scanner;
public class Menu {
    public static void main(String args[]) throws SQLException {
        Scanner sc=new Scanner(System.in);
        int c;
        String ch;
        System.out.println("Enter if you are user or owner");
        ch=sc.nextLine();
        switch(ch)
        {
            case "user":System.out.println(" select any option given below ");
                System.out.println("---------------------------------");
                System.out.println("1)Order");
                System.out.println("2)retrive the customer order");
                System.out.println("4)Print Summary based on Frequency");
                System.out.println("enter the option:");
                c=sc.nextInt();
                switch(c)
                {
                    case 1:
                        Order o=new Order();
                        o.display();
                        break;
                    case 2:
                        CustomerDetails d=new CustomerDetails();
                        d.displayDetails();
                        break;
                    case 3:
                        BillFrequency f=new BillFrequency();
                        f.billsummary();
                        break;


                }
            case "owner":System.out.println("3)Add/Update Menu");
                         AddOrUpdateMenu a=new AddOrUpdateMenu();
                         a.addOrUpdateMenu();
                         break;


        }
    }
}
