package student;

public class Queen {
	private int row;
	private int column;

	public Queen(int row, int column) {
		super();
		this.row = row;
		this.column = column;
	}

	public void move() {
		// Enter your code here
		if (row < 7) {
			this.row++;

		}

	}

	// check whether this Queen can attack the given Queen (q)
	public boolean isConflict(Queen q) {
		// Enter your code here
		if (q.getRow() == this.row || q.getColumn() == this.column) {
			return true;
		}
		return false;
	}

	public int getRow() {
		return row;
	}

	public int getColumn() {
		return column;
	}

	public void setRow(int row) {
		this.row = row;
	}

	@Override
	public String toString() {
		return "(" + row + ", " + column + ")";
	}
}
