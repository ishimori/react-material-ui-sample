import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import CalendarPage from "./components/pages/CalendarBoard/index";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/calendar">calendar</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" exact>
            <ProductPage />
          </Route>
          <Route path="/calendar" exact>
            <CalendarPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
