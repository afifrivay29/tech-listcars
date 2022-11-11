import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";

export default class DetailUserPage extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Page</h1>
      </Container>
    );
  }
}
