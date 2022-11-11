import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";

export default class CreateUserPage extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Create User</h1>
      </Container>
    );
  }
}
