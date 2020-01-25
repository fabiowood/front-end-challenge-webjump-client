import React, {Component} from 'react';
import './search-box.styles.scss';
import logo from '../../assets/logo_webjump.png';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
    }
  }

handleChange = (event) => {
  this.setState({
    searchField: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  const { searchField } = this.state;
  const { searchCollectionItems, allCollections } = this.props;
  const allCollectionItems = allCollections.map(collection => collection.items);
  let searchBoxResults = {};
  allCollectionItems.forEach((collection) => {
    let filteredItem = collection.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));
    if (filteredItem.length !== 0) {
      searchBoxResults = filteredItem;
    }
  });
  let searchCollectionName;
  let filterByColor;
  let filterByGender;
  console.log(searchBoxResults);
  console.log(searchField);
  if (searchBoxResults.length !== 0 && searchField.length !== 0) {
    searchBoxResults.forEach((searchResult) => {
      if (searchResult.name.toLowerCase().includes('camiseta')) {
        searchCollectionName = 'shirts';
        filterByColor = true;
      } else if (searchResult.name.toLowerCase().includes('calça')) {
        searchCollectionName = 'pants';
        filterByGender = true;
      } else if (searchResult.name.toLowerCase().includes('tênis')) {
        searchCollectionName = 'shoes';
        filterByColor = true;
      }
    })
  } else {
    searchBoxResults = null;
    searchCollectionName = null;
    filterByColor = false;
    filterByGender = false;
  }
  searchCollectionItems(searchBoxResults, searchField, searchCollectionName, filterByColor, filterByGender);
  this.setState({
    searchField: ''
  })
}

render() {
  return (
    <section className='container'>
      <picture className='picture-container'>
        <img src={logo} alt={'logo'} className='logo-container'/>
      </picture>
      <form className='form-container' onSubmit={this.handleSubmit}>
        <input type='search' placeholder='Encontre o seu produto' className='search-box' value={this.state.searchField} onChange={this.handleChange}></input>
        <button type='submit' className='search-button'>BUSCAR</button>   
      </form>
    </section>
  )
 }

}

export default SearchBox;
