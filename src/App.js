import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount'
import AuthContextProvider from './context/AuthContext';
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div>
      
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/createaccount" element={<CreateAccount/>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
