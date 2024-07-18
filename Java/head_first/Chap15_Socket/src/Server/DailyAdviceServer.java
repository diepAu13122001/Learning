package Server;

import java.io.*;
import java.net.*;

public class DailyAdviceServer {
	String adviceList[] = { "Pay your bills first", "Go for walk now!" };

	public void go() {
		try {
			ServerSocket s = new ServerSocket(4242);
			while (true) {
				Socket soc = s.accept();

				PrintWriter writer = new PrintWriter(soc.getOutputStream());
				String advice = getAdvice();
				writer.println(advice);
				writer.close();

				System.out.println(advice);

			}
		} catch (Exception e) {
			// TODO: handle exception
			e.getStackTrace();
		}
	}

	public String getAdvice() {
		return this.adviceList[(int) Math.random() * this.adviceList.length];
	}

	public static void main(String[] args) {
		DailyAdviceServer server = new DailyAdviceServer();
		System.out.println("Server");
		server.go();
	}
}
