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
                    <NavLink to="/text_input">Text Input</NavLink><br />
                    <NavLink to="/controls/pass_input">Password Input</NavLink><br />
                    <NavLink to="/controls/tel_input">Tel Input</NavLink><br />
                    <NavLink to="/controls/num_input">Number Input</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/email_input">Email Input</NavLink><br />
                    <NavLink to="/controls/date_input">Date Input</NavLink><br />
                    <NavLink to="/controls/date_time_input">Date Time Input</NavLink><br />
                    <NavLink to="/controls/month_input">Month Input</NavLink><br />
            </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Advanced Inputs</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/range">Range</NavLink><br />
                    <NavLink to="/controls/rating">Rating</NavLink><br />
                    <NavLink to="/controls/switch">Switch</NavLink><br />
                    <NavLink to="/controls/radio">Radio</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/checkbox">Checkbox</NavLink><br />
                    <NavLink to="/controls/searchbox">Searchbox</NavLink><br />
                    <NavLink to="/controls/select">Select</NavLink><br />
                    <NavLink to="/controls/adv_sel">Advanced Select</NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Utilities</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/btns">Buttons</NavLink><br />
                    <NavLink to="/controls/dropdown">Dropdown</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/overlay">Overlay</NavLink><br />
                    <NavLink to="/controls/snackbar">Snackbar</NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Surfaces</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/window">Window</NavLink><br />
                    <NavLink to="/controls/sidepanel">Side Panel</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/tooltip">Tooltip</NavLink><br />
                    <NavLink to="/controls/d_box">Dialogue Box</NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Lists and Tables</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/ol">Ordered Lists</NavLink><br />
                    <NavLink to="/controls/tables">Tables</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/ul">Unordered Lists</NavLink><br />
                    <NavLink to="/controls/controls"></NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Navigations</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/pivot">Pivot Menu</NavLink><br />
                    <NavLink to="/controls/commandbar">Command Bar</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/breadcrumbs">Breadcrumbs</NavLink><br />
                    <NavLink to="/controls/sidenav">Side Navigation</NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Progress</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/progressbars">Progress Bars</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/controls/spinners">Spinners</NavLink><br />
                </div>
            </div>
        </main>
    );
  }

}


export default Controls;
