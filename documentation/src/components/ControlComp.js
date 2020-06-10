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
                <p className="title bold">Inputs - Basic</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/text_input">Text Input</NavLink><br />
                    <NavLink to="/pass_input">Password Input</NavLink><br />
                    <NavLink to="/tel_input">Tel Input</NavLink><br />
                    <NavLink to="/num_input">Number Input</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/email_input">Email Input</NavLink><br />
                    <NavLink to="/date_input">Date Input</NavLink><br />
                    <NavLink to="/date_time_input">Date Time Input</NavLink><br />
                    <NavLink to="/month_input">Month Input</NavLink><br />
            </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Inputs - Advanced</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/range">Range</NavLink><br />
                    <NavLink to="/radio">Radio</NavLink><br />
                    <NavLink to="/switch">Switch</NavLink><br />
                    <NavLink to="/textarea">Textarea</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/checkbox">Checkbox</NavLink><br />
                    <NavLink to="/searchbox">Searchbox</NavLink><br />
                    <NavLink to="/select">Select</NavLink><br />
                    <NavLink to="/adv_select">Advanced Select</NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Lists and Tables</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/olist">Ordered Lists</NavLink><br />
                    <NavLink to="/tables">Tables</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/ulist">Unordered Lists</NavLink><br />
                    <NavLink to="/controls"></NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Navigations</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/pivot_menu">Pivot Menu</NavLink><br />
                    <NavLink to="/command_bar">Command Bar</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/breadcrumbs">Breadcrumbs</NavLink><br />
                    <NavLink to="/sidenav">Side Navigation</NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Progress</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/progress_bar">Progress Bars</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/spinners">Spinners</NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Surfaces</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/window">Window</NavLink><br />
                    <NavLink to="/sidepanel">Side Panel</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/overlay">Overlay</NavLink><br />
                    <NavLink to="/d_box">Dialogue Box</NavLink><br />
                </div>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Utilities</p>
                <div className="column large6 medium6 small12">
                    <NavLink to="/buttons">Buttons</NavLink><br />
                    <NavLink to="/dropdown">Dropdown</NavLink><br />
                </div>
                <div className="column large6 medium6 small12">
                    <NavLink to="/tooltip">Tooltip</NavLink><br />
                    <NavLink to="/snackbar">Snackbar</NavLink><br />
                </div>
            </div>
            <br />
        </main>
    );
  }

}


export default Controls;
