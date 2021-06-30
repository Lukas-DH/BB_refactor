import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function NavbarBank() {
  return (
    <>
      <style type="text/css">
        {`
        .nav-link {
            color: black;
        }
        .nav-link:hover {
            color: blue;
        }
        .navbar-light .navbar-brand:hover {
    color: red;
}
    `}
      </style>

      <Navbar className="p-4">
        <Navbar.Brand href="/" exact>
          BB
        </Navbar.Brand>
        <NavLink to="/createaccount" className="nav-link">
          Create Account
        </NavLink>
        <NavLink to="/deposit" className="nav-link">
          Deposit
        </NavLink>
        <NavLink to="/withdrawl" className="nav-link">
          Withdrawl
        </NavLink>

        <NavLink to="/alldata" className="nav-link">
          AllData
        </NavLink>

        <Container className="justify-content-end">
          <Nav>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
