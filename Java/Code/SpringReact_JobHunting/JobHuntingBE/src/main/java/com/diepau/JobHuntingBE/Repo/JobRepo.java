package com.diepau.JobHuntingBE.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.diepau.JobHuntingBE.model.Job;

public interface JobRepo extends MongoRepository<Job, String> {

}
