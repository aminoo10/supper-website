import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

//page and layout imports

import Homepage from './pages/Homepage'
import Gallery from './pages/Gallery'
import SiteHeader from './components/SiteHeader'

//apollo client

const url = process.env.REACT_APP_URL;

const client = new ApolloClient({
  uri: `${url}/graphql`, //this needs to be changed to what the URL is when the site is deployed
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gallery" element={<Gallery />}/>
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
