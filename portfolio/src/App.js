import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'About Me', description: 'Delicious delicacies' },
    {
      name: 'Portfolio',
      description: 'Here are a few of my projects',
    },
    { name: 'Contact', description: 'Portraits of people in my life' },
    { name: 'Resume', description: 'Delicious delicacies' },
   
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
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
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;