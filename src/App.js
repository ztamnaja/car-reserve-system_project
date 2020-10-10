// should move to Routes.js later.

import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
// import Register from "./components/pages/Login";
// import Index from "./components/pages/Login"; // reservation page
import Home from "./components/pages/Home";
import Login from "./components/pages/Home";
import Location from "./components/pages/Location";
import Car from "./components/pages/Car";
import Reservation from "./components/pages/Reservation";
import Userinfo from "./components/pages/UserInfo";

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
        <Route exact path="/reservation" component={Reservation} />
        <Route exact path="/reservation/selectcar" component={Car} />
        <Route
          exact
          path="/reservation/selectcar/userinfo"
          component={Userinfo}
        />
        {/* <Redirect to="/reservation" /> */}
      </Switch>
    </div>
  );
}

export default App;
