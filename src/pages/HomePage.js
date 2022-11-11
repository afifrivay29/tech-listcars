import React, { Component } from "react";
import TableComponent from "../components/TableComponent";

export default class HomePage extends Component {
  state = {
    users: [
      {
        id: "abcd",
        name: "Abjad",
        origin: "Indonesia",
        temperament: "Active",
        description: "Sangat Lincah",
      },
      {
        id: "bcde",
        name: "Abjad 2",
        origin: "Malaysia",
        temperament: "Strong",
        description: "Sangat Manja",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">List About Cats</h1>
        <TableComponent users={this.state.users} />
      </div>
    );
  }
}
