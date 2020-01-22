/* eslint-disable default-case */
import React, { Component, Fragment } from 'react';
import './sidebar-filter.styles.scss';

class SideBarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryOptions: ['Roupas', 'Calçados', 'Acessórios'],
      colorFilterOptions: ["Amarela", "Azul", "Preta"],
      genderFilterOptions: ["Masculina", "Feminina"],
    }
    // console.log(this.props.searchField);
  }

  render() {
    const { fetchSingleCollection, filterItemsByColor, filterItemsByGender, sideBarCollectionOptions, selectGender, selectColor, selectTypeOption } = this.props;
    const { categoryOptions, colorFilterOptions, genderFilterOptions } = this.state;
    return(
      <Fragment>
        <section className='side-bar'>
          <h2 className='side-bar-title'>FILTRE POR</h2>
          <ul className='side-bar-categories'>CATEGORIAS
            {
              categoryOptions.map((category) => <li key={category} className='category-option' onClick={() => fetchSingleCollection(category)}
            >{category}</li>)
            }
          </ul>

          {
            filterItemsByColor && 
            <ul className='side-bar-colors'>CORES
              {
                colorFilterOptions.map((color) => <li key={color} className='color-option' onClick={() => selectColor(color)}>{color}</li>)
              }
            </ul>
          }

          {
            filterItemsByGender && 
            <ul className='side-bar-gender'>GÊNERO
              {
                genderFilterOptions.map((gender) => <li key={gender} className='gender-option' onClick={() => selectGender(gender)}>{gender}</li>)
              }
            </ul>
          }
          <ul className='side-bar-other-filters'>TIPO
            {
              sideBarCollectionOptions.map((option) => <li key={option} className='filter-option' onClick={() => selectTypeOption(option)}>{option}</li>)
            }
          </ul>
        </section>
      </Fragment>
    )
  }
 }

export default SideBarFilter;
