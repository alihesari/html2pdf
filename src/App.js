import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );

    return (
      <BrowserRouter>
        <Layout>{routes}</Layout>
      </BrowserRouter>
    );
  }
}

export default App;
