import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";


function ShowDBox(){
  document.getElementById("dialog1").style.display=("block");
}
function HideDBox(){
  document.getElementById("dialog1").style.display=("none");
}

class DialogueBox extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Dialogue Box</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Dialogue Boxes are temporary, Dialogue Box UI overlay that generally provide contextual app information or require user confirmation/input, 
                  or can be used to advertise new app features. In some cases, Dialogue Boxes block interactions with the web page or application until 
                  being explicitly dismissed. They can be used for lightweight creation or edit tasks and simple management tasks, or for hosting 
                  heavier temporary content.                
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, you can make upto 5 Dialogue Boxes without adding any additional JavaScript.
                </p>
                <div className="page_container outline">
                  <button onClick={ShowDBox} className="primary_white dlevel1">Click to Open Dialogue Box</button>
                </div>
                <p>
                  The language-markup to get the Button part of the output
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
    &lt;button class="primary_white dlevel1" onclick="opendialog1();"&gt;Click to Open Dialogue   Box&lt;/button&gt;<br />
                        </pre>
                </div>
                <p>
                  The language-markup to get the Dialogue Box part of the output
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
&lt;div class="dialogue_box" id="dialog1"&gt; <br />
&nbsp;&nbsp;&lt;div class="dialogue_pane large12"&gt; <br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="primary_red right ta_center mod_close_btn" onclick="closedialog1();" &gt;X&lt;/button&gt; <br />
&nbsp;&nbsp;&lt;/div&gt; <br />
&nbsp;&nbsp;&lt;div class="dialogue_content large12"&gt;This Is A Dialogue Box&lt;/div&gt; <br />
&lt;/div&gt; <br />
                        </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Without adding additional JavaScript anyone can make 5 Dialogue Boxes per page. The only thing to follow is keep id for dialogue box as 
                  dialog1, dialog2, dialog3, dialog4, dialog5 and call [opendialog1()~opendialog5] and [opendialog1()~opendialog5] functions respectively.
                </p>
            </div><br /><br />
        </main>
        <Footer />
        <div class="dialogue_box" id="dialog1">
          <div class="dialogue_pane large12">
              <button class="primary_red right ta_center mod_close_btn" onClick={HideDBox} >X</button>
          </div>
          <div class="dialogue_content large12">This Is A Dialogue Box</div>
        </div>

      </div>
    );
  }

}


export default DialogueBox;
