import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

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
    dataField: "link",
    text: "Action",
    formatter: (rowContect, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" style={{ marginRight: "8px" }}>
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="dark" style={{ marginRight: "8px" }}>
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>
          <Link>
            <Button color="dark" style={{ marginRight: "8px" }}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </Link>
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

const TableComponent = (props) => {
  return (
    <div>
      <Container>
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.users}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="dark" style={{ marginRight: "8px" }}>
                      <FontAwesomeIcon icon={faUserPlus} /> Create
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div style={{ float: "right", marginBottom: "10px" }}>
                    <SearchBar {...props.searchProps} placeholder="Search..." />
                  </div>
                </Col>
              </Row>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TableComponent;
