import React, {Component} from "react"
import './extra.css';
import Sidenav from "./SidenavComp";
import Footer from "./FooterComp";

class Boilerplate extends Component{
  
  render(){
    return(
      <div>
        <Sidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>HTML Boilerplate</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  This is a basic HTML5 Boilerplate which can be used while setting up your project. It imports all the required stylesheets 
                  and scripts using which a project can be made using Fluent Design for Web. Note that, in the Boilerplate we are importing 
                  fluent.min.css as it takes less space and loads faster, hence improving the performance. Also, a placeholder for both nav 
                  and main have been provided. Just copy this Boilerplate and get started.
                </p>
                <div className="code_content enabled">
                      <pre className="codeblock_text">

&lt;!doctype html&gt;  <br />
&lt;html lang=""&gt;  <br />

&nbsp;&nbsp;&lt;head&gt;  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="utf-8"&gt;  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Project Title&lt;/title&gt;  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name="description" content="Project description"&gt;  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;  <br /><br />

&nbsp;&nbsp;  &lt;meta property="og:title" content=""&gt;  <br />
&nbsp;&nbsp;  &lt;meta property="og:type" content=""&gt;  <br />
&nbsp;&nbsp;  &lt;meta property="og:url" content=""&gt;  <br />
&nbsp;&nbsp;  &lt;meta property="og:image" content=""&gt;  <br /><br />

&nbsp;&nbsp;  &lt;link rel="manifest" href="site.webmanifest"&gt;  <br />
&nbsp;&nbsp;  &lt;link rel="apple-touch-icon" href="icon.png"&gt;  <br /><br />

&nbsp;&nbsp;  &lt;link rel="stylesheet" href="https://fluentdesignforweb.github.io/normalize.css"&gt;  <br />
&nbsp;&nbsp;  &lt;link rel="stylesheet" href="https://fluentdesignforweb.github.io/fluent.min.css"&gt;  <br />
&nbsp;&nbsp;  &lt;link rel="stylesheet" href="https://fluentdesignforweb.github.io/fluent-icons.css"&gt;  <br /><br />

&nbsp;&nbsp;  &lt;meta name="theme-color" content="#fafafa"&gt;  <br />
&nbsp;&nbsp;&lt;/head&gt;  <br />

&nbsp;&nbsp;&lt;body&gt;  <br />

&nbsp;&nbsp;&nbsp;&nbsp;  &lt;nav class="column large3 medium4 small0"&gt;  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5&gt;This is the Side Navigation Template&lt;/h5&gt;  <br />
&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/nav&gt;  <br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;  &lt;main class="column offset-large3 offset-medium4 large9 medium8 small12 page_container"&gt;  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;h3&gt;Hi! This is Simple Boilerplate for Fluent Design for Web.&lt;/h3&gt;  <br />
&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/main&gt;  <br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;  &lt;script src="https://fluentdesignforweb.github.io/fluent.js" type="text/javascript"&gt;&lt;/script&gt;  <br />
&nbsp;&nbsp;&lt;/body&gt;  <br />

&lt;/html&gt;  <br />


                      </pre>
                </div>
            </div><br /><br />


        </main>
        <Footer />
      </div>
    );
  }

}
     
export default Boilerplate;
