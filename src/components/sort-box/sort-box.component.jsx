import React, { Component, Fragment } from 'react';
import './sort-box.styles.scss';
import { ReactComponent as ViewGrid } from "../../assets/view_module-24px.svg";
import { ReactComponent as ViewList } from "../../assets/view_list-24px.svg";

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
    const { changeCollectionItemsDisplay } = this.props;
    return(
     <Fragment>
      <section className='sort-box'>
        <div className='sort-buttons-container'>
          <ViewGrid className='sort-button' onClick={() => changeCollectionItemsDisplay('grid')}/>
          <ViewList className='sort-button' onClick={() => changeCollectionItemsDisplay('list')}/>
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

export default SortBox;
