import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { Error404 } from "./components/Error404";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink
            to="/"
            exact
            className="btn btn-primary"
            activeClassName="active"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            className="btn btn-primary"
            activeClassName="active"
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className="btn btn-primary"
            activeClassName="active"
          >
            Contacto
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/nosotros/:id">
            <Users />
          </Route>
          <Route path="/nosotros">
            <About />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
