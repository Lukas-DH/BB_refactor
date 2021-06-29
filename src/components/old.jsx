import React from "react";
import { UserContext } from "./UserContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function Old() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return show ? (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Create Account</Card.Title>
              <hr></hr>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Card.Text>
                  Accept our terms by selecting the checkbox below
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Dash with my cash..." />
                  </Form.Group>
                </Card.Text>
                <Button onClick={handleCreate} variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Create Account</Card.Title>
              <hr></hr>
              <Form>
                <Card.Subtitle className="mb-2 text-muted">
                  Yes, we got you!
                </Card.Subtitle>

                <Button variant="primary" type="submit">
                  Create another account!
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
