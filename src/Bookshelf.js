import React, { Component } from 'react';
import CreateBook from './CreateBook'

class Bookshelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) =>{
                            if (book.shelf.toLowerCase() === this.props.shelfName.replace(/ /g,"").toLowerCase()){
                                return(
                                <CreateBook key={book.id} width={128} height={193} backgroundImage ={book.imageLinks ? 'url(' + book.imageLinks.thumbnail +')' : ""} bookTitle={book.title} bookAuthors={book.authors ? book.authors : "" } shelf={book.shelf} changeShelf = {this.props.changeShelf} book={book}/>
                                )
                            }
                            else{
                                return ""
                            }
                            
                        })}
                        
                    </ol>
                  </div>
                </div>
        );
    }
}

export default Bookshelf;