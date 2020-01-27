/* eslint-disable default-case */
import React, { Component, Fragment } from 'react';
import './sidebar-filter.styles.scss';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { CheckShopPage } from '../../redux/shop/shop.selectors';

class SideBarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClothesOptions: false,
      collectionOptions: ['Roupas', 'Calçados', 'Acessórios'],
      colorFilterOptions: [["Amarela", "Laranja"], ["Bege", "Rosa"], ["Azul", "Cinza", "Preta"]],
      genderFilterOptions: ["Masculina", "Feminina"],
      displayCollectionFilterOptions: () => {
        const { fetchSingleCollection } = this.props;
        const { collectionOptions, toggleClothesOptions } = this.state;
        return (
            collectionOptions.map((category) => category === 'Roupas' ? 
              <Fragment>
                <li key={category} className='category-option' onClick={() => this.toggleCollectionOptions()}>{category}
                {
                  toggleClothesOptions ?
                    <Fragment>
                    <li className='clothes-option' onClick={() => fetchSingleCollection('Camisetas')}>Camisetas</li> 
                    <li className='clothes-option' onClick={() => fetchSingleCollection('Calças')}>Calças</li>
                    </Fragment>
                  :
                    null
                }
                </li>
              </Fragment>
            : 
              <li key={category} className='category-option' onClick={() => fetchSingleCollection(category)}
              >{category}</li>)
        )
      },
      displayColorFilterOptions: () => {
        const { selectColor } = this.props;
        const { colorFilterOptions } = this.state;
        return (
          colorFilterOptions.map((color, index) => {
          let colorOptionsToDisplay;
          switch (index) {
            case 0:
              colorOptionsToDisplay = <li key={color} className={`color-option ${'orange-block'}`} onClick={() => selectColor(color)}>{color}</li>
              break;
            case 1:
              colorOptionsToDisplay = <li key={color} className={`color-option ${'pink-block'}`} onClick={() => selectColor(color)}>{color}</li>
              break;
            case 2:
              colorOptionsToDisplay = <li key={color} className={`color-option ${'dark-block'}`} onClick={() => selectColor(color)}>{color}</li>
              break;
            }
          return (
            colorOptionsToDisplay
           )
         })
        )
      },
      displayGenderFilterOptions: () => {
        const { selectGender } = this.props;
        const { genderFilterOptions } = this.state;
        return (
          genderFilterOptions.map((gender) => <li key={gender} className='gender-option' onClick={() => selectGender(gender)}>{gender}</li>)
        )
      },
      displaySideBarFilterOptions: () => {
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

  toggleCollectionOptions = () => {
    this.setState({
      toggleClothesOptions: !this.state.toggleClothesOptions
    })
  }

  render() {

    const { filterItemsByColor, filterItemsByGender, isOutsideShopPage} = this.props;
    const { displayCollectionFilterOptions, displaySideBarFilterOptions, displayColorFilterOptions, displayGenderFilterOptions } = this.state;
    
    if (isOutsideShopPage === true) {
      return (
      null
      )
    } else {
      return(
        <Fragment>
          <section className='side-bar'>
            <h2 className='side-bar-title'>FILTRE POR</h2>
            <ul className='side-bar-categories'>CATEGORIAS
              {
                displayCollectionFilterOptions()
              }
            </ul>
  
            {
              filterItemsByColor && 
              <ul className='side-bar-colors'>CORES
                <div className='color-container'>
                  {
                    displayColorFilterOptions()
                  }
                </div>
              </ul>
            }
  
            {
              filterItemsByGender && 
              <ul className='side-bar-gender'>GÊNERO
                {
                  displayGenderFilterOptions()
                }
              </ul>
            }
            <ul className='side-bar-other-filters'>TIPO
              {
                displaySideBarFilterOptions()
              }
            </ul>
          </section>
        </Fragment>
      )
    }
  }
 }

const mapStateToProps = createStructuredSelector ({
  isOutsideShopPage: CheckShopPage
})

export default connect(mapStateToProps)(SideBarFilter);

