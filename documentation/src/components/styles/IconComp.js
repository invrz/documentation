import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import '../icons.css';
import StylesSidenav from "../StylesSidenavComp";
import Footer from "../FooterComp";
import IconComp from "./IconPackComp";

class Icons extends Component{
  
  render(){
    return(
      <div>
        <StylesSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Icon Pack</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Add Fluent Icons to your project</p>
                <p>
                  To use Fluent Icons in your project, you just need to include this piece of code in HEAD tag of the HTML files.
                </p>
                <div className="code_content enabled page_container">
                    <pre className="codeblock_text">
    &lt;link href="https://fluentdesignforweb.github.io/fluent-icons.css" rel="stylesheet" type="text/css" /&gt;
                    </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">How to use Fluent Icons</p>
                <p>
                  To display Fluent Icons, you need to add appropriate ms-Icon classes with a modifier class inside an "i" tag. For example.
                </p>
                <div className="page_container outline">
                  <i className="ms-Icon ms-Icon--12PointStar icon-large"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="ms-Icon ms-Icon--GlobalNavButton icon-large"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="ms-Icon ms-Icon--Home icon-large"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="ms-Icon ms-Icon--FolderHorizontal icon-large"></i>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;i className="ms-Icon ms-Icon--12PointStar"&gt;&lt;/i&gt;<br />
                          &lt;i className="ms-Icon ms-Icon--GlobalNavButton"&gt;&lt;/i&gt;<br />
                          &lt;i className="ms-Icon ms-Icon--Home"&gt;&lt;/i&gt;<br />
                          &lt;i className="ms-Icon ms-Icon--FolderHorizontal"&gt;&lt;/i&gt;
                        </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Different Icon Sizes</p>
                <p>
                  Fluent Icons come in three different predefined sizes. They are small, medium and large. You can always get different sized icon 
                  by setting different font size for "i" tag.
                </p>
                <div className="page_container outline">
                  <div className="column large1 medium4 small4 ta_center btm_col">
                    <i className="ms-Icon ms-Icon--12PointStar icon-small"></i><br />
                    <span className="label">Small</span>
                  </div>
                  <div className="column large1 medium4 small4 ta_center btm_col">
                    <i className="ms-Icon ms-Icon--12PointStar icon-medium"></i><br />
                    <span className="label">Medium</span>
                  </div>
                  <div className="column large1 medium4 small4 ta_center btm_col">
                    <i className="ms-Icon ms-Icon--12PointStar icon-large"></i><br />
                    <span className="label">Large</span>
                  </div>
                </div>
                <p>
                  The language-markup to get the above output is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                          &lt;i className="ms-Icon ms-Icon--12PointStar"&gt;&lt;/i&gt;<br />
                          &lt;i className="ms-Icon ms-Icon--GlobalNavButton"&gt;&lt;/i&gt;<br />
                          &lt;i className="ms-Icon ms-Icon--Home"&gt;&lt;/i&gt;<br />
                          &lt;i className="ms-Icon ms-Icon--FolderHorizontal"&gt;&lt;/i&gt;
                        </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Icons Available to Use in Fluent Design</p>
                <p>
                  This is an Icons List where you can check which icons are available. Click on the icons to know the modifier class names.
                </p>
                <IconComp />
            </div><br /><br />
        </main>
        <Footer />
      </div>
    );
  }

}


export default Icons;
