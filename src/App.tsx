import React from 'react';
import { Navbar, Banner, MovieList } from './components'

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <MovieList />
    </div>
  )
}

export default App