package agent_grid;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

import agent_grid.Environment.LocationState;

public class EnvironmentState {
	private Map<String, Environment.LocationState> state = new HashMap<String, Environment.LocationState>();
	private String agentLocation = null;

	public EnvironmentState(int columnNum, int rowNum) {
		// clean state
		for (int i = 0; i < columnNum; i++) {
			for (int j = 0; j < rowNum; j++) {
				String location = "(" + i + ", " + j + ")";
				this.state.put(location, Environment.LocationState.CLEAN);
			}
		}

		// dirty state + wall
		int dirtyNum = (int) Math.round(columnNum * rowNum * Environment.DIRT_RATE);
		int wallNum = (int) Math.round(columnNum * rowNum * Environment.WALL_RATE);
		Random random = new Random();
		// ints -> range (a, b)
		// limit is list.size
		// distinct to check repeated items
		List<Integer> list = random.ints(0, columnNum * rowNum).distinct().limit(dirtyNum + wallNum).boxed()
				.collect(Collectors.toList());

		List<Integer> dirtSquares = list.subList(0, dirtyNum);
		List<Integer> walls = list.subList(dirtyNum, list.size());

		for (Integer d : dirtSquares) {
			this.state.put(this.state.keySet().toArray()[d].toString(), Environment.LocationState.DIRTY);
		}
		
		for (Integer w : walls) {
			this.state.put(this.state.keySet().toArray()[w].toString(), Environment.LocationState.WALL);
		}

	}

	public void setAgentLocation(String location) {
		this.agentLocation = location;
	}

	public String getAgentLocation() {
		return this.agentLocation;
	}

	public LocationState getLocationState(String location) {
		return this.state.get(location);
	}

	public void setLocationState(String location, LocationState locationState) {
		this.state.put(location, locationState);
	}

	public void display() {
		System.out.println("Environment map:");
		for (Map.Entry<String, Environment.LocationState> entry : this.state.entrySet()) {
			System.out.println(entry);
		}
	}
}