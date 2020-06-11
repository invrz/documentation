import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class Spinners extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Spinners</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. 
                  A Spinner is shown when it's unsure how long a task will take making it the indeterminate version of a Progress Bar. 
                  They can be various sizes, located inline with content or centered. They generally appear after an action is being 
                  processed or committed. They are subtle and generally do not take up much space, but are transitions from the completed task.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  Adding spinners is relatively easy than any other progress indicators. To add a Spinner using Fluent Design for Web 
                  do the following.
                </p>
                <div className="page_container outline">
                  <p className="spinner"></p> 
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;p class="spinner"&gt;&lt;/p&gt; 
                        </pre>
                </div>

            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Different Spinner Sizes</p>
                <p>
                  Their is a predefined size of Spinner and also 4 sizes which can be applied using extra classes. They are xs, s, m, and l 
                  for extra small, small, medium and large repectively.
                </p>
                <div className="page_container outline">
                  <div className="column large1 medium3 small6 ta_center btm_col">
                    <p className="spinner xs"></p><br />
                    <span className="label">Extra Small</span>
                  </div>
                  <div className="column large1 medium3 small6 ta_center btm_col">
                    <p className="spinner s"></p><br />
                    <span className="label">Small</span>
                  </div>
                  <div className="column large1 medium3 small6 ta_center btm_col">
                    <p className="spinner m"></p><br />
                    <span className="label">Medium</span>
                  </div>
                  <div className="column large1 medium3 small6 ta_center btm_col">
                    <p className="spinner l"></p><br />
                    <span className="label">Large</span>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;p class="spinner xs"&gt;&lt;/p&gt; <br />
                          &lt;p class="spinner s"&gt;&lt;/p&gt;  <br />
                          &lt;p class="spinner m"&gt;&lt;/p&gt;  <br />
                          &lt;p class="spinner l"&gt;&lt;/p&gt;  <br />
                        </pre>
                </div>

            </div><br /><br />
        </main>
        <Footer />
      </div>
    );
  }

}


export default Spinners;
