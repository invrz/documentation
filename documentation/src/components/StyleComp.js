import React, {Component} from "react"
import '../fluent.css';
import { NavLink } from "react-router-dom";

class Styles extends Component{
  
  render(){
    return(
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Styles</h6>
            <br />
            <div className="page_container">
              <div className="column large4 medium10 small12">
                <NavLink to="/12colgrid"><button className="primary_white tile zi3">12 Col Grid</button></NavLink>
                <br />
              </div>
              <div className="column large4 medium10 small12">
                <NavLink to="/9colgrid"><button className="primary_white tile zi3">9 Col Grid</button></NavLink>
                <br />
              </div>
              <div className="column large4 medium10 small12">
                <NavLink to="/colors"><button className="primary_white tile zi3">Colors</button></NavLink>
                <br />
              </div>
              <div className="column large4 medium10 small12">
                <NavLink to="/depth"><button className="primary_white tile zi3">Depth</button></NavLink>
                <br />
              </div>
              <div className="column large4 medium10 small12">
                <NavLink to="/objalign"><button className="primary_white tile zi3">Elements Alignment</button></NavLink>
                <br />
              </div>
              <div className="column large4 medium10 small12">
                <NavLink to="/iconpack"><button className="primary_white tile zi3">Icon Pack</button></NavLink>
                <br />
              </div>
              <div className="column large4 medium10 small12">
                <NavLink to="/textalign"><button className="primary_white tile zi3">Text Alignment</button></NavLink>
                <br />
              </div>
              <div className="column large4 medium10 small12">
                <NavLink to="/typography"><button className="primary_white tile zi3">Typography</button></NavLink>
                <br />
              </div>
            </div>
        </main>
    );
  }

}


export default Styles;
