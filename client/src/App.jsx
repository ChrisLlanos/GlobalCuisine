import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div style ={{backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/22/01/35/1000_F_222013584_xzhRcGLhHST9tQv1DVKllF5scPAitLbh.jpg")`}} className="flex-column justify-flex-start min-100-vh">
        <Header />
          <div className="container">
            <Outlet />
          </div>
        <Footer />
        </div>
    </ApolloProvider>
  );
}

export default App;
