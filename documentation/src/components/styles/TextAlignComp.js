import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import StylesSidenav from "../StylesSidenavComp";
import Footer from "../FooterComp";

class TextAlign extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Alignment</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Text Alignment</p>
                <p>
                  Aligning text using Fluent Design for Web is as easy as it gets, just calling text align classes can align the text.
                </p>
                <div className="page_container outline">
                  <p className="ta_left">
                    Text can be left aligned by adding class="ta_left" to any text.<br /><br />
                  </p>
                  <p className="ta_right">
                    Text can be right aligned by adding class="ta_right" to any text.<br /><br />
                  </p>
                  <p className="ta_center">
                    Text can be center aligned by adding class="ta_center" to any text.<br /><br />
                  </p>
                  <p className="ta_justify">
                    Text can be justified aligned by adding class="ta_justify" to any text.
                  </p>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;p class="ta_left"&gt;Text can be left aligned by adding class="ta_left" to any text.&lt;/p&gt; <br />
                          &lt;p class="ta_right"&gt;Text can be right aligned by adding class="ta_right" to any text.&lt;/p&gt; <br />
                          &lt;p class="ta_center"&gt;Text can be center aligned by adding class="ta_center" to any text.&lt;/p&gt; <br />
                          &lt;p class="ta_justify"&gt;Text can be justified aligned by adding class="ta_justify" to any text.&lt;/p&gt; <br />
                        </pre>
                  </div>
            </div><br /><br />

        </main><br /><br /><br />
        <Footer />
      </div>
    );
  }

}


export default TextAlign;
