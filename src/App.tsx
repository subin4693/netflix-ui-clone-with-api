import React from 'react';
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'



const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/*<Home />*/}
      <Signin />
      {/*<Signup />*/}
    </div>
  )
}

export default App