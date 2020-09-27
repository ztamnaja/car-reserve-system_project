import React from "react";
import "./App.css";
// import ReserveCarForm from "./components/reservation/reserveCarForm"; // move to index page.
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import Register from "./components/pages/Login";
// import Index from "./components/pages/Login"; // reservation page
import Home from "./components/pages/Home";
import Login from "./components/pages/Home";
import Location from "./components/pages/Location";
import CarAndService from "./components/pages/CarAndService";
import Reservation from "./components/pages/Reservation";
function App() {
  return (
    // <React.StrictMode>
    //   <ReserveCarForm />
    // </React.StrictMode>

    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Index} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/register" component={Register} /> */}
        {/* <Route exact path="/home" component={Home} /> */}
        {/* <Route exact path="/location" component={Location} /> */}
        {/* <Route exact path="/carandservice" component={CarAndService} /> */}
        <Route exact path="/reservation" component={Reservation} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
