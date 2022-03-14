import React, { useEffect } from 'react';

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
    <header className="d-flex px-3 ">
      <div className='d-flex  width-max justify-content-between mt-3'>
        <h2 className='d-flex  ' >
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera"></span> Kieran Hannagan
          </a>
        </h2>
        <nav className='d-flex justify-content-end p-3'>
          <ul className="d-flex ">
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true) }>Contact</span>
            </li>
            <li className={`mx-2 ${!aboutMeSelected}`}>
              <span onClick={() => setAboutSelected(true)}>About Me</span>
            </li>
            <li className={`mx-2 ${!portfolioSelected}`}>
              <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
            </li>
            <li className={`mx-2 ${!resumeSelected}`}>
              <span onClick={() => setResumeSelected(true)}>Resume</span>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
