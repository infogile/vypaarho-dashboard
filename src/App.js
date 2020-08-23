import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Main } from "./layouts";
import { Product as ProductView } from "./views";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { clearCurrentProfile } from "./actions/profileAction";

// import { Provider } from "react-redux";
// import store from "./store";

// import PrivateRouter from "./components/common/PrivateRoute";
// import Landing from "./components/layout/landing";
// import Header from "./components/layout/header";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import EditProfile from "./components/create-profile/EditProfile";
// import Dashboard from "./components/dashboard/Dashboard";
// import Profile from "./components/profile/Profile";

// Check for token
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   setAuthToken(localStorage.jwtToken);
//   // Decode token and get user info exp
//   const decoded = jwt_decode(localStorage.jwtToken);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     // Logout User
//     store.dispatch(logoutUser());
//     // Clear Profile
//     store.dispatch(clearCurrentProfile());
//     // Redirect to login
//     window.location.href = "/login";
//   }
// }

class Header extends React.Component {
  render() {
    return <h1>I Am header</h1>;
  }
}

class Landing extends React.Component {
  render() {
    return (
      <Main>
        <h1>jldi aane vala h Landing Page and dashboard</h1>
      </Main>
    );
  }
}
class Product extends React.Component {
  render() {
    return (
      <Main>
        <ProductView />
      </Main>
    );
  }
}

class Listing extends React.Component {
  render() {
    return (
      <Main>
        <h1>bhut jld aane vale h appki selling list</h1>
      </Main>
    );
  }
}
class Order extends React.Component {
  render() {
    return (
      <Main>
        <h1>jldi aane vale h orders</h1>
      </Main>
    );
  }
}
class Profile extends React.Component {
  render() {
    return <h1>{this.props.match.params.handle}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/listing" component={Listing} />
          <Route exact path="/orders" component={Order} />
          {/* <Route exact path="/profile/:handle" component={Profile} /> */}
          {/* <Switch>
              <PrivateRouter exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRouter
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
