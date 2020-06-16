import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";
import { NavLink } from "react-router-dom";

class Tooltip extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Tooltip</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Tooltips are small, interactive, textual hints for mainly graphical elements. When 
                  using icons for actions you can use a tooltip to give people clarification on its function.
                  Tooltips supplement content associated with a specific UI component.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  Tooltips can be implemented in Fluent Design for Web very easily. To do so, just do the following.
                </p>
                <div className="page_container outline">
                  <div class="tooltip_container">
                    <span class="tooltip_info">When you hover over the button, you see me</span>
                    <button class="small primary_white dlevel2">Hover/Touch For Tooltip</button>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;div class="tooltip_container"&gt;  <br />
                        &nbsp;&nbsp;&lt;span class="tooltip_info"&gt;When you hover over the button, you see me&lt;/span&gt;  <br />
                        &nbsp;&nbsp;&lt;button class="small primary_white dlevel2"&gt;Hover/Touch For Tooltip&lt;/button&gt;  <br />
                        &lt;/div&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Tooltips can be really helpful if some information has to be provided about any element. Using tooltips 
                  appropriately can help users understand all the elements easily by reading the tooltips. Tooltips like most 
                  other components can be themed using <NavLink to="/colors">Fluent Colors</NavLink>
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default Tooltip;
