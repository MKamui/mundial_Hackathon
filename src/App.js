import Home from './components/Home/Home';
import {Route} from "react-router-dom"
import './App.css';
import NavH from './components/Home/Nav';

function App() {
  return (
    <div className="App">
      <NavH/>
      <Home/>
    </div>
  );
}

export default App;
