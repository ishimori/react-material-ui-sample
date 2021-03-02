import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import CalendarPage from "./components/pages/CalendarBoard/container";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const store = createStore(rootReducer);

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
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
            <Provider store={store}>
              <CalendarPage />
            </Provider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
