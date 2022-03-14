import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    { name: 'About Me', description: 'A little bit about myself.' },
    {
      name: 'Portfolio',
      description: 'Here are a few of my projects',
    },
    { name: 'Resume', description: 'Here is my resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  const [contactSelected, setContactSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(false);

  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div className='height-max'>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        setResumeSelected={setResumeSelected}
        setAboutSelected={setAboutSelected}
        setPortfolioSelected={setPortfolioSelected}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (<Portfolio />) : contactSelected ? (<ContactForm />) : resumeSelected ? (<Resume />) : aboutSelected ? (<About />) : portfolioSelected ? (<Portfolio />) : <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
