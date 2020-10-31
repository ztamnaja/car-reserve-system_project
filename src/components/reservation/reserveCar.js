import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./reserveCar.css";
import axios from "axios";
import moment from "moment";
import StepOne from "./stepOne";
import ReserveCarFunc from "./reserveCarFunc";
import Navbar from "../navbar";
import { createBrowserHistory } from "history";
export const browserHistory = createBrowserHistory();

class ReserveCar extends Component {
  constructor(props) {
    super(props);
    console.log("input reservation form");
    console.log("App - Constructor", this.props);
    this.state = {
      isLoading: null,
      pickup_locationName: "Select your pick-up location...",
      pickup_Date: "",
      pickup_Time: "",
      return_locationName: "Select your return location...",
      return_Date: "",
      return_Time: "",
      List: [],
    };
    this.handleLocationChange_pickup = this.handleLocationChange_pickup.bind(
      this
    );
    this.handleLocationChange_return = this.handleLocationChange_return.bind(
      this
    );
    this.handleDateChange_pickup = this.handleDateChange_pickup.bind(this);
    this.handleDateChange_return = this.handleDateChange_return.bind(this);
    this.handleTimeChange_pickup = this.handleTimeChange_pickup.bind(this);
    this.handleTimeChange_return = this.handleTimeChange_return.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // get list item from location db. <to select location>
  async componentDidMount() {
    console.log("Location items List");
    const httpResponse = await axios.get("http://localhost:8000/Location");
    console.log("List httpResponse :", httpResponse.data);
    this.setState({ List: httpResponse.data });
    console.log("List after state:", typeof httpResponse.data);
  }

  handleLocationChange_pickup(event) {
    console.log("List", this.state.List);
    console.log("event:", event);
    // cannot get from event.target.value ??? donot know why?
    this.setState({
      pickup_locationName: event,
    });
  }
  handleLocationChange_return(event) {
    console.log("List", this.state.List);
    console.log("event:", event);
    // cannot get from event.target.value ??? donot know why?
    this.setState({
      return_locationName: event,
    });
  }

  handleDateChange_pickup = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      pickup_Date: moment(date).format("DD-MM-YYYY"),
    });
  };
  handleDateChange_return = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      return_Date: moment(date).format("DD-MM-YYYY"),
    });
  };
  handleTimeChange_pickup = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      pickup_Time: moment(date).format("HH:mm"),
    });
  };
  handleTimeChange_return = (date, dateString) => {
    console.log("data", date);
    console.log("dataString", dateString);
    this.setState({
      return_Time: moment(date).format("HH:mm"),
    });
  };

  // addReservationItems = async (params) => {
  //   await axios.post("http://localhost:8000/Reservation", params);
  // };

  // put data to reservation table

  handleSubmit = (event) => {
    // event.preventDefault(); // not reload when onclick submit.
    // console.log("click SELECT A CAR", event);

    this.setState({ isLoading: true });
    // let reserveCarData = {
    //   pickup_locationName: this.state.pickup_locationName,
    //   pickup_Date: this.state.pickup_Date,
    //   pickup_Time: this.state.pickup_Time,
    //   return_locationName: this.state.return_locationName,
    //   return_Date: this.state.return_Date,
    //   return_Time: this.state.return_Time,
    // };
    // console.log("reserveCarData in reservation page:", reserveCarData);
    localStorage.setItem("pickup_locationName", this.state.pickup_locationName);
    localStorage.setItem("pickup_Date", this.state.pickup_Date);
    localStorage.setItem("pickup_Time", this.state.pickup_Time);
    localStorage.setItem("return_locationName", this.state.return_locationName);
    localStorage.setItem("return_Date", this.state.return_Date);
    localStorage.setItem("return_Time", this.state.return_Time);
    // send datas and go to next page.
    // console.log("reserveCarData", reserveCarData);
    this.props.history.push({
      pathname: "/reservation/selectcar",
      // data: reserveCarData,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <StepOne />
        <ReserveCarFunc />
      </div>
    );
  }
}
export default withRouter(ReserveCar);
