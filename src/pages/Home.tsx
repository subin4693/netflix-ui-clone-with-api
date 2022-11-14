import React, { FC } from 'react';
import { Navbar, Banner, MovieList } from '../components'

const Home: FC = () => {
      return (<>
            <Navbar />
            <Banner />
            <MovieList />
      </>)
}

export default Home;