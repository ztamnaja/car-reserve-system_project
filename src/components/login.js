import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Navbar from "./navbar";
import "./login.css";

class LoginPage extends Component {
  state = {
    notice: "",
    type: "tab2",
    autoLogin: true,
  };
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="layout">
          <Form
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
            Or{" "}
            <a href="">
              <Link to="/register">Create a new account!</Link>
            </a>
            {/* <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                register now!
              </Button>
            </Form.Item> */}
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
