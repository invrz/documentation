import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class RadioInput extends Component{
    
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Radio</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Radios are basically used to provide options in a website they act like selecters. They allow a user 
                  to choose only one of a predefined set of mutually exclusive options.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  When Using Fluent Design for Web, you don't need to add any additional classes to get a Input, just calling 
                  input of type range gives a prestyled Radio field.
                </p>
                <div className="outline">
                  Yes <input type="radio" name="bool" />
                  No <input type="radio" name="bool" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        Yes &lt;input type="radio" name="bool" /&gt;  <br />
                        No &lt;input type="radio" name="bool" /&gt;  <br />
                      </pre>
                </div>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default RadioInput;
