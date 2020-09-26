import React, { useState } from "react";
import "antd/dist/antd.css";
import "./reserveCarForm.css";
import { Input, Select, DatePicker, Space, Button, TimePicker } from "antd";
import moment from "moment";

const { Option } = Select;

class ReserveCarForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("input reservation form");
    console.log("App - Constructor", this.props);
    this.state = {
      pickup_locationName: "Select your pick-up location...",
      pickup_Date: "",
      pickup_Time: "",
      return_locationName: "",
      return_Date: new Date(),
      return_Time: new Date(),
      output: [],
      options: [
        {
          label: "Apple",
          value: "apple",
        },
        {
          label: "Mango",
          value: "mango",
        },
        {
          label: "Banana",
          value: "banana",
        },
        {
          label: "Pineapple",
          value: "pineapple",
        },
      ],
      // startDate: new Date(),
      // startTime: new Date(),
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLocationChange(event) {
    console.log("event:", event);
    // cannot get from event.target.value ??? donot know why?
    this.setState({
      pickup_locationName: event,
    });
  }

  handleDateChange = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      pickup_Date: moment(date).format("DD-MM-YYYY"),
    });
  };
  handleTimeChange = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      pickup_Time: moment(date).format("HH:mm"),
    });
  };

  // get list item from location db.
  // maybe input dropdown choose limit location
  // put data to reservation table
  handleSubmit(event) {
    console.log("click SELECT A CAR", event);
    alert("You just change localtion: " + this.state.pickup_locationName);
    alert("You just change date: " + this.state.pickup_Date);
    alert("You just change time: " + this.state.pickup_Time);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <div className="InputForm">
            <Input.Group compact>
              <Select
                value={this.state.pickup_locationName}
                style={{ width: "50%" }}
                defaultValue="Select your pick-up location..." // set at state
                onChange={this.handleLocationChange}
              >
                {this.state.options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}

                {/* <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
                <Option value="Option3">Option3</Option> */}
              </Select>
              <DatePicker
                style={{ width: "30%" }}
                defaultValue={moment("30/08/2020", "DD/MM/YY")}
                selected={this.state.pickup_Date}
                name="pickup_Date"
                format="DD/MM/YY"
                // selected={this.state.pickup_Date}
                onChange={this.handleDateChange}
              />
              <TimePicker
                name="pickup_Time"
                // value={this.state.pickup_Time}
                showTime={{ format: "HH:mm" }}
                defaultValue={moment("12:08", "HH:mm")}
                format=" HH:mm"
                onChange={this.handleTimeChange}
              />
            </Input.Group>

            {/* <Input.Group compact>
              <Select style={{ width: "50%" }} defaultValue="Option1">
                <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
              </Select>
              <DatePicker style={{ width: "30%" }} />
              <TimePicker
                showTime={{ format: "HH:mm" }}
                format=" HH:mm"
                onChange={this.handleDateChange}
                onOk={this.handleSubmit}
              />
            </Input.Group> */}

            <Space align="baseline" className="space-align-block">
              <Button
                type="primary"
                onClick={this.handleSubmit}
                htmlFor="submit"
              >
                SELECT A CAR
              </Button>
            </Space>
          </div>
        </form>
      </div>
    );
  }
}
export default ReserveCarForm;
