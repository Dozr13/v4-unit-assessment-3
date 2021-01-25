import React, { Component } from 'react';
import './App.css';
import data from './data'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import SearchBar from './Components/SearchBar'


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      books: data,
      shelf: [],
      filterStr: ''
    }

    // this.clearShelf = this.clearShelf.bind(this)
    this.search = this.search.bind(this)
  }

  addToShelf = ( title ) => {
    if( this.state.shelf.includes(title)){
    } else {
    this.setState({
      shelf: [...this.state.shelf, title]
    })
  }
  }


  //  Delete Book from shelf
  clearShelf = () => {
    this.setState({
      shelf: []
    })
    }

  search(userInput) {
    // console.log(userInput)
    this.setState({
      filterStr: userInput
    })
  }

    


  render() {

    return (
      <div className="App">

        <div className="topper">
          <Header />
          
        </div>

        <div className="searcher">
        <SearchBar search={ this.search } />
        </div> 

        
        <div className="flex-container">

          <div className="flex-left">
              <div className="wrapper">

                <BookList search={ this.state.filterStr } add={ this.addToShelf } books={ this.state.books } />

              </div>
          </div>
        
          <div className="flex-right">
            <div className="center">
              <Shelf shelf={ this.state.shelf } delete={ this.clearShelf } />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
