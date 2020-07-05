import React, {Component} from "react"
import '../extra.css';
import ControlsSidenav from "../ControlsSidenavComp";
import Footer from "../FooterComp";


function ShowPanel(){
  document.getElementById("side1").style.display=("block");
}
function HidePanel(){
  document.getElementById("side1").style.display=("none");
}

class SideNav extends Component{
  
  render(){
    return(
      <div>
        <ControlsSidenav />
        <main className="column offset-large3 offset-medium4 large9 medium8 small12 page_container">
            <br />
            <br />
            <h6>Side Navigation</h6>
            <br />
            <div className="page_container primary_white zi2">
                <p className="title bold">Overview</p>
                <p>
                  SideNavs (also called "left nav" or "navigation pane") provide links to the main areas of an app or a site. 
                  In larger configurations, the Nav is always on-screen, usually on the left of the view. In smaller configurations, 
                  the Nav may collapse into a skinnier version or be completely hidden until the user taps an icon. Also, SideNavs are 
                  only visible on Medium and Large Screen Sizes and not on Small ones.
                </p>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Usage</p>
                <p>
                  With current Support with Fluent Design for Web, SideNavs come fixed on the left side and look like what you can see 
                  on the left side of the screen if you are using a Medium or Large Screen Size.
                </p>
                <p>
                  The language-markup to get a similiar SideNav as on left side of this page is
                </p>
                <div className="code_content enabled">
                  <pre className="codeblock_text">
                    &nbsp;&nbsp;  &lt;nav class="column large3 medium4 small0"&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 class="bold"&gt;Title&lt;/h6&gt;  <br />
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="nav"&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="checkbox" className="nav_btn" /&gt;&lt;div className="nav_title"&gt;Styles&lt;/div&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="nav_group"&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/12colgrid"&gt;12 Col Grid&lt;/a&gt;&lt;br /&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/9colgrid"&gt;9 Col Grid&lt;/a&gt;&lt;br /&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/colors"&gt;Colors&lt;/a&gt;&lt;br /&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/depth"&gt;Depth&lt;/a&gt;&lt;br /&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/objalign"&gt;Elements Alignment&lt;/a&gt;&lt;br /&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/iconpack"&gt;Icon Pack&lt;/a&gt;&lt;br /&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/textalign"&gt;Text Alignment&lt;/a&gt;&lt;br /&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/typography"&gt;Typography&lt;/a&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;  <br />

                    &nbsp;&nbsp;  &lt;/nav&gt;
                  </pre>
                </div>
            </div><br /><br />

            <div className="page_container primary_white zi2">
                <p className="title bold">Extending on Usage</p>
                <p>
                  Use Nav for apps with many top-level navigation items that are of similar type. For example, 
                  a sports app with categories like Football, Baseball, Basketball, Soccer, and so on.
                  Keep the names of the navigation items brief and clear, rather than trying to be overly specific.
                  Use Nav for an app with a medium to high number of top-level views or categories. If your app is very simple, you may prefer a simpler hub-and-spoke layout.
                </p>
            </div><br /><br />
        </main>
        <Footer />

      </div>
    );
  }

}


export default SideNav;
