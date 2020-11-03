import React, { Component, useState, useCallback } from "react";
import { Link, withRouter  } from "react-router-dom";
import { createBrowserHistory,  } from "history";
import "antd/dist/antd.css";
import {
  Layout,
  Menu,
  form,
  Button,
  Form,
  Input,
  Checkbox,
  Radio,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import LoginForm from "./login";
import './login.css'
export const browserHistory = createBrowserHistory();
const { Header, Content, Footer } = Layout;

// // const CollectionCreateForm = ({ visible, onOk, onCancel }) => {
// const CollectionCreateForm = ({ visible, onCancel, onOk, form }) => {
//   // const [form] = Form.useForm(); 
//   const { getFieldDecorator } = form;
//   return (
//     <Modal
//       className='layout'
//       visible={visible}
//       // title="Create a new collection"
//       okText="Register"
//       cancelText="Cancel"
//       onCancel={onCancel}
//       onOk={onOk}
//       // onOk={() => {
//       //   form
//       //     .validateFields()
//       //     .then((values) => {
//       //       form.resetFields();
//       //       onOk(values);
//       //     })
//       //     .catch((info) => {
//       //       console.log("Validate Failed:", info);
//       //     });
//       // }}
//     >
//       <Form
//             className="login-form"
//             initialValues={{ remember: true }}
//             // onFinish={this.onFinish}
//           >
//             <Form.Item
//               name="username"
//               rules={[
//                 { required: true, message: "Please input your Username!" },
//               ]}
//             >
//               <Input
//                 prefix={<UserOutlined className="site-form-item-icon" />}
//                 placeholder="Username"
//               />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your Password!" },
//               ]}
//             >
//               <Input
//                 prefix={<LockOutlined className="site-form-item-icon" />}
//                 type="password"
//                 placeholder="Password"
//               />
//             </Form.Item>
//             <Form.Item>
//               <Form.Item name="remember" valuePropName="checked" noStyle>
//                 <Checkbox>Remember me</Checkbox>
//               </Form.Item>
//             </Form.Item>
//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="login-form-button"
//               >
//                 Log in
//               </Button>
//             </Form.Item>
//             Or{" "}
//             <a href="">
//               <Link to="/register">Create a new account!</Link>
//             </a>

//           </Form>
//     </Modal>
//   );
// };

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const handleOk = (values) => {
    console.log('Received values of form: ', values);
    this.props.history.push({
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
          <Menu.Item key="6"
            onClick={() => {
              setVisible(true);
            }}>
            LOGIN
            <LoginForm
              // ref={saveFormRef}
              visible={visible}
              onCancel={() => setVisible(false)}
              onOk={() => handleOk()}
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


