import React, {Component} from "react";
import '../fluent.css';
import { NavLink } from "react-router-dom";

class Controls extends Component{
  
  render(){
    return(
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Controls</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Basic Inputs</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/text_input">Text Input</NavLink><br />
                    <NavLink to="/controls/text_input">Password Input</NavLink><br />
                    <NavLink to="/controls/text_input">Tel Input</NavLink><br />
                    <NavLink to="/controls/text_input">Number Input</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/text_input">Email Input</NavLink><br />
                    <NavLink to="/controls/text_input">Date Input</NavLink><br />
                    <NavLink to="/controls/text_input">Date Time Input</NavLink><br />
                    <NavLink to="/controls/text_input">Month Input</NavLink><br />
            </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Advanced Inputs</p>
                <p>
                    Items
                </p>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Utilities</p>
                <p>
                    Items
                </p>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Surfaces</p>
                <p>
                    Items
                </p>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Lists and Tables</p>
                <p>
                    Items
                </p>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Navigations</p>
                <p>
                    Items
                </p>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Progress Bars</p>
                <p>
                    Items
                </p>
            </div>
        </main>
    );
  }

}


export default Controls;
