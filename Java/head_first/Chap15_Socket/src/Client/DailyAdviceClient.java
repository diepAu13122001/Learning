package Client;

import java.io.*;
import java.net.*;

public class DailyAdviceClient {
	public void go() {
		try {
			Socket s = new Socket("127.0.0.1", 4242);

			InputStreamReader streamReader = new InputStreamReader(s.getInputStream());

			BufferedReader reader = new BufferedReader(streamReader);

			String advice = reader.readLine();
			System.out.println("This is advice for today: " + advice);

			reader.close();

		} catch (Exception e) {
			// TODO: handle exception
			e.getStackTrace();
		}
	}
	
	public static void main(String[] args) {
		DailyAdviceClient client = new DailyAdviceClient();
		System.out.println("Client");
		client.go();
	}
}
