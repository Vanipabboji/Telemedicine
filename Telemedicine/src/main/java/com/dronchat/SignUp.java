package com.dronchat;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class SignUp extends  HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter pw = response.getWriter();
        response.setContentType("text/html");

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        Connection con = null;
        PreparedStatement ps = null;
        try {
            // Load MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Establish connection to the database
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/telemedicine", "root", "Manasa@46");
            // Prepare SQL statement to insert data into the database
            ps = con.prepareStatement("INSERT INTO user (username, password) VALUES (?, ?)");
            ps.setString(1, username);
            ps.setString(2, password);
            // Execute the SQL statement
            int rowsAffected = ps.executeUpdate();
            con.commit();
            if (rowsAffected > 0) {
            	response.sendRedirect("services.html");
            } else {
                pw.println("Failed to create account");
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            pw.println("Error: " + e.getMessage());
        } finally {
            // Close PreparedStatement and Connection in finally block to ensure they are closed
            try {
                if (ps != null) {
                    ps.close();
                }
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
