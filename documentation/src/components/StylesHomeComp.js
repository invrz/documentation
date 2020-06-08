import React, {Component} from "react"
import '../fluent.css';

import Sidenav from "./SidenavComp";
import Styles from "./StyleComp";
import FooterBottom from "./FooterBottomComp";

class StyleHome extends Component{
  
  render(){
    return(
      <div>
        <Sidenav />
        <Styles />
        <FooterBottom />
      </div>
    );
  }

}


export default StyleHome;