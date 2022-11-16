import Home from './components/Home';
import {Route} from "react-router-dom"
import './App.css';
import NavH from './components/Home/Nav';
import React from 'react';
import { Routes} from "react-router-dom";
import './App.css';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount'
import AuthContextProvider from './context/AuthContext';
import PageNotFound from './components/PageNotFound';
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
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/fasedegrupos' element={<FaseDeGrupos />}/>
          
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
