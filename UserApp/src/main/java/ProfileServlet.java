

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.parser.Cookie;

/**
 * Servlet implementation class ProfileServlet
 */
@WebServlet("/ProfileServlet")
public class ProfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public ProfileServlet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		javax.servlet.http.Cookie[] cookies = request.getCookies();
		if(cookies!=null) {
			javax.servlet.http.Cookie ck = cookies[0];
			String username = ck.getValue();
			if(username != null && username.equals("cvr")) {
				PrintWriter out=response.getWriter();
				out.println("User Details:");
				out.println("Username:" + username);
				out.println("Name:" + username.toUpperCase());
				out.println("<a href=LogoutServlet>Logout</a>");
			}else {
				request.getRequestDispatcher("login.html").include(request,  response);
			}
		}else {
			request.getRequestDispatcher("login.html").include(request,  response);
		}
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
