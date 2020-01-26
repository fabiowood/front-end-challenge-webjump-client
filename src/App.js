/* eslint-disable no-loop-func */
/* eslint-disable default-case */
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchCollectionNames } from './redux/shop/shop.actions';
import './App.css';

// Component Dependencies

// import HomePage from './pages/home-page/home-page.component';
import SignUpSignInDisplay from './components/signup-signin-display/signup-signin-display.component';
import SearchBox from './components/search-box/search-box.component';
import Header from './components/header/header.component';
import SignUpSignInPage from './pages/signup-signin/signup-signin.component';
import NavigationPath from './components/navigation-path/navigation-path.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SideBarFilter from './components/sidebar-filter/sidebar-filter.component';
import SortBox from './components/sort-box/sort-box.component';
import CheckOutPage from './pages/checkout-page/checkout-page.component';
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
      collectionItemsDisplay: 'grid'
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
      selectedCollectionName: 'shirts',
    })
  }

  fetchSingleCollection = (collectionName) => {
    let filterByColor;
    let filterByGender;
    switch (collectionName) {
      case 'Camisetas':
      case 'Acessórios':
        collectionName = 'shirts';
        filterByColor = true;
        break;
      case 'Calças':
        collectionName = 'pants';
        filterByGender = true;
        break;
      case 'Calçados':
        collectionName = 'shoes';
        filterByColor = true;
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
      selectedCollectionName: collectionName
    })
  }

  fetchCollectionItemsByGender = (selectedGender) => {
    const { selectedCollection, displaySearchResults, searchBoxResults } = this.state;
    let searchBoxCopyArray = [];
    let multiFilterResults = {};
    let multiFilterResultsArray = [];
    if (displaySearchResults) {
      searchBoxCopyArray = JSON.parse(JSON.stringify(searchBoxResults));
      multiFilterResults.items = searchBoxCopyArray;
    } else {
      multiFilterResults = lodashClonedeep(selectedCollection);
    }
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
      displaySearchResults: false
    })
  }

  fetchCollectionItemsByColor = (selectedColor) => {
    const { selectedCollection, displaySearchResults, searchBoxResults } = this.state;
    let searchBoxCopyArray = [];
    let multiFilterResults = {};
    let multiFilterResultsArray = [];
    if (displaySearchResults) {
      searchBoxCopyArray = JSON.parse(JSON.stringify(searchBoxResults));
      multiFilterResults.items = searchBoxCopyArray;
    } else {
      multiFilterResults = lodashClonedeep(selectedCollection);
    }
    for (let key in multiFilterResults) {
      if (key === 'items') {
        multiFilterResults[key].forEach((item) => {
          selectedColor.forEach((colorOption) => {
            if (colorOption.trim().localeCompare(item.filter[0].color.trim()) === 0) {
              multiFilterResultsArray.push(item);
            }
          })
        })
        delete multiFilterResults[key];
        break;
      }
    }
    multiFilterResults.items = multiFilterResultsArray;
    this.setState({
      multiFilterResults: multiFilterResults,
      displayMultiFilterResults: true,
      displaySearchResults: false
    })
  }

  fetchCollectionItemsByTypeOption = (selectedOption) => {
    const { selectedCollection, displaySearchResults, searchBoxResults } = this.state;
    let searchBoxCopyArray = [];
    let multiFilterResults = {};
    let multiFilterResultsArray = [];
    if (displaySearchResults) {
      searchBoxCopyArray = JSON.parse(JSON.stringify(searchBoxResults));
      multiFilterResults.items = searchBoxCopyArray;
    } else {
      multiFilterResults = lodashClonedeep(selectedCollection);
    }
    for (let key in multiFilterResults) {
      if (key === 'items') {
        multiFilterResults[key].forEach((item) => {
          switch(selectedOption) {
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
      displaySearchResults: false
    })
  }

  searchCollectionItems = (searchBoxResults, searchField, searchCollectionName, filterByColor, filterByGender) => {
    console.log(searchBoxResults);
    console.log(searchField);
      this.setState({
        searchBoxResults: searchBoxResults,
        displaySearchResults: true,
        displayMultiFilterResults: false,
        selectedCollectionName: searchCollectionName,
        filterItemsByColor: filterByColor,
        filterItemsByGender: filterByGender
      })
  }

  sortCollectionItems = (selectedOption) => {
    const { selectedCollection, multiFilterResults, displaySearchResults, displayMultiFilterResults, searchBoxResults } = this.state;
    
    let searchBoxCopyArray = [];
    let sortCollectionResults = {};

    if (displaySearchResults) {
      searchBoxCopyArray = JSON.parse(JSON.stringify(searchBoxResults));
      sortCollectionResults.items = searchBoxCopyArray;
    } else if (displayMultiFilterResults) {
      sortCollectionResults = lodashClonedeep(multiFilterResults);
    } else {
      sortCollectionResults = lodashClonedeep(selectedCollection);
    }

    const sortByLowestPrices = (key) => {
        sortCollectionResults[key].sort((a, b) => {
          switch(a.specialPrice) {
            case undefined:
              if (b.specialPrice === undefined) {
                return a.price - b.price;
              } else {
                return a.price - b.specialPrice;
              }
            default:
              if (b.specialPrice === undefined) {
                return a.specialPrice - b.price;
              } else {
                return a.specialPrice - b.specialPrice;
              }
            }
         })
        return sortCollectionResults;
    }
    const sortByHighestPrices = (key) => {
      sortCollectionResults[key].sort((a, b) => {
        switch(a.specialPrice) {
          case undefined:
            if (b.specialPrice === undefined) {
              return b.price - a.price;
            } else {
              return b.specialPrice - a.price;
            }
          default:
            if (b.specialPrice === undefined) {
              return b.price - a.specialPrice;
            } else {
              return b.specialPrice - a.specialPrice;
            }
          }
       })
      return sortCollectionResults;
    }

    for (let key in sortCollectionResults) {
      if (key === 'items') {
        switch (selectedOption) {
          case 'Menores Preços':
            sortByLowestPrices(key);
            break;
          case 'Maiores Preços':
            sortByHighestPrices(key);
            break;
        }
      }
    }

    this.setState({
      selectedCollection: sortCollectionResults,
      displayMultiFilterResults: false,
      displaySearchResults: false
    })
  }

  changeCollectionItemsDisplay = (selectedOption) => {
    this.setState({
      collectionItemsDisplay: selectedOption
    })
  }

  componentDidMount() {
    this.fetchCollectionNames();
    this.fetchCollections();
    this.displayInitialCollection();
  }

  render() {
    const { collectionNames, selectedCollection, searchBoxResults, displaySearchResults, filterItemsByColor, filterItemsByGender, selectedCollectionName, multiFilterResults, displayMultiFilterResults, collectionItemsDisplay, allCollections } = this.state;
    return (
      <section>
        <SignUpSignInDisplay />

        <SearchBox searchCollectionItems={this.searchCollectionItems} allCollections={allCollections}/>

        <Header collectionNames={collectionNames} fetchSingleCollection={this.fetchSingleCollection}/>

        <NavigationPath selectedCollectionName={selectedCollectionName}/>

        <SideBarFilter fetchSingleCollection={this.fetchSingleCollection} filterItemsByColor={filterItemsByColor} filterItemsByGender={filterItemsByGender} selectColor={this.fetchCollectionItemsByColor} selectGender={this.fetchCollectionItemsByGender} selectTypeOption={this.fetchCollectionItemsByTypeOption} selectedCollectionName={selectedCollectionName}/>

        <SortBox sortCollectionItems={this.sortCollectionItems} changeCollectionItemsDisplay={this.changeCollectionItemsDisplay}/>

        <Switch>
          <Route exact path='/' render={() => <ShopPage selectedCollection={selectedCollection} searchBoxResults={searchBoxResults} displaySearchResults={displaySearchResults} multiFilterResults={multiFilterResults} displayMultiFilterResults={displayMultiFilterResults} collectionItemsDisplay={collectionItemsDisplay}/>}/>
          <Route path='/sign-in' component={SignUpSignInPage}/>
          <Route path='/checkout' component={CheckOutPage} />
        </Switch>

        <Footer />
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionNames: () => dispatch(fetchCollectionNames())
// });

export default App;
