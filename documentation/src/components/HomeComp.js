import React, {Component} from "react"
import '../fluent.css';

import Sidenav from "./SidenavComp";
import GettingStarted from "./GettingStartedComp";

class Home extends Component{
  
  render(){
    return(
      <div>
        <Sidenav />
        <GettingStarted />
      </div>
    );
  }

}


export default Home;
