import React, { useContext } from "react";
import { UserContext } from "../App";
import Card from "./context";

import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = useContext(UserContext);

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
    ctx.useraccounts.push({ name, email, password, balance: 100 });
    console.log(ctx.useraccounts);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card
            bgcolor="white"
            header="Create Account"
            txtcolor="black"
            status={status}
            body={
              show ? (
                <>
                  Name
                  <br />
                  <input
                    type="input"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />{" "}
                  <div id="nameHelp" class="form-text">
                    Tell us!
                  </div>
                  <br />
                  Email address
                  <br />
                  <input
                    type="input"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email.
                  </div>
                  <br />
                  Password
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  <div id="passwordHelpInline" class="form-text">
                    Must be 8-20 characters long.
                  </div>
                  <br />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-light"
                    onClick={handleCreate}
                  >
                    Create Account
                  </button>
                </>
              ) : (
                <>
                  <h5>Success</h5>
                  <button
                    type="submit"
                    className="btn btn-light"
                    onClick={clearForm}
                  >
                    Add another account
                  </button>
                </>
              )
            }
          />
        </Col>
        <Col>{JSON.stringify(ctx)}</Col>
      </Row>
    </Container>
  );
}
