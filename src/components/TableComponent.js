import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  Container,
  Spinner,
} from "reactstrap";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    headerStyle: () => {
      return { width: "20%" };
    },
  },
  {
    dataField: "origin",
    text: "Origin",
    sort: true,
    headerStyle: () => {
      return { width: "20%" };
    },
  },
  {
    dataField: "temperament",
    text: "Temperament",
    sort: true,
    headerStyle: () => {
      return { width: "20%" };
    },
  },
  {
    dataField: "action",
    text: "Action",
    formatter: (text, record) => {
      return (
        <div>
          <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
            Details
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>Deskripsi :</CardBody>
              <CardBody>{record.description}</CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      );
    },
    headerStyle: () => {
      return { width: "24%" };
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getCatsList: state.cats.getCatsList,
    errorCatsList: state.cats.errorCatsList,
  };
};

const TableComponent = (props) => {
  return (
    <div>
      <Container>
        {props.getCatsList ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={props.getCatsList}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <Container>
                <div style={{ float: "right", marginBottom: "10px" }}>
                  <SearchBar {...props.searchProps} placeholder="Search..." />
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </Container>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-center">
            {props.errorCatsList ? (
              <h4>{props.errorCatsList}</h4>
            ) : (
              <Spinner color="dark" />
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
