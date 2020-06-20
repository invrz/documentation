import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class MonthInput extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Month Input</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Month Inputs are used to select a just the month and year through a user. It is helpful if you only want to 
                  get month information and not specify it to a date and time.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  When Using Fluent Design for Web, you don't need to add any additional classes to get a Input, just calling 
                  input of type Month gives a prestyled Month Input field. Not only that, an month picker appears automatically, 
                  if Month Input is called on the right side of Input.
                </p>
                <div className="page_container outline">
                  <input type="month" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="month" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Only Bottom Border</p>
                <p>
                  To make a Month Input field which only has a bottom border add a class="btm_brdr" 
                </p>
                <div className="page_container outline">
                  <input type="month" className="btm_brdr" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="month" class="btm_brdr" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Transparent Background</p>
                <p>
                  To make a Month Input field which has transparent background add class="transparent" 
                </p>
                <div className="page_container outline">
                  <input type="month" className="btm_brdr transparent" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="month" class="btm_brdr transparent" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Best Pactices</p>
                <p>
                  Placeholders are not visible in Month Input Fields, make sure to create a label for your Month Input for sure. <br />
                  If you are making an Month Input which has all the four borders it is recommended to place the label on top 
                  of input tag. And if you are implementing a Bottom Border only Month Input place the label below the input tag. 
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default MonthInput;
