import React, { useState } from "react";
import Axios from "axios";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// App components

//App context

export default function Client() {
  //rq api
  const [beers, setbeers] = useState;

  Axios.get("http://localhost:8080/Beers/")
    .then(function(response) {
      setbeers(response.data);
      console.log(setbeers(response.data));
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div className="Client">
      <h1>Vous êtes CLIENT</h1>
      <ul></ul>
    </div>
  );
}
