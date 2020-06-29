import React, {Component} from "react"
import '../fluent.css';
import '../icons.css';
import '../App.css';
import { NavLink } from "react-router-dom";


function ShowNav(){
  document.getElementById("side").style.display=("block");
}

function HideNav(){
  document.getElementById("side").style.display=("none");
}

class Topnav extends Component{  

  render(){
    return(
      <div>
        <div className="large12 pivot_container primary_blue top">
            <button className="primary_blue large0 medium0" onClick={ShowNav}><i className="ms-Icon ms-Icon--GlobalNavButton icon-small"></i></button>
            <a href="https://fluentdesignforweb.github.io/" className="title pivot_button">Fluent Design</a>
            <NavLink to="/getstarted" className="pivot_button small0">Get Started</NavLink>
            <NavLink to="/boilerplate" className="pivot_button small0">Boilerplate</NavLink>
            <NavLink to="/styles" className="pivot_button small0">Styles</NavLink>
            <NavLink to="/controls" className="pivot_button small0">Controls</NavLink>
        </div>

        <div className="sidepanel_container" id="side">
          <div className="sidepanel_content left">
            <button className="primary_red left icon" onClick={HideNav}>X</button>
            <br /><br /><br /><br />
            <NavLink to="/getstarted"><div className="panel_item" onClick={HideNav}>Get Started</div></NavLink>
            <NavLink to="/boilerplate"><div className="panel_item" onClick={HideNav}>Boilerplate</div></NavLink>
            <NavLink to="/styles"><div className="panel_item" onClick={HideNav}>Styles</div></NavLink>
            <NavLink to="/controls"><div className="panel_item" onClick={HideNav}>Controls</div></NavLink>
            <NavLink to="/iconpack"><div className="panel_item" onClick={HideNav}>Icons</div></NavLink>
          </div>
        </div>
      </div>
    );
  }

}


export default Topnav;
