import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Landing() {
  const ctx = useContext(UserContext);

  return (
    <>
      <Container>
        <Row>
          <Col className="text-center" as="h1">
            Bad Bank
          </Col>
        </Row>
        <Row>
          <Col className="text-center" as="h6">
            Thanks {ctx.useraccounts[0].name}! We dash with your cash
          </Col>
        </Row>
        <Row>
          <Col className="text-center p-5" as="h1">
            <Image
              src="logo.svg"
              className="img-fluid start-50"
              alt="Responsive image"
              style={{ width: "18rem" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
