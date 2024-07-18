package main;

import javax.sound.midi.*;

public class MiniMusicApp {
	public static void main(String[] args) {
		MiniMusicApp mini = new MiniMusicApp();
		if (args.length < 2) {
			System.out.println("Don't forget the instrument and note agrs");
		} else {
			int instrument = Integer.parseInt(args[0]);
			int note = Integer.parseInt(args[1]);
			mini.play(instrument, note);
		}

		System.out.println("Play");
	}

	public void play(int instrument, int note) {
		try {
			// initialize a musical CD player
			Sequencer player = MidiSystem.getSequencer();
			player.open();

			// is a CD with only one song
			Sequence sq = new Sequence(Sequence.PPQ, 4);

			// create a track to play every notes in the song
			Track track = sq.createTrack();

			MidiEvent event = null;

			ShortMessage first = new ShortMessage();
			first.setMessage(192, 1, instrument, 0);
			MidiEvent changeInstrument = new MidiEvent(first, 1);
			track.add(changeInstrument);

			ShortMessage a = new ShortMessage();
			a.setMessage(144, 1, note, 100);
			MidiEvent noteOn = new MidiEvent(a, 1);
			track.add(noteOn);

			ShortMessage b = new ShortMessage();
			b.setMessage(128, 1, note, 100);
			MidiEvent noteOff = new MidiEvent(b, 16);
			track.add(noteOff);

			player.setSequence(sq);

			player.start();

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
