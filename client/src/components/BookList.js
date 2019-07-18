import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';

class BookList extends Component {

  displayBooks(){
    var data=this.props.data;
    if(data.loading){
      return (<div>Loading books..</div>);
      }  else{
        return data.books.map(book=>{
          return(<li key={book.id}>{book.name}</li>);
        });
    }
  }
  render() {
    //the data that returend from the Query is stored in component that called propos
    console.log(this.props);
    return (
        <div >
        <ul id="book-list">
        {this.displayBooks()}
        </ul>
      </div>
    );
  }
}
//to bind the data that comes from the Query to our Html Elemets:
//take graphql and use it to bind getBooksList Query to BookList component
export default graphql(getBooksQuery)( BookList);