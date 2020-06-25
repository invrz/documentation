import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class ToggleSwitch extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
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
                <div className="page_container outline">
                  <div class="switch">
                            <input type="checkbox" checked="" />
                            <span class="toggle"></span>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="text" placeholder="Enter text here" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Only Bottom Border</p>
                <p>
                  To make a Text Input field which only has a bottom border add a class="btm_brdr" 
                </p>
                <div className="page_container outline">
                  <input type="text" placeholder="Enter text here" className="btm_brdr" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="text" placeholder="Enter text here" class="btm_brdr" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Transparent Background</p>
                <p>
                  To make a Text Input field which has transparent background add class="transparent" 
                </p>
                <div className="page_container outline">
                  <input type="text" placeholder="Enter text here" className="btm_brdr transparent" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="text" placeholder="Enter text here" class="btm_brdr transparent" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Best Pactices</p>
                <p>
                  If you are making an Text Input which has all the four borders it is recommended to place the label on top 
                  of input tag. And if you are implementing a Bottom Border only Text Input place the label below the input tag. 
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default ToggleSwitch;
