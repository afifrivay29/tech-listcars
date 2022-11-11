import React, { Component } from "react";
import TableComponent from "../components/TableComponent";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">List About Cats</h1>
        <TableComponent />
      </div>
    );
  }
}
