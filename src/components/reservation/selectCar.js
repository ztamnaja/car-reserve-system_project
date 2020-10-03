import React, { Component } from "react";
import "antd/dist/antd.css";
// import "./selectCar.css";
import axios from "axios";
import { List, Button, Space, Descriptions, Divider } from "antd";

class SelectCar extends Component {
  state = {
    List: [],
    loading: true,
  };
  // this.props.location.state
  // get list item from cars db.
  async componentDidMount() {
    console.log("Cars List");
    const pickup_locationName = localStorage.getItem("pickup_locationName");
    const return_locationName = localStorage.getItem("return_locationName");
    console.log("pickup_locationName", pickup_locationName);
    console.log("return_locationName", return_locationName);
    const httpResponse = await axios.get("http://localhost:8000/car");
    console.log("List httpResponse :", httpResponse.data);
    this.setState({
      List: httpResponse.data,
      pickup_locationName,
      return_locationName,
    });
    console.log("List after state:", typeof httpResponse.data);
  }
  render() {
    const loading = this.state;

    return (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <List
          className="demo-loadmore-list"
          size="large"
          itemLayout="horizontal"
          dataSource={this.state.List}
          header={<div>Header</div>}
          renderItem={(item) => (
            <List.Item
              key={item.carId}
              extra={
                <img
                  width={200}
                  alt="carSamplePic"
                  src="https://www.autoduqaan.com/images/no-image-big.jpg"
                />
              }
            >
              <div>
                <List.Item.Meta
                  className="eachElement"
                  title={item.carName}
                  description={item.carBrandName}
                />
                <Descriptions layout="vertical">
                  {/* <Descriptions.Item label="Model" span={1}>
                    {item.carName}
                  </Descriptions.Item> */}
                  <Descriptions.Item label="Price">
                    {item.carPrice}
                    <Space align="baseline" className="space-align-block">
                      <Button
                        type="primary"
                        onClick={this.handleSubmit}
                        htmlFor="submit"
                      >
                        SELECT
                      </Button>
                    </Space>
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default SelectCar;

// return (
//   <List
//     itemLayout="horizontal"
//     dataSource={this.state.List}
//     renderItem={(item) => (
//       <List.Item>
//         <Card
//           style={{ width: 250 }}
//           cover={
//             <img
//               alt="example"
//               src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//             />
//           }
//           actions={[<EllipsisOutlined key="ellipsis" />]}
//         >
//           <Meta title={item.carName} description={item.carId} />
//           <Space align="baseline" className="space-align-block">
//             <Button
//               type="primary"
//               onClick={this.handleSubmit}
//               htmlFor="submit"
//             >
//               SELECT
//             </Button>
//           </Space>
//         </Card>
//       </List.Item>
//     )}
//   />
// );
