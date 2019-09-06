import React, { useState } from "react";
import axios from "axios";

// App components
import Client from "./components/client";
import Barman from "./components/barman";

export default function App() {
  const [userLogin, setuserLogin] = useState();
  const [userPass, setuserPass] = useState();
  const [isLogged, setisLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    userid: "",
    username: "",
    role: "",
    islogged: false
  });
  //rq api
  const handleSubmit = ev => {
    ev.preventDefault();
    axios
      .post("http://localhost:8080/auth/local", {
        identifier: userLogin,
        password: userPass
      })
      .then(response => {
        setisLogged(true);
        const user = response.data.user;
        const token = response.data.jwt;
        //console.log(user);
        setCurrentUser({
          userid: user.id,
          username: user.username,
          role: user.role.id,
          islogged: true
        });
      })
      .catch(error => {
        console.log("An error occured:", error);
      });
  };

  const handleUserName = ev => {
    setuserLogin(ev.currentTarget.value);
  };

  const handleUserPass = ev => {
    setuserPass(ev.currentTarget.value);
  };

  return (
    <div className="App">
      {isLogged ? (
        currentUser.role === 2 ? (
          <Client />
        ) : (
          <Barman />
        )
      ) : (
        <>
          <h1>Bienvenue&nbsp;!</h1>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={handleUserName} />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handleUserPass} />
            </p>
            <input type="submit" value="Se connecter" />
          </form>
        </>
      )}
    </div>
  );
}
