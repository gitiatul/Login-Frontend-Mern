import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { UserContext } from "../App";

const TopNavbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <NavLink className="links" to="/contact">
            Contact
          </NavLink>
          <NavLink className="links" to="/about">
            About
          </NavLink>
          <NavLink className="links" to="/logout">
            Logout
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink className="links" to="/signup">
            Signup
          </NavLink>
          <NavLink className="links" to="/signin">
            Login
          </NavLink>
        </>
      );
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className="brandlogo" to="/">
            <h4>LOGIN APP</h4>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <RenderMenu />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
