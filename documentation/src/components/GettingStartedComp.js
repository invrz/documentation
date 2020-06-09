import React, {Component} from "react";
import '../fluent.css';
import { NavLink } from "react-router-dom";

class GettingStarted extends Component{
  
  render(){
    return(
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Get Started</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                    Think for a moment that, what would happen if you combine the Metro UI, with Material Design, the result is Fluent Design also called Fabric UI.
                    Fluent Design is the design which is used by Windows 10 and other UWP apps. But why should it be limited to UWP apps only, why can't we use the same for websites. That's why, we have come up with this project, where we aim to recreate the Fluent Design for web.
                    We are still in development but you can download Fluent Design For Web from the button provided below, and learn how to use it in development using the given link.
                </p>
                <p className="title bold">What is Fluent Design for Web?</p>
                <p>
                    Fluent Design for Web, or Fabric UI, is a design used by Windows 10 and other UWP apps, combining Metro UI with Material Design. 
                    This project is aimed at bringing this Fluent Design for web applications and websites.
                </p>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Add Fluent Design in your Project</p>
                <p>
                    Fluent Design for Web is easy to use, and even easier to include it in your project and use it. To use Fluent Design for Web in your project 
                    you just need to include this piece of code in HEAD tag of the HTML files.<br /><br />
                    <div className="code_content enabled">
                        <pre className="codeblock_text">
    &lt;link href="https://fluentdesignforweb.github.io/fluent.min.css" rel="stylesheet" type="text/css" /&gt;
                        </pre>
                    </div>
                    Or, <br /><br />
                    <div className="code_content enabled">
                        <pre className="codeblock_text">
    &lt;link href="https://fluentdesignforweb.github.io/fluent.css" rel="stylesheet" type="text/css" /&gt;
                        </pre>
                    </div>
                    Use Minified CSS file to get higher performance, also you can include fluent.js file if you want to use frosting effects, modals, sidepanels and overlays.
                    <br /><br />
                    <div className="code_content enabled">
                        <pre className="codeblock_text">
    &lt;link href="https://fluentdesignforweb.github.io/fluent.js" rel="stylesheet" type="text/css" /&gt;
                        </pre>
                    </div>
                </p>
            </div>
            <br /><br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Use Fluent Design Classes in your project</p>
                <p>
                    Best part about including Fluent Design for Web in your project is, it styles most of the common elements like Headings, Paragraphs, Links, etc on its own 
                    you just need to add their HTML for example just adding and h3 tag styles it.
                    <br /><br />
                    <div className="code_content enabled">
                        <pre className="codeblock_text">
    &lt;h3&gt;Hi, Headings don't require to call for any classes&lt;/h3&gt;
                        </pre>
                        <h3>Hi, Headings don't require to call for any classes</h3>
                    </div>
                    <br /><br />
                    And if you want to add some complex styles, its still easy, you just need to include the required classes, for example if you want to make the heading bold 
                    just add class="bold" to h1 tag
                    <br /><br />
                    <div className="code_content enabled">
                        <pre className="codeblock_text">
    &lt;h3 class="bold"&gt;Adding class="bold" makes heading bold&lt;/h3&gt;
                        </pre>
                        <h3 class="bold">Adding class="bold" makes heading bold</h3>
                    </div>
                </p><br />
                <p className="title bold">Extending on Usage</p>
                <p>
                    You can go through the following links to know more about the classes which Fluent Design for Web has and how to use them in your website.<br /><br />
                    <NavLink to="/styles">Styles</NavLink><br />
                    <NavLink to="/controls">Controls</NavLink><br />
                    <NavLink to="/iconpack">Icons</NavLink><br />
                </p>

            </div>
        </main>
    );
  }

}


export default GettingStarted;
