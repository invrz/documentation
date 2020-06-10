import React, {Component} from "react"
import '../fluent.css';
import StylesSidenav from "../StylesSidenavComp";
import Footer from "../FooterComp";
import { NavLink } from "react-router-dom";

class Typography extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Typography</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Headings</p>
                <p>
                  We provide some basic styling on header tags. In the example, you can see the the 6 header tags for 6 different sizes.
                  Headings Sizes are predefined and font-weight are also set for them. To use Different Sizes of Headings just call the h1 to h6 tags.
                </p>
                <div className="page_container outline">
                  <h1>Heading h1</h1>
                  <h2>Heading h2</h2>
                  <h3>Heading h3</h3>
                  <h4>Heading h4</h4>
                  <h5>Heading h5</h5>
                  <h6>Heading h1</h6>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;h1&gt;Heading h1&lt;/h1&gt; <br />
                          &lt;h2&gt;Heading h2&lt;/h2&gt; <br />
                          &lt;h3&gt;Heading h3&lt;/h3&gt; <br />
                          &lt;h4&gt;Heading h4&lt;/h4&gt; <br />
                          &lt;h5&gt;Heading h5&lt;/h5&gt; <br />
                          &lt;h6&gt;Heading h6&lt;/h6&gt; <br />
                        </pre>
                  </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">p, pre</p>
                <p>
                  There are some predefined styles applied to both p and pre tags, so you just need to add the markup to make the paragraphs.
                  Also, you can add class="bold" to make any paragraphs bold.
                </p>
                <div className="page_container outline">
                  <p>This is a paragrapgh</p>
                  <p className="bold">This is a bold paragrapgh</p><br />
                  <pre>This is a pre paragraph</pre>
                  <pre className="bold">This is a bold pre paragraph</pre>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;p&gt;This is a paragraph&lt;/p&gt; <br />
                          &lt;p class="bold"&gt;This is a bold paragraph&lt;/p&gt; <br /><br />
                          &lt;pre&gt;This is a pre paragraph&lt;/pre&gt; <br />
                          &lt;pre class="bold"&gt;This is a bold pre paragraph&lt;/pre&gt; <br />
                        </pre>
                  </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Links</p>
                <p>
                  Adding links is as easy as it gets, just add anchor(a) tag and add href attribute. Links are styled by default with a basic 
                  animation when touched or hovered over.
                </p>
                <div className="page_container outline">
                  <NavLink to="#">This is a Link</NavLink>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;a href="#"&gt;This is a link&lt;/a&gt; <br />
                        </pre>
                  </div>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

}


export default Typography;
