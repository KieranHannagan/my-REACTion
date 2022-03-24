import React, { useEffect } from 'react';
// import Portfolio from '..Portfolio/';
// import Resume from './components/Resume';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

function Nav() {
  return (
    <Router>
      <header className="d-flex px-3 ">
        <div className='d-flex  width-max justify-content-between mt-3'>
          <h2 className='d-flex  ' >
            <a data-testid="link" href="/">
              <span role="img" aria-label="camera"></span> Kieran Hannagan
            </a>
          </h2>
          <nav className='d-flex justify-content-end p-3'>
            <ul className="d-flex ">
              <li className={`mx-2`}>
                <Link to="/contact" >Contact</Link>
              </li>
              <li className={`mx-2`}>
                <Link to="/about" >About Me</Link>
              </li>
              <li className={`mx-2`}>
                <Link to="/portfolio" >Portfolio</Link>
              </li>
              <li className={`mx-2`}>
                <Link to="/resume">Resume</Link>
              </li>

            </ul>
          </nav>
          
        </div>
      </header>
    </Router>
  );
  function ContactForm() {
    return <h2>Contact</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
}

export default Nav;
