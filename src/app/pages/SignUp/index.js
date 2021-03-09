import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import { useState } from "react";

import "./index.scss";

import { CreateUser, PickPlan, Payment } from "./sub";

function SignUp() {
  let { path, url } = useRouteMatch();

  const [credentials, setCredentials] = useState({});
  const [plan, setPlan] = useState(null);

  return (
    <div className="content">
      <ul className="content__list">
        <li className="content__list__item">
          <NavLink
            to={`${url}/create-user`}
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#E50914",
            }}
            className="content__list__item-text"
          >
            Create User
          </NavLink>
        </li>
        <li className="content__list__item">
          <NavLink
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#E50914",
            }}
            to={`${url}/plan`}
            className="content__list__item-text"
          >
            Pick a Plan
          </NavLink>
        </li>
        <li className="content__list__item">
          <NavLink
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#E50914",
            }}
            to={`${url}/payment`}
            className="content__list__item-text"
          >
            Payment
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/create-user`}>
          <CreateUser setCredentials={setCredentials} />
        </Route>
        <Route path={`${path}/plan`}>
          <PickPlan setPlan={setPlan} selectedPlan={plan} />
        </Route>
        <Route path={`${path}/payment`}>
          <Payment credentials={credentials} plan={plan} />
        </Route>
        <Redirect to={`${path}/create-user`} />
      </Switch>
    </div>
  );
}

export default SignUp;