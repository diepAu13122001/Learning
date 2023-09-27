package agent_grid;

import java.util.Random;

public class AgentProgram {

	public Action execute(Percept p) {// location, status
		// TODO
		// if A -> random: right, down
		// if B -> random: left, down
		// if C -> random: up, left
		// if D -> random: up, right
		if (p.getLocationState() == Environment.LocationState.DIRTY) {
			return Environment.SUCK_DIRT;
		} else {
			int rd = new Random().nextInt(4);
			if (rd == 0) {
				return Environment.MOVE_DOWN;
			} else if (rd == 1) {
				return Environment.MOVE_LEFT;
			} else if (rd == 2) {
				return Environment.MOVE_RIGHT;
			} else if (rd == 3) {
				return Environment.MOVE_UP;
			}
		}
		return NoOpAction.NO_OP;

		
	}
}