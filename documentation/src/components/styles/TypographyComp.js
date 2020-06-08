import React, {Component} from "react"
import '../fluent.css';
import Sidenav from "../SidenavComp";
import Footer from "../FooterComp";

class Typography extends Component{
  
  render(){
    return(
      <div>
        <Sidenav />
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
                <div className="page_container">
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
                          &lt;h1&gt;Heading h1&lt;h1&gt; <br />
                          &lt;h2&gt;Heading h2&lt;h2&gt; <br />
                          &lt;h3&gt;Heading h3&lt;h3&gt; <br />
                          &lt;h4&gt;Heading h4&lt;h4&gt; <br />
                          &lt;h5&gt;Heading h5&lt;h5&gt; <br />
                          &lt;h6&gt;Heading h6&lt;h6&gt; <br />
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
