import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../features/coffeeSlice'; 
import './coffeemenu.css';

const CoffeeMenu = () => {
  const dispatch = useDispatch();
  const { menu, isLoading, errorMessage } = useSelector((state) => state.coffee);

  return (
    <main className="menu-container">
      <header className="menu-header">
        <button 
          className="fetch-btn" 
          onClick={() => dispatch(fetchCoffee())}
          disabled={isLoading}
        >
          {isLoading ? 'Brewing...' : 'Get Coffee Menu'}
        </button>
      </header>

      {/* 1. Loading & Error center lo ravali kabatti grid bayata or logic flow lo untayi */}
      {isLoading && (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>We are working on your coffee!</p>
        </div>
      )}

      {errorMessage && (
        <div className="error-card">
          <p>{errorMessage}</p>
        </div>
      )}

      {/* 2. Indulo unna prathi card ippudu Grid items laaga behave chestundi */}
      <div className="coffee-grid">
        {!isLoading && menu.map((coffee) => (
          <div key={coffee.id} className="coffee-card">
            <div className="card-image">
              <img src={coffee.image} alt={coffee.title} />
            </div>
            <div className="card-content">
              <h3>{coffee.title}</h3>
              <p>{coffee.description.length > 60 
                  ? coffee.description.substring(0, 60) + "..." 
                  : coffee.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CoffeeMenu;