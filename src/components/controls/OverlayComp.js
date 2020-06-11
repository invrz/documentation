import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import Example from './overlay_example.png';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class Overlay extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Overlay</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Overlays are used to render a semi-transparent layer on top of existing UI. Overlays help focus the user on the content that 
                  sits above the added layer and are often used to help designate a modal or blocking experience. Overlays can be seen used in 
                  conjunction with Panels and Dialogs.                
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, you can make overlays over any UI Component without adding any additional JavaScript.
                </p>
                <div className="page_container outline">
                  <div class="overlay_container center">
                    <img src={Example} class="overlay_content" alt="Overlay Example" />
                    <div class="overlay">
                        <br /><h6 className="ta_center">This Is Some Example Overlay Info</h6>
                    </div>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                        &lt;div class="overlay_container center"&gt;  <br />
                        &nbsp;&nbsp;&lt;img src="path_to_your_image" class="overlay_content" alt="Overlay Example Image" /&gt;<br />
                        &nbsp;&nbsp;&lt;div class="overlay"&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;&lt;h6 className="ta_center"&gt;This Is Some Example Overlay Info&lt;/h6&gt;<br />
                        &nbsp;&nbsp;&lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                        </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Usage of Overlays is not only limited to Images, but they can be used with any UI Component as long as you want to display some 
                  information when user touches the Component or hovers their mouse over it. Since Overlays don't use JavaScript, any number of 
                  Overlays can be added in a single page.
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}


export default Overlay;
