import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./index.scss";
import logo from "../../../assets/img/F.svg";
import Button from "../Button";

function Header({ onLogout }) {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img className="nav__img" src={logo} alt="logo-felix" />
          <img className="nav__img" src={logo} alt="logo-felix" />
          <img className="nav__img" src={logo} alt="logo-felix" />
        </Link>
        <Switch>
          <Route exact path="/login">
            {null}
          </Route>
          <Route exact path="/">
            <Button to="/login" size="large">
              Sign In
            </Button>
          </Route>
          <Route path="/sign-up">
            <Button to="/login" size="large">
              Sign In
            </Button>
          </Route>
          <Route path="*">
            <Button to="/" size="large" onClick={onLogout}>
              Logout
            </Button>
          </Route>
        </Switch>
      </nav>
    </header>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => {
      dispatch({ type: "LOGOUT" });
    },
  };
}

export default connect(null, mapDispatchToProps)(Header);