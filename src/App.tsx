import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import { Home, Signin, Signup, SignupPassword } from './pages';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from './features/userSlice';



type childrenType = {
  children: React.ReactNode,
}
const ProtedtedRoute = ({ children }: childrenType): any => {
  const user = useSelector((state: any) => state.user.user);
  return user ? children : <Navigate to="/signup" />
}

const App: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        dispatch(loginUser(true));
        navigate('/');
      }
      else
        console.log("error");
    })
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<ProtedtedRoute> <Home /> </ProtedtedRoute>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/password" element={<SignupPassword />} />        
      </Routes>
    </div>
  )
}

export default App