package com.diepau.JobHuntingBE.Repo;

import java.util.*;
import org.bson.Document;
import com.mongodb.client.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import com.mongodb.client.AggregateIterable;
import com.diepau.JobHuntingBE.model.Job;

@Component
public class SearchRepoImp implements SearchRepo {

//	@Autowired
//	MongoClient mongoClient;

	@Autowired
	MongoConverter mongoConverter;
	@Value("${spring.data.mongodb.uri}")
	private String mongoUri;

	@Override
	public List<Job> findJobsByText(String text) {
		List<Job> jobs = new ArrayList<Job>();
		try (MongoClient mongoClient = MongoClients.create(this.mongoUri)) {
			MongoDatabase database = mongoClient.getDatabase("DiepAu");
			MongoCollection<Document> collection = database.getCollection("Jobs");

			AggregateIterable<Document> result = collection.aggregate(Arrays.asList(
					new Document("$search",
							new Document("text",
									new Document("query", text).append("path",
											Arrays.asList("techs", "dessc", "job_name")))),
					new Document("$sort", new Document("exp", 1L))));

			result.forEach(doc -> jobs.add(this.mongoConverter.read(Job.class, doc)));
		}

		return jobs;
	}

}
