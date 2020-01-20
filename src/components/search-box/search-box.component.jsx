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
  const { searchCollectionItems } = this.props;
  searchCollectionItems(searchField);
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
