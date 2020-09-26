import React from "react";
import "./App.css";
import ReserveCarForm from "./components/reservation/reserveCarForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <ReserveCarForm />
      </React.StrictMode>
    );
  }
}

export default App;
