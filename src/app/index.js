import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";

import { Layout, PrivateRoute, PublicRoute } from "./components";
import { Home, Login, Content, SingleContentEntry } from "./pages";

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites(favorites.concat(id));
    }
  };

  return (
    <Router>
      <Layout>
        <Switch>
          <PublicRoute exact path="/">
            <Home favorites={favorites} toggleFavorite={toggleFavorite} />
          </PublicRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/movies">
            <Content favorites={favorites} toggleFavorite={toggleFavorite} />
          </PrivateRoute>
          <PrivateRoute exact path="/movies/:itemId">
            <SingleContentEntry
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          </PrivateRoute>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;