import React from "react";
import "./Navbar.css"

const Navbar = props => (
    <div className="container">
    <nav className="navbar">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-brand"  >Home </a>
      </li>
      <li className="nav-item">{props.success} </li>

      <li className="nav-item"> Score:  {props.score} </li>

      <li className="nav-item"> Highest Score:{props.highScore} </li>
    
      </ul>
    </nav>
    <div className="jumbotron" style={{height:300}}>
  
  </div> 
   <h1 className="jumbo-text">Click on an image but don't click more than once!!</h1>
  </div>

);

export default Navbar;