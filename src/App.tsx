import React from 'react';
import { Home, Signin, Signup, SignupPassword } from './pages';



const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/*<Home />*/}
      {/*<Signin />*/}
      <Signup />
      {/*<SignupPassword />*/}
    </div>
  )
}

export default App