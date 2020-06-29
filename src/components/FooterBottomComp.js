import React, {Component} from "react"

class Footer extends Component{
  
  render(){
    return(
        <div className="column large12 pivot_container primary_red top bottom" style={{padding: "0.25%"}}>
            <div className="column large6 medium6 small12">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fork this project on <a href="https://github.com/fluentdesignforweb/fluentdesignforweb.github.io" className="pivot_button">GitHub</a><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have an Issue<a href="https://github.com/fluentdesignforweb/fluentdesignforweb.github.io/issues/new" className="pivot_button">Submit Here</a>
            </div>
        </div>
    );
  }

}


export default Footer;