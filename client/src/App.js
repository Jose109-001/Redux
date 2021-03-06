import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";

import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/orderHistory" component={OrderHistory} />
        <Route exact path="/products/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
