import React from 'react';
import './Sidebar.css';
 import Locations from './Locations.js';
 import Characters from './Characters.js';
 import Episodes from './Episodes.js';
 import { BrowserRouter, Route, Link } from "react-router-dom";
class Sidebar extends React.Component{
  
    
    render()
    {
 
    return(
        <div>
            <div className="sidebar">
                 {/* <BrowserRouter> */}
                 <ul>
               <li> <Link className="sidebar-link" to="/locations" onClick={this.redirect} replace>Locations</Link></li>
               <li> <Link className="sidebar-link" to="/characters"onClick={this.redirect} replace>Characters</Link></li>
               <li> <Link className="sidebar-link" to="/episodes" onClick={this.redirect} replace>Episodes</Link></li>
                </ul>
                {/* <Route 
                path="/locations"
                component={Locations}
                />
                <br />
                 <Route 
                path="/characters"
                component={Characters}
                />
                <br />
                 <Route 
                path="/episodes"
                component={Episodes}
                />
                
                </BrowserRouter> 
                 */}
            </div>


        </div>
    )
}
}

export default Sidebar;