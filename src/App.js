import React from 'react'
import BookShelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {

    books : []

    /*
     state variable has been removed and routing has been implemented.
     */
    
  }


  //Function to getAll the books to be shown in shelves initially
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  //Function to get updated set of books when their shelf value changes
  componentDidUpdate() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }


  //Function to change shelf value of a book at backend using BooksAPI.update
  changeShelf(book, newShelf){
    BooksAPI.update(book, newShelf)
}


  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() =>(
           (
            <SearchBook changeShelf = {this.changeShelf}/>
          )
        )}/>
        <Route exact path='/' render={()=> (
          (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelfName = {"Currently Reading"} books={this.state.books} changeShelf = {this.changeShelf}/>
                <BookShelf shelfName={"Want to Read"} books={this.state.books} changeShelf = {this.changeShelf}/>
                <BookShelf shelfName={"Read"} books={this.state.books} changeShelf = {this.changeShelf}/>
              </div>
            </div>
            <div className="open-search">
                <Link
                  to ='/search'>
                  <button>
                  Add a book
                  </button>
                </Link>
            </div>
          </div>
          )
        )}/> 
      </div>
    )
  }
}

export default BooksApp
