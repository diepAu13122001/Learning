package core;

import java.util.*;

import javax.persistence.*;
import org.hibernate.*;
import org.hibernate.query.Query;
import org.hibernate.cfg.Configuration;

public class App {
	public static void main(String[] args) {
		// tao session
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("JPAexample");
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		entityManager.getTransaction().begin();
		// start sql --------------------------------------------
		LibraryAccount libraryAccount = new LibraryAccount("diepau1312", "Diep13");
		libraryAccount.setId(101);

		// save data
//		entityManager.persist(libraryAccount);

		// search data
		LibraryAccount libraryAccount2 = entityManager.find(LibraryAccount.class, 101);
		System.out.println(libraryAccount2);
		System.out.println(libraryAccount == libraryAccount2);

		// done sql --------------------------------------------
		entityManager.getTransaction().commit();
		entityManager.close();
	}

}
