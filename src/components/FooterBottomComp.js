import React, {Component} from "react"
import '../fluent.css';

class Footer extends Component{
  
  render(){
    return(
        <div className="column large12 pivot_container secondary_green top bottom">
            <div className="column large6 medium6 small12">
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fork this project on <a href="https://github.com/fluentdesignforweb/fluentdesignforweb.github.io" className="pivot_button">GitHub</a><br /><br />
            </div>
            <div className="column large6 medium6 small12">
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have an Issue<a href="https://github.com/fluentdesignforweb/fluentdesignforweb.github.io/issues/new" className="pivot_button">Submit Here</a><br /><br />
            </div>
        </div>
    );
  }

}


export default Footer;