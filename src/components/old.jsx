import React, { useContext } from "react";
import { UserContext } from "../App";
import Card from "./context";

import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function Alldata() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = useContext(UserContext);

  const map1 = ctx.useraccounts.map((x, index) => (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card
            bgcolor="white"
            header={ctx.useraccounts[0].name + "'s account"}
            txtcolor="black"
            status={status}
            body={
              <>
                <h5 className="card-subtitle">Name</h5>
                <h4 className="mb-2 text-muted">{x.name}</h4>

                <h5 className="card-subtitle">Email</h5>
                <h4 className="mb-2 text-muted">{x.email}</h4>

                <h5 className="card-subtitle">Password</h5>
                <h4 className="mb-2 text-muted">********</h4>

                <h5 className="card-subtitle">balance</h5>
                <h4 className="mb-2 text-muted">{x.balance}</h4>
              </>
            }
          />
        </Col>
        <Col>{JSON.stringify(ctx)}</Col>
      </Row>
    </Container>
  ));

  console.log(map1[0]);

  return <>{map1}</>;
}
