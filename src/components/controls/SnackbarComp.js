import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";


function ShowWindow(){
  document.getElementById("mod1").style.display=("block");
}
function HideWindow(){
  document.getElementById("mod1").style.display=("none");
}

class Window extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Window</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Windows are temporary, Window UI overlay that generally provide contextual app information or require user confirmation/input, 
                  or can be used to advertise new app features. In some cases, Windows block interactions with the web page or application until 
                  being explicitly dismissed. They can be used for lightweight creation or edit tasks and simple management tasks, or for hosting 
                  heavier temporary content.                
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, you can make upto 5 Windows without adding any additional JavaScript.
                </p>
                <div className="page_container outline">
                  <button onClick={ShowWindow} className="primary_white dlevel1">Click to Show Window</button>
                </div>
                <p>
                  The language-markup to get the Button part of the output
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
    &lt;button class="primary_white dlevel1" onclick="openmod1();"&gt;Open Window&lt;/button&gt;<br />
                        </pre>
                </div>
                <p>
                  The language-markup to get the Window part of the output
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;div class="modal_container" id="mod1"&gt;  <br />
                          &nbsp;&nbsp;&lt;div class="modal_content zi3"&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="dialogue_pane large12"&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="primary_red right ta_center mod_close_btn" onclick="closemod1();"&gt;X&lt;/button&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="page_container"&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;This Is Some Content&lt;/h2&gt;  <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;  <br />
                          &nbsp;&nbsp;&lt;/div&gt;  <br />
                          &lt;/div&gt;  <br />
                        </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Without adding additional JavaScript anyone can make 5 Windows per page. The only thing to follow is keep id for modal as 
                  mod1, mod2, mod3, mod4, mod5 and call [openmod1()~openmod5] and [openmod1()~openmod5] functions respectively.
                </p>
            </div><br /><br />
        </main>
        <Footer />
        <div class="modal_container" id="mod1">
          <div class="modal_content zi3">
              <div class="dialogue_pane large12">
                  <div class="modal_title left">This is the Window Title</div>
                  <button class="primary_red right ta_center mod_close_btn" onClick={HideWindow}>X</button>
              </div>
              <div class="page_container">
                  <h2>This Is Modal Content</h2>
              </div>
          </div>
        </div>

      </div>
    );
  }

}


export default Window;
