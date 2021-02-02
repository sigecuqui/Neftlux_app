import { Route, Redirect, useLocation } from "react-router-dom";

function PrivateRoute(props) {
  const location = useLocation();
  const isLogedIn = !!localStorage.getItem("token");

  console.log("Private route", location);

  if (isLogedIn) {
    return <Route {...props} />;
  }

  return (
    <Redirect
      to={{
        pathname: "/login",
        state: { initialRoute: location }
      }}
    />
  );
}

export default PrivateRoute;