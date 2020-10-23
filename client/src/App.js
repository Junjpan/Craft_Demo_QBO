import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Header from "./components/header/Header";
import Project from "./components/projects/project/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/app/projects/' exact component={Projects} />
        <Route
          path='/app/projects/projectdetais/:id'
          exact
          component={Project}
        />
        <Redirect from='/' to='/app/projects' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
