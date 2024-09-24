package com.billing.machine;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import models.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class Customer {

    @PostMapping("/order")
    public ResponseEntity<?> order(@RequestBody CustomerMenuItemDetailsDTO customerMenuItemDetailsDTO) {


        String ItemName = customerMenuItemDetailsDTO.getItemName();
        int quantity = customerMenuItemDetailsDTO.getQuantity();

        Connection con = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/restaurant", "root", "root");

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("select * from menu");


        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }


        return ResponseEntity.ok(200);
    }


    @GetMapping("/menu")
    public ResponseEntity<?> menu() throws SQLException {

        List<MenuPOJO> menuPOJOList = new ArrayList<>();
        Connection con = getJDBCConnection();
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery("select * from menu");
        while(rs.next()){
            MenuPOJO menuPOjO = new MenuPOJO();
            menuPOjO.setMenuId(rs.getInt(1));
            menuPOjO.setMenuItemName(rs.getString(2));
            menuPOjO.setMenuItemPrice(rs.getInt(3));
            menuPOJOList.add(menuPOjO);
        }
        return ResponseEntity.ok(menuPOJOList);
    }


    private Connection getJDBCConnection() {

        Connection con = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/restaurant", "root", "root");

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return con;

    }


    @PostMapping("/addMenu")
    public ResponseEntity<?> addMenu(@RequestBody AddMenuPojo addMenuPojo) throws SQLException {
        System.out.println("ADD MENU REQUEST RECEIVED"+addMenuPojo.getName() +"PRICE :"+addMenuPojo.getPrice());
        Connection con = getJDBCConnection();
        Statement stmt = con.createStatement();
        ResultSet  rs1 =   stmt.executeQuery("select max(menuid) from menu");
        int menuid = 0;
        while(rs1.next()) {
            menuid =rs1.getInt(1)+1;
        }
        ResultSet rs = stmt.executeQuery("select * from menu");
        System.out.println("QUERY :"+"insert into menu values("+menuid+",'" + addMenuPojo.getName() + "'," + Integer.parseInt(addMenuPojo.getPrice()) + ")");
        boolean menuRecord = stmt.execute("insert into menu values("+menuid+",'" + addMenuPojo.getName() + "'," + Integer.parseInt(addMenuPojo.getPrice()) + ")");
        return ResponseEntity.ok(menuRecord);
    }

    @PostMapping("/orderItems")
    public ResponseEntity<?> orderItems(@RequestBody OrderItem orderItem) throws SQLException {

        System.out.println("orderPojoList "+orderItem);
        return ResponseEntity.ok(200);
    }




}
