import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class ProgressBar extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Progress Bars</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                    Progress Bars are used to show the completion status of an operation lasting more than 2 seconds. If the state of 
                    progress cannot be determined, use a Spinner instead. Progress Bars can appear in a new panel, a flyout, under the 
                    UI initiating the operation, or even replacing the initiating UI, as long as the UI can return if the operation is canceled 
                    or is stopped. There are two types of Progress Bars currently supportted in Fluent Design for Web, which are Simple 
                    Progress Bar and Indeterminate Progress Bar. Check further down below to see their Implementation.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Simple Progress Bar</p>
                <p>
                  Adding a Simple Progress Bar is very easy in Fluent Design for Web. It can be used when progress has to be shown in percentage and 
                  progress can be quantified.
                </p>
                <div className="page_container outline">
                  <div className="simple_progress_bar"></div>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;div class="simple_progress_bar"&gt;&lt;/div&gt; 
                        </pre>
                </div>

            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Indeterminate Progress Bar</p>
                <p>
                  Adding a Indeterminate Progress Bar is very easy in Fluent Design for Web. It can be used when progress can not be quantified. 
                </p>
                <div className="page_container outline">
                  <div className="indeterminate_progress_bar"></div>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;div class="indeterminate_progress_bar"&gt;&lt;/div&gt; 
                        </pre>
                </div>

            </div><br /><br />
        </main>
        <Footer />
      </div>
    );
  }

}


export default ProgressBar;
