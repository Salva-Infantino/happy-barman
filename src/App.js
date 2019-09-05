import React from "react";
//import Axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// App components
import Client from "./components/client";
import Barman from "./components/barman";

//App context

export default function App(props) {
  //const userlogin = "";
  //const userpass = "";

  const clickLogin = ev => {
    ev.preventDefault();
  };

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Authentification</Link>
          </li>
          <li>
            <Link to="/client">client</Link>
          </li>
          <li>
            <Link to="/barman">barman</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <h1>Bienvenue&nbsp;!</h1>
            <form onSubmit={clickLogin}>
              <p>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </p>
              <p>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </p>
              <input type="submit" value="Se connecter" />
            </form>
          </Route>
          <Route exact path="/client">
            <Client />
          </Route>
          <Route exact path="/barman">
            <Barman />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
