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
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		// start sql --------------------------------------------
		LibraryAccount libraryAccount = new LibraryAccount("diepau1312", "Diep13");
		libraryAccount.setId(101);

		session.save(libraryAccount);

		// done sql --------------------------------------------
		session.getTransaction().commit();
		
		session.evict(libraryAccount);
		libraryAccount.setPassword("Makyky");

		session.close();
	}

}
