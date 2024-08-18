package demo;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

@WebServlet("/uploadFile")
public class UploadFileController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		try {
			DiskFileItemFactory factory = new DiskFileItemFactory();

			ServletFileUpload sf = new ServletFileUpload(factory);

			List<FileItem> multiFiles = sf.parseRequest(request);

			String folder_url = "C:/Users/diepa/OneDrive/Documents/Working/Learning/Java/Code/DemoFolder/";
			PrintWriter out = response.getWriter();
			for (FileItem item : multiFiles) {
				item.write(new File(folder_url + item.getName()));
				out.println("File uploaded!");
			}

		} catch (Exception e) {

		}
	}

}
