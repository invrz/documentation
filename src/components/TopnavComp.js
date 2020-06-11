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
            <button className="title primary_blue">Fluent Design</button>
            <NavLink to="/getstarted" className="pivot_button small0">Get Started</NavLink>
            <NavLink to="/styles" className="pivot_button small0">Styles</NavLink>
            <NavLink to="/controls" className="pivot_button small0">Controls</NavLink>
            <button className="primary_blue right large0 medium0" onClick={ShowNav}><i className="ms-Icon ms-Icon--GlobalNavButton icon-small"></i></button>
        </div>

        <div className="sidepanel_container" id="side">
          <div className="sidepanel_content right">
            <button className="primary_red right icon" onClick={HideNav}>X</button>
            <br /><br /><br /><br />
            <NavLink to="/styles" onClick={HideNav}><div className="panel_item">Styles</div></NavLink>
            <NavLink to="/controls" onClick={HideNav}><div className="panel_item">Controls</div></NavLink>
            <NavLink to="/iconpack" onClick={HideNav}><div className="panel_item">Icons</div></NavLink>
          </div>
        </div>
      </div>
    );
  }

}


export default Topnav;
