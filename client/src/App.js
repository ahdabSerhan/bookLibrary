import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';

//inject the data that we recieve from the server into our app by surrouding the template in apollo provider tag
import {ApolloProvider} from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';


//Apollo Client Set up
const client= new ApolloClient({
  //making request to this url for our application
  uri:'http://localhost:4000/graphql'
})
class App extends Component {

  render() {
    console.log(this.propos);
    return (
        <ApolloProvider client ={client}>
          <div id="main">
            <h1> Reading List</h1>
          <BookList/>
          <AddBook/>
        </div>
        </ApolloProvider>
    );
  }
}
export default App;
//apollo - graphQl Client => help us to create Quries
