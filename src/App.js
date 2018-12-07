import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "@babel/polyfill";

import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
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
