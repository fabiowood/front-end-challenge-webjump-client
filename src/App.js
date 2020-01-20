/* eslint-disable default-case */
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Component Dependencies

import SignUpSignIn from './components/signup-signin/signup-signin.component';
import SearchBox from './components/search-box/search-box.component';
import Header from './components/header/header.component';
// import SideBarFilter from './components/sidebar-filter/sidebar-filter.component';
// import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Footer from './components/footer/footer.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      collectionNames: [],
      collectionItems: {
        shirts: null,
        pants: null,
        shoes: null
      },
      allCollections: [],
      displaySelectedCollection: null,
      searchBoxResults: null,
      displaySearchResults: false
    }
  }

  fetchCollectionNames = () => (
    axios.get("/api/V1/categories/list")
    .then(responseFromAPI => {
      this.setState({
        collectionNames: responseFromAPI.data.items
      })
    })
    .catch(err => {
      console.log(`Error 2: ${err.message}`)
    })
  )

  fetchCollections = () => {
    for (let collectionsId = 1; collectionsId <= 3; collectionsId += 1) {
      let collectionProducts = null;
      axios.get(`/api/V1/categories/${ collectionsId }`)
      .then(responseFromAPI => {
        collectionProducts = responseFromAPI.data;
        switch (collectionsId) {
          case 1:
            collectionProducts.id = 1;
            collectionProducts.name = 'Camisetas';
            collectionProducts.path = 'camisetas';
            this.state.allCollections.push(collectionProducts);
            this.setState({
              collectionItems: {
                shirts: collectionProducts,
                pants: this.state.collectionItems.pants,
                shoes: this.state.collectionItems.shoes
              }
            });
            break;
          case 2: 
            collectionProducts.id = 2;
            collectionProducts.name = 'Calças';
            collectionProducts.path = 'calcas';
            this.state.allCollections.push(collectionProducts);
            this.setState({
              collectionItems: {
                shirts: this.state.collectionItems.shirts,
                pants: collectionProducts,
                shoes: this.state.collectionItems.shoes
              }
            });
            break;
          case 3: 
            collectionProducts.id = 3; 
            collectionProducts.name = 'Sapatos';
            collectionProducts.path = 'sapatos';
            this.state.allCollections.push(collectionProducts);
            this.setState({
              collectionItems: {
                shirts: this.state.collectionItems.shirts,
                pants: this.state.collectionItems.pants,
                shoes: collectionProducts,
              }
            });
            break;
        }
        this.setState({
          displaySelectedCollection: this.state.collectionItems.shirts
        })
      })
      .catch(err => {
        console.log(`Error: ${err.message}`)
      })
    }
  }

  fetchSingleCollection = (collectionName) => {
    switch (collectionName) {
      case 'Camisetas':
        collectionName = 'shirts';
        break;
      case 'Calças':
        collectionName = 'pants';
        break;
      case 'Calçados':
        collectionName = 'shoes';
        break;
    }
    const { collectionItems } = this.state;
    const findSelectedCollection = Object.keys(collectionItems).filter(key => key.localeCompare(collectionName) === 0);
    const displaySelectedCollection = collectionItems[findSelectedCollection[0]];
    this.setState({
      displaySelectedCollection: displaySelectedCollection,
      displaySearchResults: false
    })
  }

  searchCollectionItems = (searchField) => {
    const { allCollections } = this.state;
    const allCollectionItems = allCollections.map(collection => collection.items);
    let searchBoxResults = {};
    allCollectionItems.forEach((collection) => {
        let filteredItem = collection.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));
        if (filteredItem.length !== 0) {
          searchBoxResults = filteredItem;
        }
      })
    if (searchBoxResults.length > 0 && searchField.length > 0) {
      this.setState({
        searchBoxResults: searchBoxResults,
        displaySearchResults: true
      })
    } else {
      this.setState({
        searchBoxResults: null,
        displaySearchResults: true
      })
    }
  }

  componentDidMount() {
    this.fetchCollectionNames();
    this.fetchCollections();
  }

  render() {
    const { collectionNames, collectionItems, displaySelectedCollection, searchBoxResults, displaySearchResults } = this.state;
    console.log(searchBoxResults);
    return (
      <section>
        <SignUpSignIn />
        <SearchBox searchCollectionItems={ this.searchCollectionItems }/>
        <Header collectionNames={ collectionNames } fetchSingleCollection={ this.fetchSingleCollection }/>
        <Switch>
          <Route exact path='/' render={() => <ShopPage collectionItems={ collectionItems } selectedCollection={ displaySelectedCollection } searchBoxResults={ searchBoxResults } displaySearchResults={displaySearchResults}/>} />
        </Switch>
        <Footer />
      </section>
    );
  }
}

export default App;
