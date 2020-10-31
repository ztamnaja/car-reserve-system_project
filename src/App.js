// should move to Routes.js later.

import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Register from "./components/pages/Login";
// import Index from "./components/pages/Login"; // reservation page
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Location from "./components/pages/Location";
import CarModel from "./components/pages/CarModel";
import Reservation from "./components/pages/Reservation";
import Car from "./components/pages/SelectCar";
import Reserveinfo from "./components/pages/ReserveInfo";





function App() {
  return (
    // <React.StrictMode>
    //   <ReserveCarForm />
    // </React.StrictMode>

    <div className="App">
      {/* <BrowserRouter> */}
        <Switch>
          {/* <Route exact path="/" component={Index} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/carmodel" component={CarModel} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/reservation/selectcar" component={Car} />
          <Route
            exact
            path="/reservation/selectcar/reserveinfo"
            component={Reserveinfo}
          />
          <Redirect to="/home" />
        </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
