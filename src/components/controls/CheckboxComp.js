import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class Checkbox extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Checkbox</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Checkboxes are graphical control element that allows the user to choose multiple options from a predefined set of options. 
                  It is used as a form field, the content of which changes with each click and cycles between checked or not checked; 
                  the checked or not checked state displays if user's has made a choice.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  Implementing Checkboxes in Fluent Design for Web is easy and can be done just by using HTML and Fluent Classes.
                </p>
                <div className="outline">
                  <div class="check">Label : &nbsp;&nbsp;
                    <input type="checkbox" />
                    <button class="checkmark"><i class="ms-Icon ms-Icon--Accept" aria-hidden="true"></i></button>
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
                      &nbsp;&nbsp;&lt;button class="checkmark"&gt; <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;i class="ms-Icon ms-Icon--Accept" aria-hidden="true"&gt;&lt;/i&gt; <br />
                      &nbsp;&nbsp;&lt;/button&gt; <br />
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

export default Checkbox;
