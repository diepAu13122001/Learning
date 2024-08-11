package org.example;
// 1. import java sql

import java.sql.*;

public class Main {

    private static Connection setup() throws Exception {
        // 2. load and register the driver (com.mysql.jdbc.driver)
        // set up dependency in pom.xml
        Class.forName("com.mysql.jdbc.Driver");

        // 3. Establish s connection (need to create a db in mysql)
        String url = "jdbc:mysql://localhost:3306/jdbc"; // name of database
        String username = "root";
        String pass = "Diep1312#";
        Connection con = DriverManager.getConnection(url, username, pass);

        return con;
    }

    private static void closeSQL(Connection connection, Statement[] statements, PreparedStatement[] preparedStatements) throws Exception {
        // 7. Close the connection
        for (Statement st : statements) {
            st.close();
        }

        for (PreparedStatement preparedStatement : preparedStatements) {
            preparedStatement.close();
        }
        connection.close();
    }

    // use for DQL (data query language)
    private static Statement fetchDB(String query, Connection con) throws Exception {
        // 4. Create a statement
        Statement statement = con.createStatement();
        // 5. Execute the query
        ResultSet resultSet = statement.executeQuery(query);

        // 6. Process results => read the db
        while (resultSet.next()) {
            System.out.println(resultSet.getInt(1) + ": "
                    + resultSet.getString(2) + " "
                    + resultSet.getString("last_name"));
        }
        return statement;
    }


    // use for DML (data modify language)
    private static Statement updateDB(String query, Connection con) throws Exception {
        // 4. Create a statement
        Statement statement = con.createStatement();
        // 5. Execute the query
        int count = statement.executeUpdate(query);

        // 6. Process results => read the db
        System.out.println(count + " row/s affected");
        return statement;
    }


    private static PreparedStatement updateDB_way2(Connection con) throws Exception {
        // viet code linh hoat hon (su dung ?)
        String query = "insert into students (first_name, last_name) values (?, ?)";

        // 4. Create a statement
        PreparedStatement statement = con.prepareStatement(query);
        // 5. Execute the query
        String first_name = "Co";
        String last_name = "Giai";

        // so column tinh theo phan cot muon nhap o cho lenh insert
        statement.setString(1, first_name);
        statement.setString(2, last_name);
        int count = statement.executeUpdate();

        // 6. Process results => read the db
        System.out.println(count + " row/s affected");
        return statement;
    }

    public static void main(String[] args) throws Exception {
        Connection connection = setup();

        // process query
        String fetchQuery = "Select * from students";
        // dau '' bat buoc phai co (vd: ..." '" + string_value + "' "
        String updateQuery = "Insert into students (first_name, last_name) " +
                "values ('Le', 'Van A') ,  ('Le', 'Van B'), ('Dinh', 'Thi A')";
//        String createQuery = "Create table courses (" +
//                "id int ";

        // show result
//        Statement statement1 = updateDB(updateQuery, connection);
        PreparedStatement statement3 = updateDB_way2(connection);
        Statement statement2 = fetchDB(fetchQuery, connection);

        closeSQL(connection, new Statement[]{statement2}, new PreparedStatement[]{statement3});

    }
}