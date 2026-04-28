import React from 'react';
import CoffeeMenu from './components/CoffeeMenu';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <header>
        <h1>Coffee and Redux</h1>
        <p>Your daily dose of caffeine and code!</p>
      </header>
      <CoffeeMenu />
      <footer>
        <p>to understand redux and tanstack</p>
      </footer>
    </div>
  );
}

export default App;