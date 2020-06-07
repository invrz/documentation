import React, {Component} from "react"
import '../fluent.css';
import { NavLink } from "react-router-dom";

class Topnav extends Component{
  
  render(){
    return(
        <div className="large12 pivot_container primary_blue top">
            <button className="title primary_blue">Fluent Design</button>
            <NavLink to="/getstarted" className="pivot_button">Get Started</NavLink>
            <NavLink to="/styles" className="pivot_button">Styles</NavLink>
            <NavLink to="/controls" className="pivot_button">Controls</NavLink>
        </div>
    );
  }

}


export default Topnav;
