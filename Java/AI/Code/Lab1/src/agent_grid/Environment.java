package agent_grid;


public class Environment {
	public static final Action MOVE_LEFT = new DynamicAction("LEFT");
	public static final Action MOVE_RIGHT = new DynamicAction("RIGHT");
	public static final Action MOVE_UP = new DynamicAction("UP");
	public static final Action MOVE_DOWN = new DynamicAction("DOWN");
	public static final Action SUCK_DIRT = new DynamicAction("SUCK");

	public static final double DIRT_RATE = 0.2;
	public static final double WALL_RATE = 0.1;

	public enum LocationState {
		CLEAN, DIRTY, WALL
	}

	private EnvironmentState envState;
	private boolean isDone = false;// all squares are CLEAN
	private Agent agent = null;
	private String[][] map;

	public Environment(int columnNum, int rowNum) {
		this.map = new String[columnNum][rowNum];
		envState = new EnvironmentState(columnNum, rowNum);
	}

	// add an agent into the environment
	public void addAgent(Agent agent, String location) {
		// TODO
		this.agent = agent;
		envState.setAgentLocation(location);
	}

	public EnvironmentState getCurrentState() {
		return this.envState;
	}

	// Update environment state when agent do an action
	public EnvironmentState executeAction(Action action) {
		// TODO
		// curLocation is [column, row]
		int curLocation[] = {
				Integer.parseInt(
						envState.getAgentLocation().substring(1, envState.getAgentLocation().lastIndexOf(","))),
				Integer.parseInt(envState.getAgentLocation().substring(envState.getAgentLocation().lastIndexOf(",") + 2,
						envState.getAgentLocation().length() - 1)) };

		if (action == SUCK_DIRT) {
			envState.setLocationState(envState.getAgentLocation(), LocationState.CLEAN);
			this.agent.changePerformance(500);
		} else {
			this.agent.changePerformance(-10);
			if (action == MOVE_LEFT) {
				// check edge + check wall -90
				if (curLocation[0] == 0
						|| envState.getLocationState(envState.getAgentLocation()) == LocationState.WALL) {
					this.agent.changePerformance(-90);
				} else { // change -1 column
					envState.setAgentLocation("(" + (curLocation[0] - 1) + ", " + curLocation[1] + ")");
				}
			} else if (action == MOVE_RIGHT) {
				// check edge + check wall -90
				if (curLocation[0] == (this.map.length - 1)
						|| envState.getLocationState(envState.getAgentLocation()) == LocationState.WALL) {
					this.agent.changePerformance(-90);
				} else { // change +1 column
					envState.setAgentLocation("(" + (curLocation[0] + 1) + ", " + curLocation[1] + ")");
				}
			} else if (action == MOVE_UP) {
				// check edge + check wall -90
				if (curLocation[1] == 0
						|| envState.getLocationState(envState.getAgentLocation()) == LocationState.WALL) {
					this.agent.changePerformance(-90);
				} else { // change -1 row
					envState.setAgentLocation("(" + curLocation[0] + ", " + (curLocation[1] - 1) + ")");
				}
			} else if (action == MOVE_DOWN) {
				// check edge + check wall -90
				if (curLocation[1] == (this.map[0].length - 1)
						|| envState.getLocationState(envState.getAgentLocation()) == LocationState.WALL) {
					this.agent.changePerformance(-90);
				} else { // change +1 row
					envState.setAgentLocation("(" + curLocation[0] + ", " + (curLocation[1] + 1) + ")");
				}
			}
		}
		return envState;
	}

	// get percept <AgentLocation, LocationState> at the current location where
	// agent
	// is in.
	public Percept getPerceptSeenBy() {
		// TODO
		Percept p = new Percept(envState.getAgentLocation(), envState.getLocationState(envState.getAgentLocation()));
		return p;
	}

	public void step() {
		envState.display();
		String agentLocation = this.envState.getAgentLocation();
		Action anAction = agent.execute(getPerceptSeenBy());
		EnvironmentState es = executeAction(anAction);

		System.out.println("Agent Loc.: " + agentLocation + "\tAction: " + anAction);

		// check when agent done
		int countClean = 0;
		for (int i = 0; i < map.length; i++) {
			for (int j = 0; j < map[0].length; j++) {
				String location = "(" + i + ", " + j + ")";
				if (envState.getLocationState(location) == LocationState.CLEAN) {
					countClean++;
				}
			}
		}
		if (countClean == map.length * map[0].length)
			isDone = true;
		es.display();
	}

	public void step(int n) {
		for (int i = 0; i < n; i++) {
			step();
			System.out.println("-------------------------");
		}
	}

	public void stepUntilDone() {
		int i = 0;

		while (!isDone) {
			System.out.println("step: " + ++i);
			step();

			// print performance score when done all steps
			System.out.println("Performance of this agent is: " + this.agent.getPerformance());
			System.out.println("-------------------------");
		}
	}
}
