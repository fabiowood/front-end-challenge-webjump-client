import React, { Fragment } from 'react';
import './sidebar-filter.styles.scss';

const SideBarFilter = ({ selectedCollection, searchBoxResults, displaySearchResults }) => {
  return(
    <Fragment>
      <section className='side-bar'>
        <h2 className='side-bar-title'>FILTRE POR</h2>
        <ul className='side-bar-categories'>CATEGORIAS
          <li className='category-option'>Roupas</li>
          <li className='category-option'>Sapatos</li>
          <li className='category-option'>Acessórios</li>
        </ul>
        <ul className='side-bar-colors'>CORES</ul>
        <ul className='side-bar-other-filters'>TIPO
          <li className='filter-option'>Corrida</li>
          <li className='filter-option'>Caminhada</li>
          <li className='filter-option'>Casual</li>
          <li className='filter-option'>Social</li>
        </ul>
      </section>
    </Fragment>
  )
}

export default SideBarFilter;
