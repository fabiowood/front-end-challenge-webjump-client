/* eslint-disable default-case */
import React from 'react';
import { Link } from 'react-router-dom';
import './navigation-path.styles.scss';

const NavigationPath = ({ selectedCollectionName }) => {
  
  switch(selectedCollectionName) {
    case 'shirts':
      selectedCollectionName = 'Camisetas';
      break;
    case 'pants':
      selectedCollectionName = 'Calças';
      break;
    case 'shoes':
      selectedCollectionName = 'Calçados';
      break;
  }

  return(
      <section className='navigation-path'>
        <span>Página Inicial</span>
        <span className='path-arrow'>></span>
        <Link to='/' className='path-link'>{selectedCollectionName}</Link>
      </section>
    )

}

export default NavigationPath;
