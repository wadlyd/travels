import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <div className="App">
      <div className='overlay'>
        <HomePage />
      </div>
    </div>
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
