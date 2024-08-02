package main;

import javax.sound.midi.*;

public class MusicTest1 {
	public void play() throws MidiUnavailableException {
		Sequencer player = MidiSystem.getSequencer();
		player.open();
		System.out.println("We got a sequencer");

	}

	public static void main(String[] args) throws MidiUnavailableException {
		MusicTest1 mt = new MusicTest1();
		mt.play();
	}
}
