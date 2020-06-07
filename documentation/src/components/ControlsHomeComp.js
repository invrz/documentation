import React, {Component} from "react"
import '../fluent.css';

import Sidenav from "./SidenavComp";
import Controls from "./ControlComp";
import Footer from "./FooterComp";

class ControlHome extends Component{
  
  render(){
    return(
      <div>
        <Sidenav />
        <Controls />
        <Footer />
      </div>
    );
  }

}


export default ControlHome;