import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from './features/coffeeSlice';
import './App.css'; 

function App() {
  const dispatch = useDispatch();
  
  const { menu, isLoading, errorMessage } = useSelector((state) => state.coffee);

  return (
    <div className="container">
      <header>
        <h1>Coffee and Redux</h1>
        <p></p>
        <button 
          className="fetch-btn" 
          onClick={() => dispatch(fetchCoffee())}
          disabled={isLoading}
        >
          {isLoading ? 'Fetching Menu...' : 'Get Coffee Menu'}
        </button>
      </header>

      <main>
        {isLoading && (
          <div className="loader">
            <div className="spinner"></div>
            <p>we are working on ur coffee !</p>
          </div>
        )}
        {errorMessage && (
          <div className="error-card">
            <p>{errorMessage}</p>
          </div>
        )}

        <div className="coffee-grid">
          {menu.map((coffee) => (
            <div key={coffee.id} className="coffee-card">
              <img src={coffee.image} alt={coffee.title} />
              <h3>{coffee.title}</h3>
              <p>{coffee.description.substring(0, 60)}...</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;