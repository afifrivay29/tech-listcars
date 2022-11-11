import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container, Row, Col, Spinner } from "reactstrap";
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
                      <SearchBar
                        {...props.searchProps}
                        placeholder="Search..."
                      />
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
