import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './Components/Checkout';
import Login from './Components/Login'
import { auth } from "./firebase"
import { useStateValue } from './StateProvider';
import Payment from "./Components/Payment"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import BackToTop from './Components/BackToTop';
import Footer from './Components/Footer';
import Footerland from './Components/Footerland';



function App() {
  const [{ }, dispatch] = useStateValue();

  const promise = loadStripe('pk_test_51HX1WFIKB5ZWpYLB7dnk5lkOb2Phw2HV39umsa332iXkcnSNQp8DKsR3I8xQ4CLh7mkb3dZHeY6ipmwZSX8nHyiH00cFaZaNKN')

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was loggedin
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Navbar />
            <Home />
            <BackToTop />
            <Footer />
            <Footerland />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
