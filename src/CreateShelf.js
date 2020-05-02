import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CreateShelf extends Component {

  state={
    query: "",
    displayedBooks: []
}



updateQuery=(newQuery) => {
    this.setState(()=>({
        query: newQuery
    }))

}

createShelf = (query, array) =>{
  this.props.create(query, array)
} 
 
    render() {
        return (
            <div className="search-books">
            
                <Link to = '/'>
              <button className="close-search">Close</button>
                </Link>
              <div className= 'create-shelf'>
                <form onSubmit = {this.createShelf(this.state.query, this.props.currShelves)}>
                <input size="50"
                    type="text" 
                    placeholder="Write the name of the new Shelf" 
                    value={this.state.query}
                    onChange = {(event) => this.updateQuery(event.target.value)}

                    />

                  <Link to = '/'>
               
              <button className="create-button" >Create</button>
                </Link>
                 
                </form>
                

              </div>
            </div>
            

              
                    
                    
              
        );
    }
}

export default CreateShelf;