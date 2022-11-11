import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getCatsList } from "../actions/catAction";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(getCatsList());
  }
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">List About Cats</h1>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomePage);
