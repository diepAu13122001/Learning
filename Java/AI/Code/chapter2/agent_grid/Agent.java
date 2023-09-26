package chapter2.agent_grid;

public class Agent {
	private AgentProgram program;
	private int performance;

	public Agent() {
		this.performance = 0;
	}
	
	public int getPerformance() {
		return this.performance;
	}
	
	public void changePerformance(int score) {
		this.performance = this.performance + score;
	}

	public Agent(AgentProgram aProgram) {
		program = aProgram;
	}

	public Action execute(Percept p) {
		if (program != null) {
			return program.execute(p);
		}
		return NoOpAction.NO_OP;
	}
}
