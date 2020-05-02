import React, { Component } from 'react';

class CreateBook extends Component {

    
    
    /*Function that is responsible for changing the shelf of a book when a new value in the drop down is selected.
      Also invokes the function 'changeShelf' of BooksApp to make the change at backend */
    changeShelf = (e) =>{
      const newShelf = e.target.value;
      this.props.changeShelf(this.props.book, newShelf);
    }  

    

    render() {
        return (
            <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: this.props.width, height: this.props.height, backgroundImage: this.props.backgroundImage }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={this.changeShelf} value={this.props.shelf} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read" >Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.bookTitle}</div>
                          <div className="book-authors">{Array.isArray(this.props.bookAuthors) ? this.props.bookAuthors.join(', ') : this.props.bookAuthors}</div>
                        </div>
                      </li>
        );
    }
}

export default CreateBook;