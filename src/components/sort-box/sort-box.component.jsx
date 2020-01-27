import React, { Component, Fragment } from 'react';
import './sort-box.styles.scss';
import MaterialIcon from 'material-icons-react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { CheckShopPage } from '../../redux/shop/shop.selectors';

class SortBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { sortCollectionItems} = this.props;
    this.setState({
      selectedOption: event.target.value
    }, () => sortCollectionItems(this.state.selectedOption))
  }

  render() {
    const { changeCollectionItemsDisplay, isOutsideShopPage } = this.props;
    if (isOutsideShopPage === true) {
      return (
      null
      )
    } else {
      return (
       <Fragment>
        <section className='sort-box'>
          <div className='sort-buttons-container'>
            <MaterialIcon icon='view_module' size='medium' color='RGB(0, 139, 139)' onClick={() => changeCollectionItemsDisplay('grid')}/>
            <MaterialIcon icon='view_list' size='medium' color='grey' onClick={() => changeCollectionItemsDisplay('list')}/>
          </div>
          <div className='form-container'>
            <span for="multi" className='label'>ORDENAR POR</span>
            <select value={this.state.selectedOption} onChange={this.handleSubmit} id="multi" name="multi" multiple size="2" className='select-box'>
              <optgroup className='select-group' label='Preço'>
                <option value='Menores Preços' className='select-item'>Menores Preços</option>
                <option value='Maiores Preços' className='select-item'>Maiores Preços</option>
              </optgroup>
            </select>
          </div>
        </section>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = createStructuredSelector ({
  isOutsideShopPage: CheckShopPage
})

export default connect(mapStateToProps)(SortBox);

