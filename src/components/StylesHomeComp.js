import React, {Component} from "react"
import '../fluent.css';

import StylesSidenav from "./StylesSidenavComp";
import Styles from "./StyleComp";
import FooterBottom from "./FooterBottomComp";

class StyleHome extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <Styles /><br /><br />
        <FooterBottom />
      </div>
    );
  }

}


export default StyleHome;