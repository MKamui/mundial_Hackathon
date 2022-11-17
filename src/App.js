import './App.css';
import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
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
import OctavosDeFinal from './components/OctavosDeFinal';

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
          <Route path='/octavos' element={<OctavosDeFinal/>}/>
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
