import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home/Home";
import Rules from "./components/pages/Rules";
import BikeRoutes from "./components/pages/BikeRoutes";
import PotsdamRide from "./components/pages/bikeRoutes/PotsdamRide";
import CenterRide from "./components/pages/bikeRoutes/CenterRide";
import RingRide from "./components/pages/bikeRoutes/RingRide";
import TemplehofRide from "./components/pages/bikeRoutes/TemplehofRide";
import PageNotFound from "./components/layout/PageNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/routes" component={BikeRoutes} />
        <Route exact path="/PotsdamRide" component={PotsdamRide} />
        <Route exact path="/TemplehofRide" component={TemplehofRide} />
        <Route exact path="/CenterRide" component={CenterRide} />
        <Route exact path="/RingRide" component={RingRide} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
