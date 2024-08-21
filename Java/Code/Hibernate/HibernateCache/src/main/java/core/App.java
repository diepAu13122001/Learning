package core;

import org.hibernate.*;
import org.hibernate.cfg.Configuration;

public class App {
	public static void main(String[] args) {
		// create object
		LibraryAccount libraryAccount1 = new LibraryAccount("student1", "123456");
		libraryAccount1.setId(1);
		LibraryAccount libraryAccount2 = new LibraryAccount("student2", "abcdef");
		libraryAccount2.setId(2);
		LibraryAccount libraryAccount3 = new LibraryAccount("student3", "123abc");
		libraryAccount3.setId(3);
		LibraryAccount libraryAccount4 = null;

		// tao session
		Configuration configuration = new Configuration().configure().addAnnotatedClass(LibraryAccount.class);
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		// Session 1 --------------------
		Session session1 = sessionFactory.openSession();
		session1.beginTransaction();
		// tao query
		Query q1 = session1.createQuery("from LibraryAccount where id=2");
		q1.setCacheable(true);
		// fetch data
		// libraryAccount4 = (LibraryAccount) session1.get(LibraryAccount.class, 1);
		libraryAccount4 = (LibraryAccount) q1.uniqueResult();
		System.out.println(libraryAccount4);
		session1.getTransaction().commit();
		session1.close();

		// Session 2 --------------------
		Session session2 = sessionFactory.openSession();
		session2.beginTransaction();
		// tao query
		Query q2 = session2.createQuery("from LibraryAccount where id=2");
		q2.setCacheable(true);
		// fetch data
		// libraryAccount4 = (LibraryAccount) session2.get(LibraryAccount.class, 1);
		libraryAccount4 = (LibraryAccount) q2.uniqueResult();
		System.out.println(libraryAccount4);
		session2.getTransaction().commit();
		session2.close();
	}

}
