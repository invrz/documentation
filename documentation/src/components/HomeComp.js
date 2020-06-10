import React, {Component} from "react"
import '../fluent.css';

import Sidenav from "./SidenavComp";
import GettingStarted from "./GettingStartedComp";
import Footer from "./FooterComp";

class Home extends Component{
  
  render(){
    return(
      <div>
        <Sidenav />
        <GettingStarted /><br /><br />
        <Footer />
      </div>
    );
  }

}


export default Home;
