import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useAuthState, useAuthDispatch } from "../contexts/AuthContext";

const Header = () => {
  const { user, isAuthenticated } = useAuthState();
  const { logout } = useAuthDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>🎥 Movie Manager</Navbar.Brand>
        <Nav className="ms-auto">
          {isAuthenticated ? (
            <>
              <span className="text-light me-3">Xin chào, {user.fullname}</span>
              <Button variant="outline-light" size="sm" onClick={logout}>Đăng xuất</Button>
            </>
          ) : (
            <span className="text-light">Chưa đăng nhập</span>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
