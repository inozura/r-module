import { FileOutlined, RestOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import ReactTable from "react-table-v6";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Button from "../../components/Button";
import Card from "../../components/Card";
import { email } from "../../Facker";

const Email = () => {
  const [data, setData] = useState(email);
  const [editor, setEditor] = useState();

  const columns = [
    {
      Header: "Email",
      Cell: (props) => (
        <input
          type="email"
          style={{ border: "none", textDecoration: "none" }}
          onChange={() =>
            setData((oldArray) => [...oldArray, { email: "", example: "" }])
          }
        />
      ),
    },
    {
      Header: "Type",
      minWidth: 70,
      style: {
        display: "flex",
        justifyContent: "center",
      },
    },
  ];

  return (
    <Card className="px-4 py-3">
      <section className="email-page">
        <h5 style={{ fontWeight: 500, fontSize: 20, marginBottom: 40 }}>
          Email
        </h5>
        <div className="d-flex flex-row justify-content-between align-items-center mb-2">
          <span style={{ fontWeight: 400, fontSize: 17 }}>Recepient</span>
          <div className="d-flex flex-row">
            <Button className="btn btn-primary me-2" style={{ fontSize: 13 }}>
              Excel{" "}
              <span>
                <FileOutlined />
              </span>
            </Button>
            <Button className="btn btn-danger" style={{ fontSize: 13 }}>
              Clear{" "}
              <span>
                <RestOutlined />
              </span>
            </Button>
          </div>
        </div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={1}
          collapseOnSortingChange={false}
          collapseOnPageChange={false}
          collapseOnDataChange={false}
          showPagination={false}
          showPaginationBottom={false}
          showPageSizeOptions={false}
          style={{ borderRadius: 5 }}
        />

        <div className="row mt-4 mb-5">
          <div className="col-md-4">
            <span style={{ fontWeight: 400, fontSize: 15, marginBottom: 5 }}>
              Sender Email
            </span>
            <input type="email" style={{ width: "100%" }} />
          </div>
          <div className="col-md-8">
            <span style={{ fontWeight: 400, fontSize: 15, marginBottom: 5 }}>
              Subject
            </span>
            <input type="text" style={{ width: "100%" }} />
          </div>
        </div>

        <Editor
          editorState={editor}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditor}
        />
      </section>
    </Card>
  );
};

export default Email;
