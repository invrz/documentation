import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class Searchbox extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Searchbox</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Searchboxes are very important part of any website/webapp. They are generally used to accept any type of 
                  text information a user wants to feed in the website. It is normally used to accept single line or a few 
                  words of text. 
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  When Using Fluent Design for Web, you don't need to add any additional classes to get a Input, just calling 
                  input of type text gives a prestyled Searchbox field.
                </p>
                <div className="outline">
                  <input type="search" placeholder="Enter search string" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        &lt;input type="search" placeholder="Enter search string" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Only Bottom Border</p>
                <p>
                  To make a Searchbox field which only has a bottom border add a class="btm_brdr" 
                </p>
                <div className="outline">
                  <input type="search" placeholder="Enter search string" className="btm_brdr" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        &lt;input type="search" placeholder="Enter search string" class="btm_brdr" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Transparent Background</p>
                <p>
                  To make a Searchbox field which has transparent background add class="transparent" 
                </p>
                <div className="outline">
                  <input type="search" placeholder="Enter search string" className="btm_brdr transparent" />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        &lt;input type="search" placeholder="Enter search string" class="btm_brdr transparent" /&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Best Pactices</p>
                <p>
                  If you are making an Searchbox which has all the four borders it is recommended to place the label on top 
                  of input tag. And if you are implementing a Bottom Border only Searchbox place the label below the input tag. 
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default Searchbox;
