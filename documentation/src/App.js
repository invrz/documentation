import React, {Component} from "react"
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import './app.css';
import './fluent.css';

import Home from "./components/HomeComp"
import Footer from "./components/FooterComp"
import Topnav from "./components/TopnavComp";

class App extends Component{
  
  render(){
    return(
        <Router>
          <Topnav />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/getstarted" component={Home} />
            <Route path="/styles" component={Home} />
            <Route path="/controls" component={Home} />
          </Switch>
          <Footer />
        </Router>
    );
  }

}


export default App;
