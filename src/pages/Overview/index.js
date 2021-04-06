import React from "react";
import {
  AppstoreAddOutlined,
  LinkOutlined,
  MailOutlined,
  RestOutlined,
} from "@ant-design/icons";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { overview } from "../../Facker";

import "./Overview.scss";

const Overview = () => {
  const Cell = ({ value }) => {
    if (value === "link") return <LinkOutlined />;
    if (value === "email") return <MailOutlined />;
  };

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Type",
      accessor: "type",
      Cell,
      minWidth: 70,
      style: {
        display: "flex",
        justifyContent: "center",
      },
    },
    {
      Header: "Status",
      accessor: "status",
      minWidth: 80,
      Cell: (props) => (
        <div
          className={`status-cell ${props.value === "open" ? "green" : "red"}`}
        >
          <span className="text-capitalize text-white text-center d-block">
            {props.value}
          </span>
        </div>
      ),
      style: {
        display: "flex",
        justifyContent: "center",
      },
    },
    {
      Header: "Responses",
      accessor: "responses",
      style: {
        display: "flex",
        justifyContent: "center",
      },
    },
    {
      Header: "Date Created",
      accessor: "dateCreated",
      style: {
        display: "flex",
        justifyContent: "center",
      },
    },
    {
      Header: "Action",
      Cell: () => (
        <Button className="btn btn-danger text-center">
          <RestOutlined />
        </Button>
      ),
      style: {
        display: "flex",
        justifyContent: "center",
      },
    },
  ];

  return (
    <Card className="px-4 py-3">
      <div className="d-flex flex-row justify-content-between mb-3">
        <span style={{ fontWeight: 500, fontSize: 20 }}>Collect Responses</span>
        <Button className="btn btn-primary d-flex align-items-center">
          <span style={{ fontSize: 13 }}>Add</span>
          <AppstoreAddOutlined style={{ fontSize: 15, marginLeft: 5 }} />
        </Button>
      </div>

      <div className="main-table">
        <ReactTable
          data={overview}
          columns={columns}
          defaultPageSize={5}
          style={{ borderRadius: 5 }}
        />
      </div>
    </Card>
  );
};

export default Overview;
