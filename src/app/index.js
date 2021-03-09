import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";
import store from "./store";

import { Layout, PrivateRoute, PublicRoute, ScrollToTop } from "./components";
import { Home, Login, Content, SingleContentEntry, SignUp } from "./pages";

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Layout>
       <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <button className="toggle-button" onClick={toggleTheme}>🌗</button>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/movies">
              <Content />
            </PrivateRoute>
            <PrivateRoute exact path="/movies/:itemId">
              <SingleContentEntry />
            </PrivateRoute>
            <Route path="/sign-up">
              <SignUp />
            </Route>
          </Switch>
           </ThemeProvider>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
