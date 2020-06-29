import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class TextArea extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Textarea Input</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Textarea Inputs are very important part of any website/webapp. They are generally used to accept any type of 
                  textarea information a user wants to feed in the website. It is normally used to accept multiple lines of text. 
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  When Using Fluent Design for Web, you don't need to add any additional classes to get a Input, just calling 
                  input of type textarea gives a prestyled Textarea Input field.
                </p>
                <div className="outline">
                  <textarea placeholder="This is a Text Area"></textarea>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        &lt;textarea placeholder="This is a Text Area"&gt;&lt;/textarea&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Only Bottom Border</p>
                <p>
                  To make a Textarea Input field which only has a bottom border add a class="btm_brdr" 
                </p>
                <div className="outline">
                  <textarea placeholder="This is a Text Area" className="btm_brdr"></textarea>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        &lt;textarea placeholder="This is a Text Area" class="btm_brdr"&gt;&lt;/textarea&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Transparent Background</p>
                <p>
                  To make a Textarea Input field which has transparent background add class="transparent" 
                </p>
                <div className="outline">
                  <textarea placeholder="This is a Text Area" className="transparent btm_brdr"></textarea>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        &lt;textarea placeholder="This is a Text Area" class="transparent"&gt;&lt;/textarea&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Best Pactices</p>
                <p>
                  If you are making an Textarea Input which has all the four borders it is recommended to place the label on top 
                  of input tag. And if you are implementing a Bottom Border only Textarea Input place the label below the input tag. 
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default TextArea;
