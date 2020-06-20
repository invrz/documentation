import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class NumberInput extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Number Input</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Number Inputs are generally used to accept any type of numberic information a user wants to feed in the website. 
                  It can be a Number, a Decimal, maybe some percentage, and much more. One Number field can be used only to accept 
                  one number. 
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  When Using Fluent Design for Web, you don't need to add any additional classes to get a Input, just calling 
                  input of type text gives a prestyled Input field.
                </p>
                <div className="page_container outline">
                  <input type="number" placeholder="Enter a Number" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="number" placeholder="Enter a Number" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Only Bottom Border</p>
                <p>
                  To make a Text Input field which only has a bottom border add a class="btm_brdr" 
                </p>
                <div className="page_container outline">
                  <input type="number" placeholder="Enter a Number" className="btm_brdr" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="number" placeholder="Enter a Number" class="btm_brdr" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Transparent Background</p>
                <p>
                  To make a Text Input field which has transparent background add class="transparent" 
                </p>
                <div className="page_container outline">
                  <input type="number" placeholder="Enter a Number" className="btm_brdr transparent" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="number" placeholder="Enter a Number" class="btm_brdr transparent" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Best Pactices</p>
                <p>
                  If you are making an Text Input which has all the four borders it is recommended to place the label on top 
                  of input tag. And if you are implementing a Bottom Border only Text Input place the label below the input tag. 
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default NumberInput;
