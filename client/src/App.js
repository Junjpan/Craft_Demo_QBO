import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Header from "./components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect from="/" to="/app/projects" />
        <Route path="/app/projects/" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
