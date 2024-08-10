package org.example;
// 1. import java sql

import java.sql.*;

public class Main {


    public static void main(String[] args) throws Exception {
        // 2. load and register the driver (com.mysql.jdbc.driver)
        // set up dependency in pom.xml
        Class.forName("com.mysql.jdbc.Driver");

        // 3. Establish s connection (need to create a db in mysql)
        String url = "jdbc:mysql://localhost:3306/jdbc"; // name of database
        String username = "root";
        String pass = "Diep1312#";
        Connection con = DriverManager.getConnection(url, username, pass);

        // 4. Create a statement
        Statement st = con.createStatement();

        // 5. Execute the query
        ResultSet resultSet = st.executeQuery("select * from students;");

        // 6. Process results => read the db
        while (resultSet.next()) {
            System.out.println(resultSet.getInt(1) + ": "
                    + resultSet.getString(2) + " "
                    + resultSet.getString("last_name"));
        }

        // 7. Close the connection
        st.close();
        con.close();
    }
}