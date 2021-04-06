import React from "react";
import { RestOutlined, BarcodeOutlined } from "@ant-design/icons";
import { Checkbox } from "pretty-checkbox-react";

import "@djthoms/pretty-checkbox";
import Button from "../../components/Button";
import Card from "../../components/Card";

import "./Weblink.scss";

const Weblink = () => {
  return (
    <Card className="px-4 py-3">
      <section className="weblink">
        <div className="d-flex justify-content-between">
          <span style={{ fontWeight: 500, fontSize: 20 }}>Weblink</span>
          <Button className="btn btn-success">
            <span style={{ fontSize: 15 }}>Open</span>
          </Button>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-4">
              <span style={{ fontSize: 15 }}>Total Click</span>
              <p>21</p>
              <span style={{ fontSize: 15 }}>Total Responses</span>
              <p>19</p>
            </div>
            <div className="col-sm-6">
              <Card
                style={{ padding: "20px 40px", maxWidth: 400 }}
                className="d-flex justify-content-center"
              >
                <a className="link-weblink" href="#">
                  https://reactjs.org/docs/react-component.htmlhttps://reactjs.org/docs/react-component.htmlhttps://reactjs.org/docs/react-component.html
                </a>
              </Card>
            </div>
            <div className="col-sm-2 pt-3">
              <Button className="btn btn-primary me-2">
                <BarcodeOutlined />
              </Button>
              <Button className="btn btn-danger">
                <RestOutlined />
              </Button>
            </div>
          </div>
        </div>

        <div className="wrap-options">
          <span
            style={{
              fontWeight: 400,
              fontSize: 18,
              display: "block",
              marginBottom: 10,
            }}
          >
            Options
          </span>
          <Checkbox
            color="info"
            animation="smooth"
            shape="curve"
            onChange={() => console.log("success1")}
          >
            Multiple Resposes per Device
          </Checkbox>
          <Checkbox
            color="info"
            animation="smooth"
            shape="curve"
            onChange={() => console.log("success2")}
          >
            One Responses Per C1 Tag
          </Checkbox>
        </div>
      </section>
    </Card>
  );
};

export default Weblink;
