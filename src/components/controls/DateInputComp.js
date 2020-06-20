import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class DateInput extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Date Input</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Date Inputs are used to select a date, month and year all at once. It is a better option rather than 
                  using three seperate inputs as the input can be interpreted directly as a datestamp which is more friendly 
                  while working on databases.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  When Using Fluent Design for Web, you don't need to add any additional classes to get a Input, just calling 
                  input of type Date gives a prestyled Date Input field. Not only that, an date picker appears automatically, 
                  if Date Input is called on the right side of Input.
                </p>
                <div className="page_container outline">
                  <input type="date" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="date" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Only Bottom Border</p>
                <p>
                  To make a Date Input field which only has a bottom border add a class="btm_brdr" 
                </p>
                <div className="page_container outline">
                  <input type="date" className="btm_brdr" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="date" class="btm_brdr" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Transparent Background</p>
                <p>
                  To make a Date Input field which has transparent background add class="transparent" 
                </p>
                <div className="page_container outline">
                  <input type="date" className="btm_brdr transparent" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="date" class="btm_brdr transparent" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Best Pactices</p>
                <p>
                  Placeholders are not visible in Date Input Fields, make sure to create a label for your Date Input for sure. <br />
                  If you are making an Date Input which has all the four borders it is recommended to place the label on top 
                  of input tag. And if you are implementing a Bottom Border only Date Input place the label below the input tag. 
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default DateInput;
