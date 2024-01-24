import { Routes, Route } from 'react-router-dom';

import logo from './logo.jpg';
import './App.css';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <Home />
    </div>
  );
}

export default App;
