import React, { useContext } from "react";
import { UserContext } from "../App";
import Card from "./context";

import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function Withdrawl() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [depositAmount, setdepositAmount] = React.useState("");
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field <= 0) {
      setStatus("Error: please enter positive amount");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    return true;
  }

  function handleCreate() {
    console.log(name, email);

    if (!validate(depositAmount, "please enter an amount")) return;
    if (!validate(depositAmount, "please enter positive amount")) return;
    setdepositAmount(depositAmount);
    ctx.useraccounts[0].balance -= parseFloat(depositAmount);
    console.log(ctx.useraccounts);

    clearForm();
    setStatus("Success!! Thanks for the dough...");
    setShow(true);
    setTimeout(() => setStatus(""), 3000);
  }

  function clearForm() {
    setdepositAmount("");
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card
            bgcolor="white"
            header="Withdrawl"
            txtcolor="black"
            status={status}
            body={
              <>
                <h5 className="card-subtitle">Current Balance</h5>
                <br />
                <h4 className="mb-2 text-muted">
                  {ctx.useraccounts[0].balance}
                </h4>
                <br />
                Withdrawl amount...
                <br />
                <input
                  type="number"
                  className="form-control"
                  id="deposit"
                  placeholder="Enter deposit amount"
                  value={depositAmount}
                  onChange={(e) => {
                    setdepositAmount(e.currentTarget.value);
                    setShow(false);
                  }}
                />
                <div id="depositHelpInline" class="form-text">
                  are you sure you want to do this?
                </div>
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleCreate}
                  disabled={show}
                >
                  Deposit
                </button>
              </>
            }
          />
        </Col>
        <Col>{JSON.stringify(ctx)}</Col>
      </Row>
    </Container>
  );
}
