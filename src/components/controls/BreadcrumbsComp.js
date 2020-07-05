import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

class Breadcrumbs extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Breadcrumbs</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page’s 
                  location within a hierarchy and help the user understand where they are in relation to the rest of that 
                  hierarchy. They also afford one-click access to higher levels of that hierarchy. <br />
                  Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, making Breadcrumbs is easy.
                </p>
                <div className="outline">
                  <ul className="breadcrumb_container">
                    <li className="breadcrumb"><a href="https://fluentdesignforweb.github.io/">Home</a></li>
                    <li className="breadcrumb"><a href="https://fluentdesignforweb.github.io/documentation/">&gt; Documentation</a></li>
                    <li className="breadcrumb"><a href="https://fluentdesignforweb.github.io/documentation#/controls">&gt; Controls</a></li>
                    <li className="breadcrumb"><a className="bold" href="https://fluentdesignforweb.github.io/documentation#/breadcrumbs">&gt; Breadcrumbs</a></li>
                  </ul>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled">
                  <pre className="codeblock_text">
                    &nbsp;&nbsp;&lt;ul class="breadcrumb_container"&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li class="breadcrumb"&gt;&lt;a href="https://fluentdesignforweb.github.io/"&gt;Home&lt;/a&gt;&lt;/li&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li class="breadcrumb"&gt;&lt;a href="https://fluentdesignforweb.github.io/documentation/"&gt;&gt; Documentation&lt;/a&gt;&lt;/li&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li class="breadcrumb"&gt;&lt;a href="https://fluentdesignforweb.github.io/documentation#/controls"&gt;&gt; Controls&lt;/a&gt;&lt;/li&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li class="breadcrumb"&gt;&lt;a class="bold" href="https://fluentdesignforweb.github.io/documentation#/breadcrumbs"&gt;&gt; Breadcrumbs&lt;/a&gt;&lt;/li&gt;  <br />
                    &nbsp;&nbsp;&lt;/ul&gt;
                  </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page for best results. 
                  Making the last breadcrumb bold is optional, it just helps to denote that this is active page.
                </p>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}


export default Breadcrumbs;
