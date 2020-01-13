import React from 'react';
import './Header.css';
import Logo from './rnm.jpg';
class Header extends React.Component{
   render(){
    const ColoredLine = ({ color }) => (
        <hr style={{
                color: color,
                backgroundColor: color,
                height: 1
            }}
        />
    );
    
    return(
        <div className="navbar">
            <nav className="navbar navbar-inverse top-nav">
                <div className="container-fluid">                    <div className="navbar-header">
                    <img src={Logo} id="logo-image"></img>
                    </div>
                    <form className="navbar-form navbar-right">

                        <div className="Search-group" id="searchform">
                            <span className="btn btn-default">Search By</span>
                            <input type="text" className="form-control" placeholder="Character or Location or Episodes" id="top-nav-search"></input>
                            <button type="submit" className=" btn btn-default" id="search-button">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
            <ColoredLine color="rgb(193, 193, 246)"></ColoredLine>
        </div>
        

    );
}
}
export default Header;