import {gql} from 'apollo-boost';

//make a query

const getAuthorsQuery=gql`
{
  authors{
    name
    id
  }
}
`
//make a query
const getBooksQuery=gql`
{
  books{
    name
    id
  }
}
`
const addBookMutation=gql`
mutation AddBook($name:String! ,$genre:String!, $authorId:ID!){
  addBook(name: $name, genre:$genre, authorId:$authorId){
    name
    id
  }

}
`
export {getAuthorsQuery,getBooksQuery, addBookMutation};
