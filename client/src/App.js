import './App.css';
import React from 'react';
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount'
import AuthContextProvider from './context/AuthContext';
import PageNotFound from './components/PageNotFound'
import ForgetPassword from './components/ForgetPassword'
import Account from './components/Account';
import NavBar from './components/NavBar/NavBar';
import FaseDeGrupos from './components/FaseDeGrupos';
import Protected from './components/Protected'
import Team from './components/Team';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/createaccount" element={<CreateAccount/>} />
          <Route path="/forget" element={<ForgetPassword/>} />
          <Route exact path='/account' element={<Protected><Account/></Protected>} />
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/fasedegrupos' element={<FaseDeGrupos />}/>
          <Route path='/team' element={<Team />}/>
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </div>
  );
}

export default App;