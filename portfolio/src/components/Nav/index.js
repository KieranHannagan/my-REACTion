import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="d-flex px-3 ">
      <div className='d-flex  width-max justify-content-between'>
        <h2 className='d-flex  ' >
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera"></span> Kieran Hannagan
          </a>
        </h2>
        <nav className='d-flex justify-content-end p-3 '>
          <ul className="d-flex ">
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            {categories.map((category) => (
              <li
                className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                  }`}
                key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
