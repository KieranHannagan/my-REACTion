import React from 'react';

import {
  BrowserRouter as Router
} from "react-router-dom";

function Nav(props) {
  const {
    setAboutSelected,
    aboutSelected,
    setPortfolioSelected,
    portfolioSelected,
    setResumeSelected,
    resumeSelected,
    setContactSelected,
    contactSelected
  } = props;

  function resetStates(event) {
    setAboutSelected(false);
    setPortfolioSelected(false);
    setResumeSelected(false);
    setContactSelected(false);
    if (event.target.textContent === "About") {
      setAboutSelected(true);
    } else if (event.target.textContent === "Portfolio") {
      setPortfolioSelected(true);
    } else if (event.target.textContent === "Resume") {
      setResumeSelected(true);
    } else if (event.target.textContent === "Contact") {
      setContactSelected(true);
    }
  }

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
            <ul className="d-flex justify-content-between">
              <li className={`mx-2 ${aboutSelected && "active"}`} onClick={(event) => resetStates(event)}>About</li>
              <li className={`mx-2 ${portfolioSelected && "active"}`} onClick={(event) => resetStates(event)}>Portfolio</li>
              <li className={`mx-2 ${resumeSelected && "active"}`} onClick={(event) => resetStates(event)}>Resume</li>
              <li className={`mx-2 ${contactSelected && "active"}`} onClick={(event) => resetStates(event)}>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </Router>
  );

}

export default Nav;
