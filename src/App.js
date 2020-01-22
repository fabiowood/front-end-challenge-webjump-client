/* eslint-disable no-loop-func */
/* eslint-disable default-case */
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Component Dependencies

import SignUpSignIn from './components/signup-signin/signup-signin.component';
import SearchBox from './components/search-box/search-box.component';
import Header from './components/header/header.component';
import SideBarFilter from './components/sidebar-filter/sidebar-filter.component';
// import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Footer from './components/footer/footer.component';

const lodashClonedeep = require("lodash.clonedeep");

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
      selectedCollection: null,
      selectedCollectionName: '',
      searchBoxResults: null,
      displaySearchResults: false,
      multiFilterResults: null,
      displayMultiFilterResults: false,
      filterItemsByColor: false,
      filterItemsByGender: false,
      sideBarCollectionOptions: [],
      filterSideBarWithSearchField: ''
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
            }, () => this.displayInitialCollection());
            break;
        }
      })
      .catch(err => {
        console.log(`Error: ${err.message}`)
      })
    }
  }

  displayInitialCollection = () => {
    this.setState({
      selectedCollection: this.state.collectionItems.shirts,
      filterItemsByColor:true,
      sideBarCollectionOptions: ['Casual', 'Social']
    })
  }

  fetchSingleCollection = (collectionName) => {
    let filterByColor;
    let filterByGender;
    let sideBarCollectionOptions = [];
    switch (collectionName) {
      case 'Camisetas':
      case 'Acessórios':
        collectionName = 'shirts';
        filterByColor = true;
        sideBarCollectionOptions = ['Casual'];
        break;
      case 'Calças':
      case 'Roupas':
        collectionName = 'pants';
        filterByGender = true;
        sideBarCollectionOptions = ['Caminhada', 'Casual', 'Social'];
        break;
      case 'Calçados':
        collectionName = 'shoes';
        filterByColor = true;
        sideBarCollectionOptions = ['Corrida', 'Casual', 'Social'];
        break;
    }
    const { collectionItems } = this.state;
    const findSelectedCollection = Object.keys(collectionItems).filter(key => key.localeCompare(collectionName) === 0);
    const selectedCollection = collectionItems[findSelectedCollection[0]];
    this.setState({
      selectedCollection: selectedCollection,
      multiFilterResults: null,
      displaySearchResults: false,
      displayMultiFilterResults: false,
      filterItemsByColor: filterByColor,
      filterItemsByGender: filterByGender,
      sideBarCollectionOptions: sideBarCollectionOptions,
      selectedCollectionName: collectionName
    })
  }

  fetchCollectionItemsByGender = (selectedGender) => {
    const { selectedCollection } = this.state;
    const multiFilterResults = lodashClonedeep(selectedCollection);
    const multiFilterResultsArray = [];
    for (let key in multiFilterResults) {
      if (key === 'items') {
        multiFilterResults[key].forEach((item) => {
          if (selectedGender.trim().localeCompare(item.filter[0].gender.trim()) === 0) {
            multiFilterResultsArray.push(item);
          }
        })
        delete multiFilterResults[key];
        break;
      }
    }
    multiFilterResults.items = multiFilterResultsArray;
    this.setState({
      multiFilterResults: multiFilterResults,
      displayMultiFilterResults: true,
    })
  }

  fetchCollectionItemsByColor = (selectedColor) => {
    const { selectedCollection } = this.state;
    const multiFilterResults = lodashClonedeep(selectedCollection);
    const multiFilterResultsArray = [];
    for (let key in multiFilterResults) {
      if (key === 'items') {
        multiFilterResults[key].forEach((item) => {
          if (selectedColor.trim().localeCompare(item.filter[0].color.trim()) === 0) {
            multiFilterResultsArray.push(item);
          }
        })
        delete multiFilterResults[key];
        break;
      }
    }
    multiFilterResults.items = multiFilterResultsArray;
    this.setState({
      multiFilterResults: multiFilterResults,
      displayMultiFilterResults: true,
    })
  }

  fetchCollectionItemsByTypeOption = (selectedOption) => {
    const { selectedCollection } = this.state;
    const multiFilterResults = lodashClonedeep(selectedCollection);
    const multiFilterResultsArray = [];
    for (let key in multiFilterResults) {
      if (key === 'items') {
        multiFilterResults[key].forEach((item) => {
          switch(selectedOption){
            case 'Corrida':
              if (item.name.toLowerCase().includes(selectedOption.toLowerCase())) {
                multiFilterResultsArray.push(item);
              };
              break;
            case 'Caminhada':
              if (item.name.toLowerCase().includes(selectedOption.toLowerCase())) {
                multiFilterResultsArray.push(item);
              };
              break;
            case 'Social':
              if (item.name.toLowerCase().includes(selectedOption.toLowerCase()) || item.name.toLowerCase().includes('Couro'.toLowerCase())) {
                multiFilterResultsArray.push(item);
              };
              break;
            case 'Casual':
              if (item.name.toLowerCase().includes(selectedOption.toLowerCase()) || 
               (
                !item.name.toLowerCase().includes('Corrida'.toLowerCase()) && !item.name.toLowerCase().includes('Caminhada'.toLowerCase()) && !item.name.toLowerCase().includes('Social'.toLowerCase()) && 
                !item.name.toLowerCase().includes('Couro'.toLowerCase()))
                ) {
                multiFilterResultsArray.push(item);
              };
              break;
          }
        })
        delete multiFilterResults[key];
        break;
      }
    }
    multiFilterResults.items = multiFilterResultsArray;
    this.setState({
      multiFilterResults: multiFilterResults,
      displayMultiFilterResults: true,
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
      });
    ;
    if (searchBoxResults.length > 0 && searchField.length > 0) {
      this.setState({
        searchBoxResults: searchBoxResults,
        displaySearchResults: true,
        filterSideBarWithSearchField: searchField
      })
    } else {
      this.setState({
        searchBoxResults: null,
        displaySearchResults: true,
        filterSideBarWithSearchField: searchField
      })
    }
  }

  componentDidMount() {
    this.fetchCollectionNames();
    this.fetchCollections();
    this.displayInitialCollection();
  }

  render() {
    const { collectionNames, selectedCollection, searchBoxResults, displaySearchResults, filterItemsByColor, filterItemsByGender, sideBarCollectionOptions, filterSideBarWithSearchField, multiFilterResults, displayMultiFilterResults } = this.state;
    return (
      <section>
        <SignUpSignIn />
        <SearchBox searchCollectionItems={ this.searchCollectionItems }/>
        <Header collectionNames={ collectionNames } fetchSingleCollection={ this.fetchSingleCollection }/>
        <SideBarFilter fetchSingleCollection={ this.fetchSingleCollection } filterItemsByColor={ filterItemsByColor } filterItemsByGender={ filterItemsByGender} selectColor={ this.fetchCollectionItemsByColor } selectGender={ this.fetchCollectionItemsByGender } selectTypeOption={this.fetchCollectionItemsByTypeOption} displaySearchResults={ displaySearchResults } searchField={ filterSideBarWithSearchField } sideBarCollectionOptions={ sideBarCollectionOptions }/>
        <Switch>
          <Route exact path='/' render={() => <ShopPage selectedCollection={ selectedCollection } searchBoxResults={ searchBoxResults } displaySearchResults={ displaySearchResults } multiFilterResults={ multiFilterResults } displayMultiFilterResults={ displayMultiFilterResults }/>} />
        </Switch>
        <Footer />
      </section>
    );
  }
}

export default App;

    // let collectionName = null;
  
    // const findCollectionName = () => {
    //   for(let counter = 0; counter <= searchBoxResults.length; counter += 1) {
    //     console.log(searchBoxResults[counter]);
    //     if (searchBoxResults[counter].name.toLowerCase().includes('tênis')) {
    //       collectionName = "Calçados";
    //       break;
    //     } else if(searchBoxResults[counter].name.toLowerCase().includes('camiseta')) {
    //       collectionName = "Camisetas";
    //       break;
    //     } else if(searchBoxResults[counter].name.toLowerCase().includes('calça')) {
    //       collectionName = "Calças";
    //       break;
    //     }
    //   }
    //   console.log(collectionName);
    //   return collectionName;
    // }

    // findCollectionName()