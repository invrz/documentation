import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import StylesSidenav from "../StylesSidenavComp";
import Footer from "../FooterComp";

class Depth extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Depth</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Depth Levels</p>
                <p>
                  Insted of making different classes fot raised buttons, raised cards, or any other raised element for that matter, 
                  with Fluent Design for Web, you need to call one additional class to make any element have a raised effect, and 
                  using it is simple too, just add a d_level class to your elements.
                </p>
                <div className="page_container outline">
                  <button className="tab primary_white dlevel0">
                    Depth Level 0 <br />
                  </button>
                  <button className="tab primary_white dlevel1">
                    Depth Level 1 <br />
                  </button>
                  <button className="tab primary_white dlevel2">
                    Depth Level 2 <br />
                  </button>
                  <button className="tab primary_white dlevel3">
                    Depth Level 3 <br />
                  </button>
                  <button className="tab primary_white dlevel4">
                    Depth Level 4 <br />
                  </button>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;button class="primary_white dlevel0"&gt;Depth Level 0&lt;/button&gt; <br />
                          &lt;button class="primary_white dlevel1"&gt;Depth Level 1&lt;/button&gt; <br />
                          &lt;button class="primary_white dlevel2"&gt;Depth Level 2&lt;/button&gt; <br />
                          &lt;button class="primary_white dlevel3"&gt;Depth Level 3&lt;/button&gt; <br />
                          &lt;button class="primary_white dlevel4"&gt;Depth Level 4&lt;/button&gt; <br />
                        </pre>
                  </div>
            </div><br /><br />

        </main><br /><br /><br />
        <Footer />
      </div>
    );
  }

}


export default Depth;
