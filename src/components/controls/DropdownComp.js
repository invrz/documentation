import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";
import { NavLink } from "react-router-dom";

class Dropdown extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Dropdown</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  A Dropdown is a list in which the selected item is always visible, and the others 
                  are visible on demand by hovering over a drop-down button. They are used to simplify 
                  the design and make a choice within the UI. When closed, only the selected item 
                  is visible. When users hover over the drop-down button, all the options become visible. 
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, you can make dropdowns over any UI Component without adding any additional JavaScript.
                </p>
                <div className="page_container outline">
                  <div className="dropdown_container">
                    <button className="dropdown_btn primary_white">Dropdown</button>
                    <ul className="dropdown_items dlevel2">
                      <NavLink to="#">Item 1s</NavLink>
                      <NavLink to="#">Item 2s</NavLink>
                      <NavLink to="#">Item 3s</NavLink>
                      <NavLink to="#">Item 4s</NavLink>
                      <NavLink to="#">Item 5s</NavLink>
                    </ul>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                          &lt;div className="dropdown_container"&gt;  <br />
                          &nbsp;&nbsp;&lt;button className="dropdown_btn primary_white"&lt;Dropdown&lt;/button&gt;  <br />
                          &nbsp;&nbsp;&lt;ul className="dropdown_items dlevel2"&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#"&gt;Item 1s&lt;/a&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#"&gt;Item 2s&lt;/a&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#"&gt;Item 3s&lt;/a&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#"&gt;Item 4s&lt;/a&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#"&gt;Item 5s&lt;/a&gt;  <br />
                          &nbsp;&nbsp;&lt;/ul&gt;  <br />
                          &lt;/div&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Usage of Dropdowns is not only limited to Menu(s), but they can be used with any Navigation Component as long as you want to give 
                  some options regarding any item.
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default Dropdown;
