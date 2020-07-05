import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class CommandBar extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Command Bar</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  CommandBar is a surface that houses commands that operate on the content of the window, panel, or parent region it 
                  resides above. CommandBars are one of the most visible and recognizable ways to surface commands, and can be an 
                  intuitive method for interacting with content on the page; however, if overloaded or poorly organized, they can be 
                  difficult to use and hide valuable commands from your user. CommandBars can also display a search box for finding 
                  content, hold simple commands as well as menus, or display the status of ongoing actions.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, making Command Bar is relatively easy. It can be used as an alternative to Pivot Menu
                </p>
                <div className="outline">
                  <div class="commandbar_container">
                    <div className="dropdown_container">
                      <button class="dropdown_btn commandbar_button">Command_1</button>
                      <ul className="dropdown_items dlevel2">  
                        <a href="#">Item 1</a>  
                        <a href="#">Item 2</a>  
                        <a href="#">Item 3</a>  
                      </ul> 
                    </div>
                    <button class="commandbar_button">Command_2</button>
                    <button class="commandbar_button">Command_3</button>
                    <button class="commandbar_button">Command_4</button>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                  <pre className="codeblock_text">
                    &nbsp;&nbsp;&lt;div class="commandbar_container"&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="dropdown_container"&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="dropdown_btn commandbar_button"&gt;Command_1&lt;/button&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul className="dropdown_items dlevel2"&gt;    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#"&gt;Item 1&lt;/a&gt;    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#"&gt;Item 2&lt;/a&gt;    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#"&gt;Item 3&lt;/a&gt;    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;   <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="commandbar_button"&gt;Command_2&lt;/button&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="commandbar_button"&gt;Command_3&lt;/button&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="commandbar_button"&gt;Command_4&lt;/button&gt;  <br />
                    &nbsp;&nbsp;&lt;/div&gt;  <br />
                  </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Sort commands in order of importance from left to right or right to left depending on the culture.
                  Organize commands into logical groupings.
                  And display no more than 5-7 commands.
              </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}


export default CommandBar;
