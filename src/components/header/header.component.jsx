import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = ({ collectionNames, fetchSingleCollection }) => {
  return (
    <section>
      <header className='header'>
        <nav className='nav-options'>
          <Link to='/' className='nav-option'>PÁGINA INICIAL</Link>
          {
            collectionNames.map((collection) => 
              <div className='nav-option' key={collection.id} onClick={() => fetchSingleCollection(collection.name)}>
              { collection.name.toUpperCase() }
              </div>)
          }
          <Link to='/' className='nav-option'>CONTATO</Link>
        </nav>
      </header>
    </section>
  )
}

export default Header;

