import React, {Component} from "react"
import '../fluent.css';

class Footer extends Component{
  
  render(){
    return(
        <div className="column large12 pivot_container secondary_green top bottom">
            Fork this project on <a href="https://github.com/fluentdesignforweb/fluentdesignforweb.github.io" className="pivot_button">GitHub</a>
        </div>
    );
  }

}


export default Footer;