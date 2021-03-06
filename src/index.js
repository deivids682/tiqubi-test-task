import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProjectTimeOverviewPage from "./pages/ProjectTimeOverviewPage";
import ProjectDetailsProvider from "./providers/ProjectDetailsProvider";

const routing = (
  <ProjectDetailsProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={ProjectTimeOverviewPage} />
      </Switch>
    </Router>
  </ProjectDetailsProvider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
