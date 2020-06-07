import React, {Component} from "react"
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './app.css';
import './fluent.css';

import Topnav from "./components/TopnavComp";
import Home from "./components/HomeComp";
import StyleHome from "./components/StylesHomeComp";
import ControlsHome from "./components/ControlsHomeComp";

class App extends Component{
  
  render(){
    return(
        <Router>
          <Topnav />
          <Switch>
            <Route path="/getstarted" component={Home} />
            <Route path="/styles" component={StyleHome} />
            <Route path="/controls" component={ControlsHome} />
          </Switch>
        </Router>
    );
  }

}


export default App;
