import {Route} from "react-router-dom"
import './App.css';
import NavH from './components/Home/Nav';
import React from 'react';
import { Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount'
import AuthContextProvider from './context/AuthContext';
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div>
      <AuthContextProvider>
        <NavH/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/createaccount" element={<CreateAccount/>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
