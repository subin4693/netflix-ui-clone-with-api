import React from 'react';
import { Navbar, Banner, MovieList } from './components'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <MovieList />
    </div>
  )
}

export default App