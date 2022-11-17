import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount'
import AuthContextProvider from './context/AuthContext';
import PageNotFound from './components/PageNotFound'
import ForgetPassword from './components/ForgetPassword'
import Account from './components/Account';
import NavBar from './components/NavBar';
import FaseDeGrupos from './components/FaseDeGrupos';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/createaccount" element={<CreateAccount/>} />
          <Route path="/forget" element={<ForgetPassword/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/fasedegrupos' element={<FaseDeGrupos />}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
