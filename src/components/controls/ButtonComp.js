import React, {Component} from "react"
import '../fluent.css';
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

function frosting(){

  document.querySelector(".frost_container:hover").onmousemove = e => {
      const x = e.pageX - e.target.offsetLeft - 480;
      const y = e.pageY - e.target.offsetTop - 40;
  
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
  };
}

class Button extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Buttons</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Buttons are best used to enable a user to commit a change or complete steps in a task. 
                  They are typically found inside forms, dialogs, panels or pages. An example of their 
                  usage is confirming the deletion of a file in a confirmation dialog.
                </p><p>
                  While buttons can technically be used to navigate a user to another part of the experience, 
                  this is not recommended unless that navigation is part of an action or their flow.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Default Button</p>
                <div className="page_container outline">
                  <button className="dlevel2">Standard Button</button>
                </div>
                <p>
                  The language-markup to get the Default Button is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
    &lt;button class="dlevel2"&gt;Standard Button&lt;/button&gt;<br />
                        </pre>
                </div>

            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Themed Button</p>
                <div className="page_container outline">
                  <button className="primary_white dlevel2">Primary White</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="primary_blue dlevel2">Primary Blue</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="primary_green dlevel2">Primary Green</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="primary_red dlevel2">Primary Red</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="primary_inverted dlevel2">Primary Inverted</button>
                </div>
                <p>
                  The language-markup to get the Themed Buttons are
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
    &lt;button class="primary_white dlevel2"&gt;Primary White&lt;/button&gt; <br />
    &lt;button class="primary_blue dlevel2"&gt;Primary Blue&lt;/button&gt; <br />
    &lt;button class="primary_green dlevel2"&gt;Primary Green&lt;/button&gt; <br />
    &lt;button class="primary_red dlevel2"&gt;Primary Red&lt;/button&gt; <br />
    &lt;button class="primary_inverted dlevel2"&gt;Primary Inverted&lt;/button&gt; <br />
                        </pre>
                </div>

            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Frost Button</p>
                <div className="page_container outline">
                  <button className="frost_container" onMouseOver={frosting}>
                    <span className="frost">Frost Button</span>
                  </button>
                </div>
                <p>
                  The language-markup to get the Default Button is
                </p>
                <div className="code_content enabled page_container">
                  <pre className="codeblock_text">
                        &lt;button class="frost_container" onmouseover="frosting()"&gt;  <br />
                        &nbsp;&nbsp;&lt;span class="frost"&gt;Frost Button&lt;/span&gt;  <br />
                        &lt;/button&gt;
                  </pre>
                </div>
                <p>
                  You can always combine themed colors with frost buttons to get frosted themed button like this one.
                </p>
                <div className="page_container outline">
                  <button className="frost_container primary_blue" onMouseOver={frosting}>
                    <span className="frost">Themed Frost Button</span>
                  </button>
                </div>
                <p>
                  The language-markup to get the Default Button is
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
                        &lt;button class="frost_container primary_blue" onmouseover="frosting()"&gt;  <br />
                        &nbsp;&nbsp;&lt;span class="frost"&gt;Themed Frost Button&lt;/span&gt;  <br />
                        &lt;/button&gt;
                        </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Pivot Button</p>
                <div className="page_container outline">
                  <a href="#" className="pivot_button">Primary White</a>
                </div>
                <p>
                  The language-markup to get the Themed Buttons are
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
    &lt;a class="pivot_button"&gt;Primary White&lt;/a&gt; <br />
                        </pre>
                </div>

            </div><br /><br />


            <div className="page_container primary_white zi2">
                <p className="title bold">Button Sizes</p>
                <p>
                  With Fluent Design for web, you get three predefined sizes for buttons, with frost buttons, 
                  and you can always expand on that by using your own custom css
                </p>
                <div className="page_container outline">
                  <button className="primary_white small">Small</button>
                  <button className="primary_white regular">Regular</button>
                  <button className="primary_white large frost_container" onMouseOver={frosting}>
                    <span className="frost">Large Frost</span>
                  </button>
                </div>
                <p>
                  The language-markup to get the Themed Buttons are
                </p>
                <div className="code_content enabled page_container">
                        <pre className="codeblock_text">
    &lt;button class="primary_white small"&gt;Small&lt;/button&gt; <br />
    &lt;button class="primary_white regular"&gt;Regular&lt;/button&gt; <br />
    &lt;button class="primary_white large frost_container" onmouseover="frosting()"&gt;  <br />
      &nbsp;&nbsp;&lt;span class="frost"&gt;Large Frost&lt;/span&gt;  <br />
    &lt;/button&gt;
                        </pre>
                </div>

            </div><br /><br />
        </main>
        <Footer />
      </div>
    );
  }

}


export default Button;
