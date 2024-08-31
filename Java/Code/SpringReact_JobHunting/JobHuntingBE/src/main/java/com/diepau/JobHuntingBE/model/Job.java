package com.diepau.JobHuntingBE.model;

import java.util.Arrays;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Jobs")
public class Job {

	private String job_name;
	private int exp;
	private String[] techs;
	private String desc;

	public Job(String job_name, int exp, String[] techs, String desc) {
		this.job_name = job_name;
		this.exp = exp;
		this.techs = techs;
		this.desc = desc;
	}

	public Job() {
	}

	public String getJob_name() {
		return job_name;
	}

	public void setJob_name(String job_name) {
		this.job_name = job_name;
	}

	public int getExp() {
		return exp;
	}

	public void setExp(int exp) {
		this.exp = exp;
	}

	public String[] getTechs() {
		return techs;
	}

	public void setTechs(String[] techs) {
		this.techs = techs;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	@Override
	public String toString() {
		return "Job [job_name=" + job_name + ", exp=" + exp + ", techs=" + Arrays.toString(techs) + ", desc=" + desc
				+ "]";
	}

}
