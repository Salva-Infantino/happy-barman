import React from "react";
import Axios from "axios";

// App components

//App context

export default function App() {
  const userlogin = "";
  const userpass = "";

  return (
    <div className="App">
      <h1>Bienvenue&nbsp;!</h1>
      <form>
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
    </div>
  );
}
