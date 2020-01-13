import React from 'react';
import Header from './Header.js';
import Locations from './Locations.js';
import Episodes from './Episodes.js';
import Characters from './Characters.js';

import './App.css';
import Sidebar from './Sidebar.js';
import Mainpage from './Mainpage';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
         <div className="sidebar contents">
         <div className="container-fluid">
             <div className="row">
                 <div className="col-sm-3 sidebar">
                 <Sidebar />
                 </div> 
                 <div className="col-sm-7 mainpage">
              <Router>
                <Route exact path='/' render={()=><Mainpage/>}/>
                <Route exact path='/Locations' render={()=><Locations/>}/>
                <Route exact path='/Episodes' render={()=><Episodes/>}/>
                <Route exact path='/Characters' render={()=><Characters/>}/>
              </Router>
              
                 </div>
             </div>
         </div>
         </div>
      </div>
    );
  }
}


export default App;
