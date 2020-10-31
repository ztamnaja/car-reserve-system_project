import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;
export default function Navbar() {
  return (
    <div>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
          <Menu.Item key="1">
            <Link to="/home">HOME</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/reservation">RESERVATION</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/carmodel">CARS</Link>
          </Menu.Item>
          <Menu.Item key="4" disabled>
            <Link to="/service">SERVICES</Link>
          </Menu.Item>
          <Menu.Item key="5" disabled>
            <Link to="/location">LOCATIONS</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/login">LOGIN</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}
