import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <Button color="dark" style={{ marginRight: "8px" }}>
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;
