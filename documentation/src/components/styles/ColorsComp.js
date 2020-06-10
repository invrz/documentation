import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import StylesSidenav from "../StylesSidenavComp";
import Footer from "../FooterComp";

class Colors extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Colors</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Primary Colors</p>
                <p>
                  With fluent design for web, you get a set of Primary Colors and their Equivalent Secondary(Accent) Colors predefined for usage. 
                  Along with that, additional colors can always be added using custom styles.
                </p>
                <div className="page_container outline">
                  <button className="tab primary_blue zi1">
                    Primary Blue <br />
                    #0065AF
                  </button>
                  <button className="tab primary_green zi1">
                    Primary Green <br />
                    #28B85B
                  </button>
                  <button className="tab primary_red zi1">
                    Primary Red <br />
                    #CC2936
                  </button>
                  <button className="tab primary_yellow zi1">
                    Primary Yellow <br />
                    #CCC908
                  </button>
                  <button className="tab primary_inverted zi1">
                    Primary Inverted <br />
                    #1E1E1E
                  </button>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;button class="primary_blue"&gt;Primary Blue&lt;br&gt;#0065AF&lt;/button&gt; <br />
                          &lt;button class="primary_green"&gt;Primary Green&lt;br&gt;#28B85B&lt;/button&gt; <br />
                          &lt;button class="primary_red"&gt;Primary Red&lt;br&gt;#CC2936&lt;/button&gt; <br />
                          &lt;button class="primary_yellow"&gt;Primary Yellow&lt;br&gt;#CCC908&lt;/button&gt; <br />
                          &lt;button class="primary_inverted"&gt;Primary Inverted&lt;br&gt;#1E1E1E&lt;/button&gt; <br />
                        </pre>
                  </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Secondary Colors</p>
                <p>
                  With all the Primary Colors in order, these are the Secondary Colors which can be used with the Primary Colors.
                </p>
                <div className="page_container outline">
                  <button className="tab secondary_blue zi1">
                    Secondary Blue <br />
                    #06A7DD
                  </button>
                  <button className="tab secondary_green zi1">
                    Secondary Green <br />
                    #06A77D
                  </button>
                  <button className="tab secondary_red zi1">
                    Secondary Red <br />
                    #DE1738
                  </button>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;button class="secondary_blue"&gt;Secondary Blue&lt;br&gt;#06A7DD&lt;/button&gt; <br />
                          &lt;button class="secondary_green"&gt;Secondary Green&lt;br&gt;#06A77D&lt;/button&gt; <br />
                          &lt;button class="secondary_red"&gt;Secondary Red&lt;br&gt;#DE1738&lt;/button&gt; <br />
                        </pre>
                  </div>
            </div><br /><br />
        </main>
        <Footer />
      </div>
    );
  }

}


export default Colors;
