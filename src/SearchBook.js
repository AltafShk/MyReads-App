import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CreateBook from './CreateBook'

class SearchBook extends Component {

    state={
        query: "",                //for input query
        displayedBooks: []        //for currently showed books on search page
    }


    /*Function to update the state variable according to the text typed in the input box. 
    Also calls this.searchQuery to search for the books according to that query */
    updateQuery=(newQuery) => {
        this.setState(()=>({
            query: newQuery
        }))
        this.searchQuery(newQuery)

    }


    

    //Function to get the filtered books from the backend an adding the shelf property to them using this.retrieveShelf
    searchQuery = (query) => {
        if(query.trim() === ""){
            this.setState(()=>({
                displayedBooks:[]
            }))
            return
        }
            BooksAPI.search(query)
                .then((books) => {
                    if(Array.isArray(books)){
                        const finalBooks = books.map((book) => {
                            this.retrieveShelf(book)
                            
                            return book
                        })
                        this.setState(()=>({
                            displayedBooks: finalBooks
                        }))
                    }
                    else{
                        this.setState(()=>({
                            displayedBooks:[]
                        }))
                    }
      })}

      

    //Function responsible for adding the current 'shelf' property to all books to be filtered and displayed
    retrieveShelf = (book) =>{
        BooksAPI.get(book.id).then((result)=>{
            
            book['shelf'] = result.shelf
            
        })}
    

    

    render() {

        const {query, displayedBooks} = this.state

        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link to = '/'>
              <button className="close-search">Close</button>
                </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <form>
                <input 
                    type="text" 
                    placeholder="Search by title or author" 
                    value={query}
                    onChange = {(event) => this.updateQuery(event.target.value)}
                    
                   
                    />
                 
                </form>
                

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              {displayedBooks.map((book) =>{
                            
                                return(
                                <CreateBook key={book.id} width={128} height={193} backgroundImage ={book.imageLinks ? 'url(' + book.imageLinks.thumbnail +')' : ""} bookTitle={book.title} bookAuthors={book.authors ? book.authors : "" } shelf={book.shelf} changeShelf = {this.props.changeShelf} book={book}/>
                                )
                            }
                            
                        )}
                    
                    
              </ol>
            </div>
          </div>
        

        );
    }
}

export default SearchBook;