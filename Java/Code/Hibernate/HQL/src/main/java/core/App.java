package core;

import java.util.*;

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

		// HQL -------------------------
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

		// SQL -----------------
//		Query q3 = session.createQuery("select id, username, password from LibraryAccount where id=10");
//		Object[] libraryAccount = (Object[]) q3.uniqueResult();
//		System.out.println(libraryAccount[0] + ": " + libraryAccount[1] + ": " + libraryAccount[2]);

//		Query q4 = session.createQuery("select id, username, password from LibraryAccount where password like '%A%'");
//		List<Object[]> libraryAccounts = (List<Object[]>) q4.list();
//		for (Object[] account : libraryAccounts) {
//			System.out.println(account[0] + ": " + account[1] + ": " + account[2]);
//		}
		// Native Queries ------------------------------------
//		SQLQuery q6 = session.createSQLQuery("select * from LibraryAccount where id > 40");
//		q6.addEntity(LibraryAccount.class); // chuyen tu kieu object ve  kieu mong muon
//				List<LibraryAccount> libraryAccounts = q6.list(); // tra ve kieu object
//		for (LibraryAccount libraryAccount : libraryAccounts) {
//			System.out.println(libraryAccount);
//		}

		SQLQuery q7 = session.createSQLQuery("select username, password from LibraryAccount where id > 40");
		q7.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
		List libraryAccounts = q7.list(); // tra ve kieu object
		for (Object o : libraryAccounts) {
			Map m = (Map) o;
			System.out.println(m.get("username") + ": " + m.get("password"));
		}

		session.getTransaction().commit();
		session.close();
	}

}
