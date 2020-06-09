import React, {Component} from "react";
import '../fluent.css';
import '../app.css';
import { NavLink } from "react-router-dom";

class Sidenav extends Component{
  
  render(){
    return(
        <nav className="column large3 medium4 small0">
            <div className="nav_content"><br /><br />
                <h6 className="bold">Web</h6><br />
                <ul className="nav">
                    <input type="checkbox" className="nav_btn"/><li className="nav_title">Styles</li>
                    <div className="nav_group">
                      <NavLink to="/12colgrid"><li>12 Col Grid</li></NavLink>
                      <NavLink to="/9colgrid"><li>9 Col Grid</li></NavLink>
                      <NavLink to="/colors"><li>Colors</li></NavLink>
                      <NavLink to="/depth"><li>Depth</li></NavLink>
                      <NavLink to="/objalign"><li>Elements Alignment</li></NavLink>
                      <NavLink to="/iconpack"><li>Icon Pack</li></NavLink>
                      <NavLink to="/textalign"><li>Text Alignment</li></NavLink>
                      <NavLink to="/typography"><li>Typography</li></NavLink>
                    </div>
                </ul>
            </div>
            
        </nav>
    );
  }

}


export default Sidenav;
