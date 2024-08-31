package com.diepau.JobHuntingBE.Repo;
import java.util.*;

import com.diepau.JobHuntingBE.model.Job;
public interface SearchRepo {

	public List<Job> findJobsByText(String text);
}
