import Home from './components/Home/Home';
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount'
import AuthContextProvider from './context/AuthContext';
import PageNotFound from './components/PageNotFound'
import ForgetPassword from './components/ForgetPassword'
import Account from './components/Account';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/createaccount" element={<CreateAccount/>} />
          <Route path="/forget" element={<ForgetPassword/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
