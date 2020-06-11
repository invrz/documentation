import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import StylesSidenav from "../StylesSidenavComp";
import Footer from "../FooterComp";

class ObjAlign extends Component{
  
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
                <p className="title bold">Elements Alignment</p>
                <p>
                  Aligning Elements Horizontally using Fluent Design for Web is as easy as it gets, just calling horizontal align classes can align the elements.
                </p>
                <div className="page_container outline">
                  <div className="column large6 medium6 small6 left outline dlevel2">
                    Elements can be left aligned by adding class="left"
                  </div><br /><br /><br /><br />
                  <div className="column large6 medium6 small6 right outline dlevel2">
                    Elements can be left aligned by adding class="right"
                  </div><br /><br /><br /><br />
                  <div className="column large6 medium6 small6 center outline dlevel2">
                    Elements can be left aligned by adding class="center"
                  </div><br />
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;div class="column large6 medium6 small6 left outline dlevel2"&gt;Elements can be left aligned by adding class="left"&lt;/div&gt; <br />
                          &lt;div class="column large6 medium6 small6 right outline dlevel2"&gt;Elements can be left aligned by adding class="right"&lt;/div&gt; <br />
                          &lt;div class="column large6 medium6 small6 center outline dlevel2"&gt;Elements can be left aligned by adding class="center"&lt;/div&gt; <br />
                        </pre>
                  </div>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}


export default ObjAlign;
