import React, {Component} from "react"
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './app.css';
import './fluent.css';

import Topnav from "./components/TopnavComp";
import Home from "./components/HomeComp";
import StyleHome from "./components/StylesHomeComp";
import ControlsHome from "./components/ControlsHomeComp";

import Typography from "./components/styles/TypographyComp";
import Colors from "./components/styles/ColorsComp";
import Depth from "./components/styles/DepthComp";
import TextAlign from "./components/styles/TextAlignComp";
import ObjAlign from "./components/styles/ObjAlignComp";
import Grid12 from "./components/styles/Grid12Comp";
import Grid9 from "./components/styles/Grid9Comp";
import Icons from "./components/styles/IconComp";

import Spinners from "./components/controls/SpinnerComp";
import ProgressBar from "./components/controls/ProgressBarComp";


class App extends Component{
  
  render(){
    return(
        <Router>
          <Topnav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/getstarted" component={Home} />
            <Route path="/styles" component={StyleHome} />
            <Route path="/controls" component={ControlsHome} />

            <Route path="/typography" component={Typography} />
            <Route path="/colors" component={Colors} />
            <Route path="/depth" component={Depth} />
            <Route path="/textalign" component={TextAlign} />
            <Route path="/objalign" component={ObjAlign} />
            <Route path="/12colgrid" component={Grid12} />
            <Route path="/9colgrid" component={Grid9} />
            <Route path="/iconpack" component={Icons} />

            <Route path="/spinners" component={Spinners} />
            <Route path="/progress_bar" component={ProgressBar} />
          </Switch>
        </Router>
    );
  }

}


export default App;
