import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";


function ShowPanel(){
  document.getElementById("side1").style.display=("block");
}
function HidePanel(){
  document.getElementById("side1").style.display=("none");
}

class SidePanel extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Side Panel</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Side Panels are modal UI overlays that provide contextual app information. They often request some kind of creation or 
                  management action from the user. Side Panels are paired with the Overlay component, also known as a Light Dismiss. The 
                  Overlay blocks interactions with the app view until dismissed either through clicking or tapping on the Overlay or 
                  by selecting a close or completion action within the Panel.                
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, you can make upto 5 Side Panels without adding any additional JavaScript.
                </p>
                <div className="page_container outline">
                  <button onClick={ShowPanel} className="primary_white dlevel1">Click to Open Side Panel</button>
                </div>
                <p>
                  The language-markup to get the Button part of the output
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
    &lt;button class="primary_white dlevel1" onclick="openside1();"&gt;Click to Open Side Panel&lt;/button&gt;<br />
                        </pre>
                </div>
                <p>
                  The language-markup to get the Window part of the output
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
&lt;div class="sidepanel_container" id="side1"&gt;<br />
&nbsp;&nbsp;&lt;div class="sidepanel_content zi3 right"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="primary_red right ta_center mod_close_btn" onclick="closeside1();"&gt;X&lt;/button&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="page_container"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="large12 panel_item"&gt;Panel Item 1&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="large12 panel_item"&gt;Panel Item 2&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="large12 panel_item"&gt;Panel Item 3&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="large12 panel_item"&gt;Panel Item 4&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="large12 panel_item"&gt;Panel Item 5&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;&lt;/div&gt;<br />
&lt;/div&gt;<br />
                        </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Without adding additional JavaScript anyone can make 5 Windows per page. The only thing to follow is keep id for modal as 
                  side1, side2, side3, side4, side5 and call [openside1()~openside5] and [openside1()~openside5] functions respectively.
                </p>
            </div><br /><br />
        </main>
        <Footer />
        <div class="sidepanel_container" id="side1">
          <div class="sidepanel_content zi3 right" id="modct1">
              <button class="primary_red right ta_center mod_close_btn" onClick={HidePanel}>X</button>
              <br /><br /><br /><br />
              <div class="page_container">
                  <div class="large12 panel_item">Panel Item 1</div>
                  <div class="large12 panel_item">Panel Item 2</div>
                  <div class="large12 panel_item">Panel Item 3</div>
                  <div class="large12 panel_item">Panel Item 4</div>
                  <div class="large12 panel_item">Panel Item 5</div>
              </div>
          </div>
        </div>

      </div>
    );
  }

}


export default SidePanel;
