import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" href="/"><b>BR</b> Architecture </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Projects" className="nav-link active" aria-current="page" href="/">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to='/About' className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
  )
}
