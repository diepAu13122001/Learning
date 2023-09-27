package agent_ABCD;

public class TestSimpleReflexAgent {
	public static void main(String[] args) {
		Environment env = new Environment(Environment.LocationState.DIRTY, Environment.LocationState.CLEAN,
				Environment.LocationState.CLEAN, Environment.LocationState.CLEAN);
		Agent agent = new Agent(new AgentProgram());
		env.addAgent(agent, Environment.LOCATION_B);

		env.stepUntilDone();

	}
}
