// should move to Routes.js later.

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import Register from "./components/pages/Login";
// import Index from "./components/pages/Login"; // reservation page
import Home from "./components/pages/Home";
import Login from "./components/pages/Home";
import Location from "./components/pages/Location";
import Car from "./components/pages/Car";
import Reservation from "./components/pages/Reservation";
function App() {
  return (
    // <React.StrictMode>
    //   <ReserveCarForm />
    // </React.StrictMode>

    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Index} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/register" component={Register} /> */}
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/location" component={Location} /> */}
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/reservation/selectcar" component={Car} />
          <Redirect to="/reservation" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
