import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class ToggleSwitch extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Toggle Switch</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Toggle Switches is a graphical control element that allows the user to choose one from a predefined set of options. 
                  It is used as a button, the content of which changes with each click and cycles between two or more values; 
                  the on or off state displays value which is the user's choice.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  Implementing Toggle Switches in Fluent Design for Web is easy and can be done just by using HTML and Fluent Classes.
                </p>
                <div className="outline">
                  <div class="switch">
                    <input type="checkbox" />
                    <span class="toggle"></span>
                  </div>
                  <br />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                      &lt;div class="switch"&gt; <br />
                      &nbsp;&nbsp;&lt;input type="checkbox" /&gt; <br />
                      &nbsp;&nbsp;&lt;span class="toggle"&gt;&lt;/span&gt; <br />
                      &lt;/div&gt;
                      </pre>
                </div>
            </div><br /><br />


        </main>
        <Footer />
      </div>
    );
  }

}

export default ToggleSwitch;
