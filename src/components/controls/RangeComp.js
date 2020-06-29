import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";

function range(){
  
  var slider = document.getElementById("slider");
  var output = document.getElementById("slidervalue");
  output.innerHTML = slider.value;

  slider.oninput = function() {
  output.innerHTML = this.value;
  }

}

class Range extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Range</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  Ranges are really great way of taking input within a given boundry. Ranges are easy to implement 
                  and are more visually appealing than inputs such as numbers. Default minimum and maximum values of 
                  range are 0 and 100 respectively.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  When Using Fluent Design for Web, you don't need to add any additional classes to get a Input, just calling 
                  input of type range gives a prestyled Range field.
                </p>
                <div className="page_container outline">
                  <input type="range" /> <br /><br />
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="range" /&gt;  <br />
                      </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Values Maybe</p>
                <p>
                  Using just a little bit of JavaScript you can show at what value the range currently is at. Just call 
                  ShowRange() after including <b>fluent.js</b> to show range values.
                </p>
                <div className="page_container outline">
                  <input type="range" onMouseLeave={range} id="slider" /> <br /><br />
                  <button id="slidervalue" class="zi2">50</button>
                </div>
                <p>
                  The language-markup to get the above output
                </p>
                <div className="code_content enabled page_container">
                      <pre className="codeblock_text">
                        &lt;input type="range" onmouseleave="ShowRange();" id="slider" /&gt;  <br />
                        &lt;button id="slidervalue" class="zi2"&gt;50&lt;/button&gt;
                      </pre>
                </div>
            </div><br /><br />

        </main>
        <Footer />
      </div>
    );
  }

}

export default Range;
