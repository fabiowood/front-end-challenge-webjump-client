import React from 'react';
import './header.styles.scss';

const Header = ({ collectionNames, fetchSingleCollection }) => {
  return (
    <section>
      <header className='header'>
        <nav className='nav-options'>
          <div className='nav-option'>PÁGINA INICIAL</div>
          {
            collectionNames.map((collection) => 
              <div className='nav-option' key={collection.id} onClick={() => fetchSingleCollection(collection.name)}>
              { collection.name.toUpperCase() }
              </div>)
          }
          <div className='nav-option'>CONTATO</div>
        </nav>
      </header>
    </section>
  )
}

export default Header;

