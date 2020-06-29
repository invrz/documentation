import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class AdvSelect extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Advanced Select</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Advanced Select is similiar to Select and is used to provide user with a basic dropdown list of items through which one item can be selected.
                  The only major difference between Select and Advanced Select is it's hard to implement and can be styled.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  Implementing Select in Fluent Design for Web is easy and can be done just by using HTML and Fluent Classes.
                </p>
                <div className="outline">
                  <div class="drop_container">
                          <span class="drop_val" id="drop_value">Select an option</span><input class="drop" type="checkbox" />
                          <div class="opt_group dlevel2">
                              <span class="drop_val">Option a</span><input class="drop_opt" type="radio" name="dropdown" />
                              <span class="drop_val">Option b</span><input class="drop_opt" type="radio" name="dropdown" />
                              <span class="drop_val">Option c</span><input class="drop_opt" type="radio" name="dropdown" />
                              <span class="drop_val">Option d</span><input class="drop_opt" type="radio" name="dropdown" />
                              <span class="drop_val">Option e</span><input class="drop_opt" type="radio" name="dropdown" />
                          </div>
                    </div>
                  <br />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">
                        &lt;div class="drop_container"&gt; <br />
                        &nbsp;&nbsp;&lt;span class="drop_val" id="drop_value"&gt;Select an option&lt;/span&gt;&lt;input class="drop" type="checkbox" /&gt; <br />
                        &nbsp;&nbsp;&lt;div class="opt_group zi2"&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="drop_val"&gt;Option a&lt;/span&gt;&lt;input class="drop_opt" type="radio" name="dropdown" onclick="document.getElementById('drop_value').innerHTML = 'Option a'" /&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="drop_val"&gt;Option b&lt;/span&gt;&lt;input class="drop_opt" type="radio" name="dropdown" onclick="document.getElementById('drop_value').innerHTML = 'Option b'" /&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="drop_val"&gt;Option c&lt;/span&gt;&lt;input class="drop_opt" type="radio" name="dropdown" onclick="document.getElementById('drop_value').innerHTML = 'Option c'" /&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="drop_val"&gt;Option d&lt;/span&gt;&lt;input class="drop_opt" type="radio" name="dropdown" onclick="document.getElementById('drop_value').innerHTML = 'Option d'" /&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="drop_val"&gt;Option e&lt;/span&gt;&lt;input class="drop_opt" type="radio" name="dropdown" onclick="document.getElementById('drop_value').innerHTML = 'Option e'" /&gt; <br />
                        &nbsp;&nbsp;&lt;/div&gt; <br />
                        &lt;/div&gt; <br />
                      </pre>
                </div>
            </div><br /><br />


        </main>
        <Footer />
      </div>
    );
  }

}

export default AdvSelect;
