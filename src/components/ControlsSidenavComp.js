import React, {Component} from "react";
import '../fluent.css';
import '../App.css';
import { NavLink } from "react-router-dom";

class ControlsSidenav extends Component{
  
  render(){
    return(
        <nav className="column large3 medium4 small0">
            <div className="nav_content"><br /><br />
                <h6 className="bold">Web</h6><br />
                <div className="nav">
                    <input type="checkbox" className="nav_btn"/><div className="nav_title">&gt;Styles</div>
                    <div className="nav_group">
                      <NavLink to="/12colgrid">12 Col Grid</NavLink><br />
                      <NavLink to="/9colgrid">9 Col Grid</NavLink><br />
                      <NavLink to="/colors">Colors</NavLink><br />
                      <NavLink to="/depth">Depth</NavLink><br />
                      <NavLink to="/objalign">Elements Alignment</NavLink><br />
                      <NavLink to="/iconpack">Icon Pack</NavLink><br />
                      <NavLink to="/textalign">Text Alignment</NavLink><br />
                      <NavLink to="/typography">Typography</NavLink>
                    </div>
                </div>

                <div className="nav">
                    <input type="checkbox" className="nav_btn" defaultChecked/><div className="nav_title">&gt;Controls</div>
                    <div className="nav_group">
                      <div className="nav">
                        <input type="checkbox" className="nav_btn" /><div className="nav_title">&gt;Inputs - Basic</div>
                        <div className="nav_group">
                          <NavLink to="/text_input">Text Input</NavLink><br />
                          <NavLink to="/pass_input">Password Input</NavLink><br />
                          <NavLink to="/tel_input">Tel Input</NavLink><br />
                          <NavLink to="/num_input">Number Input</NavLink><br />
                          <NavLink to="/email_input">Email Input</NavLink><br />
                          <NavLink to="/date_input">Date Input</NavLink><br />
                          <NavLink to="/date_time_input">Date Time Input</NavLink><br />
                          <NavLink to="/month_input">Month Input</NavLink>
                        </div>
                      </div>

                      <div className="nav">
                        <input type="checkbox" className="nav_btn" /><div className="nav_title">&gt;Inputs - Advanced</div>
                        <div className="nav_group">
                          <NavLink to="/range">Range</NavLink><br />
                          <NavLink to="/radio">Radio</NavLink><br />
                          <NavLink to="/swith">Switch</NavLink><br />
                          <NavLink to="/textarea">Textarea</NavLink><br />
                          <NavLink to="/checkbox">Checkbox</NavLink><br />
                          <NavLink to="/searchbox">Searchbox</NavLink><br />
                          <NavLink to="/select">Select</NavLink><br />
                          <NavLink to="/adv_select">Advanced Select</NavLink>
                        </div>
                      </div>

                      <div className="nav">
                        <input type="checkbox" className="nav_btn" /><div className="nav_title">&gt;Lists and Tables</div>
                        <div className="nav_group">
                          <NavLink to="/olist">Ordered Lists</NavLink><br />
                          <NavLink to="/tables">Tables</NavLink><br />
                          <NavLink to="/ulist">Unordered Lists</NavLink>
                        </div>
                      </div>

                      <div className="nav">
                        <input type="checkbox" className="nav_btn" /><div className="nav_title">&gt;Navigation</div>
                        <div className="nav_group">
                          <NavLink to="/pivot_menu">Pivot Menu</NavLink><br />
                          <NavLink to="/command_bar">Command Bar</NavLink><br />
                          <NavLink to="/breadcrumbs">Breadcrumbs</NavLink><br />
                          <NavLink to="/sidenav">Side Navigation</NavLink>
                        </div>
                      </div>

                      <div className="nav">
                        <input type="checkbox" className="nav_btn" /><div className="nav_title">&gt;Progress Indicators</div>
                        <div className="nav_group">
                          <NavLink to="/progress_bar">Progress Bars</NavLink><br />
                          <NavLink to="/spinners">Spinners</NavLink><br />
                        </div>
                      </div>

                      <div className="nav">
                        <input type="checkbox" className="nav_btn" /><div className="nav_title">&gt;Surfaces</div>
                        <div className="nav_group">
                          <NavLink to="/window">Window</NavLink><br />
                          <NavLink to="/sidepanel">Sidepanel</NavLink><br />
                          <NavLink to="/overlay">Overlay</NavLink><br />
                          <NavLink to="/d_box">Dialogue Box</NavLink>
                        </div>
                      </div>

                      <div className="nav">
                        <input type="checkbox" className="nav_btn" /><div className="nav_title">&gt;Utilities</div>
                        <div className="nav_group">
                          <NavLink to="/buttons">Buttons</NavLink><br />
                          <NavLink to="/dropdown">Dropdown</NavLink><br />
                          <NavLink to="/tooltip">Tooltip</NavLink><br />
                          <NavLink to="/snackbar">Snackbar</NavLink>
                        </div>
                      </div>

                      <br /><br />
                    </div>
                </div>

            </div>
            
        </nav>
    );
  }

}


export default ControlsSidenav;
