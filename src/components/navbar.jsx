import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        <Nav.Link href="/createaccount">Create Account</Nav.Link>
        <Nav.Link href="/deposit">Deposit</Nav.Link>
        <Nav.Link href="/withdrawl">Withdrawl</Nav.Link>
        <Nav.Link href="/balance">Balance</Nav.Link>
        <Nav.Link href="alldata">AllData</Nav.Link>
        <Nav.Link href="/old">old</Nav.Link>
        <Container className="justify-content-end">
          <Nav>
            <Nav.Link eventKey="link-2">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
