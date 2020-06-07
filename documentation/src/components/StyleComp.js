import React, {Component} from "react"
import '../fluent.css';

class Styles extends Component{
  
  render(){
    return(
        <main className="column offset-large3 offset-medium4 large9 medium8 small12">
            <br />
            <br />
            <h6>Styles</h6>
            <br />
            <div className="page_container">
              <div className="column large4 medium10 small12">
                <button className="primary_white tile zi3">Colors</button>
              </div>
              <div className="column large4 medium10 small12">
                <button className="primary_white tile zi3">Typography</button>
              </div>
              <div className="column large4 medium10 small12">
                <button className="primary_white tile zi3">Elevation</button>
              </div>
              <div className="column large4 medium10 small12">
                <button className="primary_white tile zi3">12 Col Grid</button>
              </div>
              <div className="column large4 medium10 small12">
                <button className="primary_white tile zi3">9 Col Grid</button>
              </div>
              <div className="column large4 medium10 small12">
                <button className="primary_white tile zi3">Icon Pack</button>
              </div>
              </div>
        </main>
    );
  }

}


export default Styles;
