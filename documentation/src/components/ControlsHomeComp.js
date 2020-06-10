import React, {Component} from "react"
import '../fluent.css';

import ControlsSidenav from "./ControlsSidenavComp";
import Controls from "./ControlComp";
import Footer from "./FooterComp";

class ControlHome extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <Controls /><br /><br />
        <Footer />
      </div>
    );
  }

}


export default ControlHome;