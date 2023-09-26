package chapter2.agent_grid;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class TestSimpleReflexAgent {
	public static void main(String[] args) {

		int columnNum = 2;
		int rowNum = 2;
		Environment env = new Environment(columnNum, rowNum);
		Agent agent = new Agent(new AgentProgram());
		env.addAgent(agent, "(0, 1)");

		env.stepUntilDone();
	}
}
