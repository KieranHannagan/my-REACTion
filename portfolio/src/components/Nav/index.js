import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav(props) {
  const {
    resumeSelected,
    setResumeSelected,
    aboutMeSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected
  } = props;


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
              <li className={`mx-2 ${'navActive'}`}>
                <Link to="/contact" ></Link>
                <span onClick={() => setContactSelected(true)}>Contact</span>
              </li>
              <li className={`mx-2 `}>
                <Link to="/about" ></Link>
                <span onClick={() => setAboutSelected(true)}>About Me</span>
              </li>
              <li className={`mx-2`}>
                <Link to="/portfolio" ></Link>
                <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
              </li>
              <li className={`mx-2 ${!resumeSelected}`}>
                <Link to="/resume" ></Link>
                <span onClick={() => setResumeSelected(true)}>Resume</span>
              </li>

            </ul>
          </nav>
        </div>
      </header>
    </Router>
  );
}

export default Nav;
