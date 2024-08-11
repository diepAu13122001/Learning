package dao.example;

import com.mysql.jdbc.Driver;

import java.sql.*;
import java.util.ArrayList;

public class JdbcDAODemo {
    public static void main(String[] args) throws Exception {
        StudentDAO studentDAO = new StudentDAO();
        Student student_1 = studentDAO.getStudentById(8);
        if (student_1 == null) System.out.println("No data to fetch");
        else System.out.println(student_1.toString());

        int addNewStudent = studentDAO.addStudent(new Student("Ma", "Tu Ky"));
        System.out.println(addNewStudent + " row/s affected");

        int removeStudent = studentDAO.removeStudent(5);
        System.out.println(removeStudent + " row/s affected");

        System.out.println(studentDAO.getAllStudents().toString());
    }
}

class StudentDAO {
    Connection connection = null;

    public StudentDAO() throws Exception {
        Class.forName("com.mysql.jdbc.Driver");
        String url = "jdbc:mysql://localhost:3306/jdbc"; // name of database
        String username = "root";
        String pass = "Diep1312#";
        this.connection = DriverManager.getConnection(url, username, pass);
    }

    public Student getStudentById(int st_id) {
        Student student = new Student();
        try {
            student.setId(st_id);
            // 7 steps to connect with jdbc ----------------------
            String query = "select * from students where id = " + st_id;
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            resultSet.next();
            student.setFirst_name(resultSet.getString(2));
            student.setLast_name(resultSet.getString(3));
            return student;
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }

    public int addStudent(Student student) {
        try {
            String query = "insert into students (first_name, last_name) values (?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, student.getFirst_name());
            statement.setString(2, student.getLast_name());
            int count = statement.executeUpdate();
            return count;
        } catch (Exception e) {
            System.out.println(e);
        }
        return 0;
    }

    public int removeStudent(int id) {
        try {
            String query = "delete from students where id=" + id;
            PreparedStatement statement = connection.prepareStatement(query);
            int count = statement.executeUpdate();
            return count;
        } catch (Exception e) {
            System.out.println(e);
        }
        return 0;
    }

    public ArrayList<Student> getAllStudents() {
        ArrayList<Student> students = new ArrayList<>();
        try {
            String query = "select * from students";
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                Student student = new Student(resultSet.getInt(1),
                        resultSet.getString(2),
                        resultSet.getString(3));
                students.add(student);
            }
            return students;
        } catch (Exception e) {
            System.out.println(e);
        }
        return students;
    }
}

class Student {
    private int id;
    private String first_name;
    private String last_name;

    public Student(String first_name, String last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    public Student(int id, String first_name, String last_name) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    public Student() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String toString() {
        return this.id + ": " + this.first_name + " " + this.last_name;
    }
}
