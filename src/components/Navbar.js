import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='#'>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
    
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/business">Business</Link>
          </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/Entertainment">Entertainment</Link>
          </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/Health">Health</Link>
          </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/Science">Science</Link>
          </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/Sports">Sports</Link>
          </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/Technology">Technology</Link>
          </li>
      
      </ul>
      
  </div>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar