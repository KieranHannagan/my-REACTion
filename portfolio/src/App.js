import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

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

  return (
    <div className='height-max'>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio/>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
