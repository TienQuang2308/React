<%-- 
    Document   : profile
    Created on : May 27, 2025, 6:55:52 PM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="model.User" %>
<%@ page import="model.User" %>
<%
    User user = (User) session.getAttribute("user");
    if (user == null) {
        response.sendRedirect("index.jsp");
        return;
    }
%>
<!DOCTYPE html>
<html>
<head><title>Profile</title></head>
<body>
    <img src="<%= request.getContextPath() + "/" + user.getAvatarUrl() %>" width="150" height="150" />
    <h2>Profile</h2>
    <p>ID: <%= user.getId() %></p>
    <p>Name: <%= user.getName() %></p>
    <p>Gender: <%= user.getGender() %></p>
    <p>Email: <%= user.getEmail() %></p>
    <p>Phone: <%= user.getPhone() %></p>
    <p>Address: <%= user.getAddress() %></p>
    <p>Role: <%= user.getRole() %></p>
    <p>Status: <%= user.getStatus() %></p>
    <br><a href="index.jsp">Back</a>
</body>
</html>