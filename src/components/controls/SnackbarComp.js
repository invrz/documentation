import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class Snackbar extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Snackbar</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, 
                towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require 
                user input to disappear.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, you can make as many snackbars as you want in a page and 
                  they disappear after 5 seconds. Snackbars normally appear on bottom-left part of the screen.
                </p>
                <div className="page_container outline">
                  <div className="snackbar_container">
                    <button className="snackbar_button small primary_white dlevel2">Click to open Snackbar</button>
                    <span className="snackbar_content box">This is Some Snackbar Content</span>
                  </div>
                  <div className="snackbar_container">
                    <button className="snackbar_button small primary_white dlevel2">Click to open another Snackbar</button>
                    <span className="snackbar_content primary_inverted">This is Inverted Snackbar Content</span>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;div className="snackbar_container"&gt;  <br />
                        &nbsp;&nbsp;&lt;button className="snackbar_button small primary_white dlevel2"&gt;Click to open Snackbar&lt;/button&gt;  <br />
                        &nbsp;&nbsp;&lt;span className="snackbar_content box"&gt;This is Some Snackbar Content&lt;/span&gt;  <br />
                        &lt;/div&gt;  <br />  <br />
                        &lt;div className="snackbar_container"&gt;  <br />
                        &nbsp;&nbsp;&lt;button className="snackbar_button small primary_white dlevel2"&gt;Click to open another Snackbar&lt;/button&gt;  <br />
                        &nbsp;&nbsp;&lt;span className="snackbar_content box"&gt;This is Some More Snackbar Content&lt;/span&gt;  <br />
                        &lt;/div&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Snackbars can be used to notify users when they take any action, in this case clicking a button. It can be 
                  used for many other purposes also and can be used to give alerts also. In Fluent Design for web, calling for 
                  one Snackbar replaces any other Snackbar if present.
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default Snackbar;
