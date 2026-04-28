import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoffee } from '../features/coffeeSlice'; // Path check chesko mama

const CoffeeMenu = () => {
  const dispatch = useDispatch();
  
  // 1. Redux Store nundi data lakkuntunnam
  const { menu, isLoading, errorMessage } = useSelector((state) => state.coffee);

  // 2. Component load avvagane API call start chestunnam
  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  // 3. Loading State
  if (isLoading) return <h2 style={{ textAlign: 'center' }}>Brewing your coffee... ☕</h2>;

  // 4. Error State
  if (errorMessage) return <h2 style={{ color: 'red' }}>{errorMessage}</h2>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
      {menu.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '10px', width: '250px', padding: '10px', textAlign: 'center' }}>
          <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '10px', height: '200px', objectFit: 'cover' }} />
          <h3>{item.title}</h3>
          <p>{item.description.substring(0, 60)}...</p>
        </div>
      ))}
    </div>
  );
};

export default CoffeeMenu;