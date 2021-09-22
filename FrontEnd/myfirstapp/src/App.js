import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import ErrorPage from "./components/Layout/ErrorPage"
import AddBook from "./components/Dashboards/AddBook";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Shopping/Cart";
import Checkout from "./components/Shopping/Checkout";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
// import { logout } from "./actions/securityActions";
// import SecuredRoute from "./securityUtils/SecureRoute";
import BookIndex from "./components/Books/BookIndex";
import BookDetails from "./components/Books/BookDetails";
// import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
// import { getType } from "./actions/securityActions";

const jwtToken = localStorage.jwtToken;


if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  // const currentTime = Date.now() / 1000;
  // comment out for now dispatching a promise is bad! c'mon homy!
  // if (decoded_jwtToken.exp < currentTime) {
  //   store.dispatch(logout());
  //   window.location.href = "/";
  // }
}

class App extends Component {
  state = {
    userType:""
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              // public routes
            }
           
            <Route exact path = "/cart" component={Cart} />
            <Route exact path = "/checkout" component={Checkout} />
            <Route path = "/ErrorPage" component={ErrorPage} />
            <PublicRoute restricted={false} exact path="/" component={BookIndex} />
            <PublicRoute restricted={true} exact path="/register" component={Register} />
            <PublicRoute restricted={true} exact path="/login" component={Login} />
            <PublicRoute restricted={false} exact path ="/contact" component={Contact} />
            <PublicRoute restricted={false} exact path ="/about" component={About} />
            <PublicRoute restricted={false} path = "/book/:isbn" component={BookDetails} />
            <Route exact path ="/dashboard" component={Dashboard} />

            {
              //Private Routes // <Route exact path="/addPerson" component={AddPerson} />
            }
            {/* <PrivateRoute exact path={dash} component={comps} /> */}

          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}
export default App;