package core;

import java.util.List;
import java.util.Random;

import org.hibernate.*;
import org.hibernate.query.Query;
import org.hibernate.cfg.Configuration;

public class App {
	public static void main(String[] args) {
		// tao session
		Configuration configuration = new Configuration().configure().addAnnotatedClass(LibraryAccount.class);
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		// Session 1 --------------------
		Session session = sessionFactory.openSession();
		session.beginTransaction();

		// tao ngau nhien 50 tai khoan
//		Random r = new Random();
//		String abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//		for (int i = 0; i < 50; i++) {
//			String accountName = "student" + i;
//			String password = "" + abc.charAt(r.nextInt(abc.length())) + abc.charAt(r.nextInt(abc.length()))
//					+ abc.charAt(r.nextInt(abc.length())) + abc.charAt(r.nextInt(abc.length()))
//					+ abc.charAt(r.nextInt(abc.length())) + abc.charAt(r.nextInt(abc.length()));
//			LibraryAccount libraryAccount = new LibraryAccount(accountName, password);
//			libraryAccount.setId(i + 1);
//			session.save(libraryAccount);
//		}

		// use HQL -------------------------
		// select all
//		Query q1 = session.createQuery("from LibraryAccount");
//		List<LibraryAccount> libraryAccounts = q1.list();
//		for (LibraryAccount account : libraryAccounts) {
//			System.out.println(account);
//		}

		// select unique
//		Query q2 = session.createQuery("from LibraryAccount where id=10");
//		LibraryAccount libraryAccount = (LibraryAccount) q2.uniqueResult();
//		System.out.println(libraryAccount);

		// use SQL ---------------------
//		Query q3 = session.createQuery("select id, username, password from LibraryAccount where id=10");
//		Object[] libraryAccount = (Object[]) q3.uniqueResult();
//		System.out.println(libraryAccount[0] + ": " + libraryAccount[1] + ": " + libraryAccount[2]);

//		Query q4 = session.createQuery("select id, username, password from LibraryAccount where password like '%A%'");
//		List<Object[]> libraryAccounts = (List<Object[]>) q4.list();
//		for (Object[] account : libraryAccounts) {
//			System.out.println(account[0] + ": " + account[1] + ": " + account[2]);
//		}

		Query q5 = session.createQuery("select count(password) from LibraryAccount where id > :b");
		q5.setParameter("b", 25); // phai co dau : truoc ten param 
		Long countPass = (Long) q5.uniqueResult();
		System.out.println("Count password: " + countPass);

		session.getTransaction().commit();
		session.close();
	}

}
