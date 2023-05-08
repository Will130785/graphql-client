import BookList from './components/bookList'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'


// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='main'>
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
