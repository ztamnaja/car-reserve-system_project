import React, { Component } from "react";
import axios from "axios";
import { List, Button, Statistic, Descriptions, Steps } from "antd";
import "antd/dist/antd.css";
import "./userInfo.css";

const { Step } = Steps;
class Userinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      loading: true,
      carSelected: [],
    };
  }
  async componentDidMount() {
    console.log("Cars List");
    const pickup_locationName = localStorage.getItem("pickup_locationName");
    const pickup_Date = localStorage.getItem("pickup_Date");
    const pickup_Time = localStorage.getItem("pickup_Time");
    const return_locationName = localStorage.getItem("return_locationName");
    const return_Date = localStorage.getItem("return_Date");
    const return_Time = localStorage.getItem("return_Time");
    const carId = localStorage.getItem("carId");

    //get items from mysql>>
    let carSelected = [];
    const httpResponse = await axios.get(`http://localhost:8000/car/${carId}`);
    console.log("car selected:", httpResponse.data);
    carSelected.push(httpResponse.data);
    console.log("carSelected", carSelected.length);
    this.setState({
      List: httpResponse.data,
      pickup_locationName: pickup_locationName,
      return_locationName: return_locationName,
      pickup_Date: pickup_Date,
      pickup_Time: pickup_Time,
      return_Date: return_Date,
      return_Time: return_Time,
      carSelected: carSelected,
    });
    console.log("List after state:", typeof httpResponse.data);
  }
  render() {
    return (
      <div className="userInfo">
        <Steps size="small" progressDot current={2}>
          <Step title="RESERVE A CAR" />
          <Step title="SELECT A CAR" />
          <Step title="YOUR INFOMATION" />
        </Steps>
        <div>
          infomations
          <div id="reservationInfo">
            <Descriptions size="small" column={2}>
              <div>
                Pick-up Location: {this.state.pickup_locationName}
                <br />
                Pick-up Date: {this.state.pickup_Date}
                <br />
                Pick-up Time: {this.state.pickup_Time}
                <br />
              </div>
              <div className="divisionLine">
                Return Location: {this.state.return_locationName}
                <br />
                Return Date: {this.state.return_Date}
                <br />
                Return Time: {this.state.return_Time}
                <br />
              </div>
            </Descriptions>
          </div>
          <div id="selectcarId">
            <List
              className="demo-loadmore-list"
              size="large"
              itemLayout="horizontal"
              dataSource={this.state.carSelected}
              header={<div></div>}
              renderItem={(item) => (
                <List.Item key={item.carId}>
                  {/* item.carImg */}
                  <img
                    width={200}
                    alt="carSamplePic"
                    src="https://www.autoduqaan.com/images/no-image-big.jpg"
                  />
                  <Statistic title={item.carBrandName} value={item.carName} />
                </List.Item>
              )}
            />
          </div>
        </div>

        {/* end infomations */}
        <div>
          Pick-up Location: {this.state.pickup_locationName}
          <br />
          Pick-up Date: {this.state.pickup_Date}
          <br />
          Pick-up Time: {this.state.pickup_Time}
          <br />
        </div>
      </div>
    );
  }
}

export default Userinfo;
