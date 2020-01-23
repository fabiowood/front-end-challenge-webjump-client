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
      chooseSideBarFilterOptions: () => {
        const { selectTypeOption, selectedCollectionName } = this.props;
        let sideBarOptions = [];
        switch (selectedCollectionName) {
          case 'shirts':
            sideBarOptions = ['Casual'];
            break;
          case 'pants':
            sideBarOptions = ['Caminhada', 'Casual', 'Social'];
            break;
          case 'shoes':
            sideBarOptions = ['Corrida', 'Casual', 'Social'];
            break;
        }
        return (
            sideBarOptions.map((option) => {
              return (
                <li key={option} className='filter-option' onClick={() => selectTypeOption(option)}>{option}</li>
              )
            })
          )
        }
     }
  }

  render() {

    const { fetchSingleCollection, filterItemsByColor, filterItemsByGender, selectGender, selectColor } = this.props;
    const { categoryOptions, colorFilterOptions, genderFilterOptions, chooseSideBarFilterOptions } = this.state;

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
              chooseSideBarFilterOptions()
            }
          </ul>
        </section>
      </Fragment>
    )
  }
 }

export default SideBarFilter;
