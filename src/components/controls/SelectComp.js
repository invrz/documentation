import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class Select extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Select</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Select is used to provide user with a basic dropdown list of items through which one item can be selected.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  Implementing Select in Fluent Design for Web is easy and can be done just by using HTML provides with prestyled Select menu.
                </p>
                <div className="outline">
                  <select>
                    <option>Select an Option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                  </select>
                  <br />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                      &lt;select&gt; <br />
                      &nbsp;&nbsp;&lt;option&gt;Select an Option&lt;/option&gt; <br />
                      &nbsp;&nbsp;&lt;option&gt;Option 1&lt;/option&gt; <br />
                      &nbsp;&nbsp;&lt;option&gt;Option 2&lt;/option&gt; <br />
                      &nbsp;&nbsp;&lt;option&gt;Option 3&lt;/option&gt; <br />
                      &nbsp;&nbsp;&lt;option&gt;Option 4&lt;/option&gt; <br />
                      &lt;/select&gt;
                      </pre>
                </div>
            </div><br /><br />


        </main>
        <Footer />
      </div>
    );
  }

}

export default Select;
