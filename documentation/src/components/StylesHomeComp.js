import React, {Component} from "react"
import '../fluent.css';

import Sidenav from "./SidenavComp";
import Styles from "./StyleComp";

class StyleHome extends Component{
  
  render(){
    return(
      <div>
        <Sidenav />
        <Styles />
      </div>
    );
  }

}


export default StyleHome;