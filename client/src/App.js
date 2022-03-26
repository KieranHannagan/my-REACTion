import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(false);

  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div className='height-max'>
        <Nav
          setResumeSelected={setResumeSelected}
          setAboutSelected={setAboutSelected}
          setPortfolioSelected={setPortfolioSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      <main>
        { contactSelected ? (<ContactForm />) : resumeSelected ? (<Resume />) : aboutSelected ? (<About />) : portfolioSelected ? (<Portfolio />) : <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
