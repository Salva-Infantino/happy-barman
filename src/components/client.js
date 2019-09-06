import React, { useState, useEffect } from "react";
import Axios from "axios";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// App components

//App context

export default function Client() {
  //rq api
  const [beers, setbeers] = useState([]);
  const [neworder, setneworder] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/Beers/")
      .then(function(response) {
        setbeers(response.data);
        //console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addOrder = ev => {
    ev.preventDefault();
  };

  return (
    <div className="Client">
      <h1>Vous êtes CLIENT</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Alcool</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {beers.map(b => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.category}</td>
              <td>{b.alcool}%</td>
              <td>{b.price}€</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <form></form>
      <hr />
      <div className="myOrder">
        <table>
          <caption>Ma commande</caption>
        </table>
      </div>
    </div>
  );
}
