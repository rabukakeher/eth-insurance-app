import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import ClaimRequest from "./pages/ClaimRequest";
import Payment from "./pages/Payment";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Onboarding} />
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/claim-request" component={ClaimRequest} />
        <Route path="/payment" component={Payment} />
          <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}


export default App;
