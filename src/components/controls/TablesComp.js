import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class Tables extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Tables</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Tables</p>
                <p>
                  Tables are great way to present data. And using tables in Fluent Design is as easy as it gets.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  Tables are made of two parts <b>thead</b>(table head) and <b>tbody</b>(table body). Thead can be used 
                  to differentiate how the heading of table is styled than rest of the table.
                </p>
                <div className="page_container outline">
                  <thead>
                    <tr>
                      <th className="primary_blue">Heading 1</th>
                      <th className="primary_blue">Heading 2</th>
                      <th className="primary_blue">Heading 3</th>
                      <th className="primary_blue">Heading 4</th>
                    </tr>
                  </thead>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;thead&gt;  <br />
                        &nbsp;&nbsp;&lt;tr&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;th class="primary_blue"&gt;Heading 1&lt;/th&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;th class="primary_blue"&gt;Heading 2&lt;/th&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;th class="primary_blue"&gt;Heading 3&lt;/th&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;th class="primary_blue"&gt;Heading 4&lt;/th&gt;  <br />
                        &nbsp;&nbsp;&lt;/tr&gt;  <br /> 
                        &lt;/thead&gt;
                      </pre>
                </div>

                <p>
                  Similarly, a table body will look like this
                </p>
                <div className="page_container outline">
                  <tbody className="box">
                  <tr>
                      <td>Cell 1, 1</td>
                      <td>Cell 1, 2</td>
                      <td>Cell 1, 3</td>
                      <td>Cell 1, 4</td>
                    </tr>
                    <tr>
                      <td>Cell 2, 1</td>
                      <td>Cell 2, 2</td>
                      <td>Cell 2, 3</td>
                      <td>Cell 2, 4</td>
                    </tr>
                    <tr>
                      <td>Cell 3, 1</td>
                      <td>Cell 3, 2</td>
                      <td>Cell 3, 3</td>
                      <td>Cell 3, 4</td>
                    </tr>
                  </tbody>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;tbody&gt;  <br />
                        &nbsp;&nbsp;&lt;tr&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 1, 1&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 1, 2&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 1, 3&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 1, 4&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&lt;/tr&gt;  <br /> 
                        &nbsp;&nbsp;&lt;tr&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 2, 1&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 2, 2&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 2, 3&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 2, 4&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&lt;/tr&gt;  <br /> 
                        &nbsp;&nbsp;&lt;tr&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 3, 1&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 3, 2&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 3, 3&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 3, 4&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&lt;/tr&gt;  <br /> 
                        &lt;/tbody&gt;
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  When you combine both table head and table body you get something like this. Also, wrap the &lt;table&gt; 
                  inside a <b>&lt;div class="table_container"&gt;</b> to make the table responsive.
                </p>
                <div className="page_container outline">
                  <div className="table_container">
                      <table className="dlevel2">
                        <thead>
                          <tr>
                            <th className="primary_blue">Heading 1</th>
                            <th className="primary_blue">Heading 2</th>
                            <th className="primary_blue">Heading 3</th>
                            <th className="primary_blue">Heading 4</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Cell 1,1</td>
                            <td>Cell 1,2</td>
                            <td>Cell 1,3</td>
                            <td>Cell 1,4</td>
                          </tr>
                          <tr>
                            <td>Cell 2,1</td>
                            <td>Cell 2,2</td>
                            <td>Cell 2,3</td>
                            <td>Cell 2,4</td>
                          </tr>
                          <tr>
                            <td>Cell 3,1</td>
                            <td>Cell 3,2</td>
                            <td>Cell 3,3</td>
                            <td>Cell 3,4</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                </div>
                <p>
                  The language-markup to get responsive table like above is
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;div class="table_container"&gt;  <br />
                        &nbsp;&nbsp;&lt;table class="dlevel2"&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;thead&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th class="primary_blue"&gt;Heading 1&lt;/th&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th class="primary_blue"&gt;Heading 2&lt;/th&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th class="primary_blue"&gt;Heading 3&lt;/th&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th class="primary_blue"&gt;Heading 4&lt;/th&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;  <br /> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/thead&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 1, 1&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 1, 2&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 1, 3&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 1, 4&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;  <br /> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 2, 1&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 2, 2&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 2, 3&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 2, 4&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;  <br /> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 3, 1&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 3, 2&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 3, 3&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Cell 3, 4&lt;/td&gt;  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;  <br /> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;  <br />
                        &nbsp;&nbsp;&lt;/table&gt;  <br />
                        &lt;/div&gt;
                      </pre>
                </div>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default Tables;
