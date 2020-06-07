import React, {Component} from "react"
import '../fluent.css';
import '../app.css';

class Sidenav extends Component{
  
  render(){
    return(
        <nav className="column large3 medium4 small0">
            <div className="nav_content"><br /><br />
                <h6 className="bold">Web</h6><br />
                <ul className="nav">
                    <li className="nav_title">Styles</li>
                    <li>Typography</li>
                    <li>Elevation</li>
                    <li>Color</li>
                    <li>Legacy Grid</li>
                    <li>Grid</li>
                    <li>Icon Pack</li>
                </ul>
            </div>

        </nav>
    );
  }

}


export default Sidenav;
