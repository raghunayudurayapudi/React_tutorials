import React from "react";
import Home from "./Home";
import About from "./About";
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
// localhost:8000/about
export default function RoutingExample() {
  return (
    <Router basename='/my-app'>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/raghu/25">dashboard - Raghu</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/nancy/24">dashboard - Nancy</NavLink>
          </li>
        </ul>
        <Switch>
        <Route  exact path="/">
            <Home />
          </Route>

          <Route  exact path="/about" component={About} />
          <Route exact   path="/dashboard/:id/:age">
            <Dashboard />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}


// protected routes 
// redirect to different url 
// nested routing 
// 404 error handling 