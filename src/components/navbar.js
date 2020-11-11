import React, { Component, useState, useCallback } from "react";
import { Link, useHistory  } from "react-router-dom";
import { createBrowserHistory,  } from "history";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import LoginForm from "./login";
import './login.css'
export const browserHistory = createBrowserHistory();
const { Header, Content, Footer } = Layout;

export default function Navbar() {
  let history = useHistory();
  const [visible, setVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log("Received values of form: ", values);
    history.push({
      pathname: "/register",
      // data: reserveCarData,
    });
    setVisible(false);
  };

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
          <Menu.Item
            key="6"
            onClick={() => {
              setVisible(true);
            }}
          >
            LOGIN
            <LoginForm
              // ref={saveFormRef}
              visible={visible}
              onCancel={() => setVisible(false)}
              onFinish ={() => setVisible(false)} // go to register
            />
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}


// export default class NavLoginModal extends Component {

//   state = { visible: false };
//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };
//   handleOk = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleCancel = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };
//   render() {
//     return (
//       <div>
//       <Header>
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
//           <Menu.Item key="1">
//             <Link to="/home">HOME</Link>
//           </Menu.Item>

//           <Menu.Item key="2">
//             <Link to="/reservation">RESERVATION</Link>
//           </Menu.Item>
//           <Menu.Item key="3">
//             <Link to="/carmodel">CARS</Link>
//           </Menu.Item>
//           <Menu.Item key="4" disabled>
//             <Link to="/service">SERVICES</Link>
//           </Menu.Item>
//           <Menu.Item key="5" disabled>
//             <Link to="/location">LOCATIONS</Link>
//           </Menu.Item>
//             <Menu.Item key="6"
//               type="primary"
              
//               onClick={this.showModal}>
//             LOGIN
//             <CollectionCreateForm
//               visible={this.state.visible}
//               // onOk={this.handleOk}
//               // onCancel={this.handleCancel}
//             />
//           </Menu.Item>

//         </Menu>
//       </Header>
//     </div>
//     );
//   }
// }


