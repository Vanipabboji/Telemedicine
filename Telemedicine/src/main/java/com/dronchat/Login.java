package com.dronchat;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Login  extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
        PrintWriter pw = response.getWriter();
        response.setContentType("text/html");

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            // Establish database connection
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/telemedicine", "root", "Manasa@46");

            // Prepare SQL statement to retrieve user information based on username and password
            ps = con.prepareStatement("SELECT * FROM user WHERE username=? AND password=?");
            ps.setString(1, username);
            ps.setString(2, password);

            // Execute query
            rs = ps.executeQuery();

            // Check if the result set contains any rows
            if (rs.next()) {
                // User authenticated, redirect to success page or perform further actions
            	response.sendRedirect("services.html");
            } else {
                // User not found or invalid credentials
                pw.println("Invalid username or password");
            }
        } catch (ClassNotFoundException | SQLException e) {
            // Handle any exceptions
            e.printStackTrace();
            pw.println("Error: " + e.getMessage());
        } finally {
            // Close resources
            try {
                if (rs != null) {
                    rs.close();
                }
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
