import React from 'react';
import './App.css';

import { cta, snacks, navbar, food, drinks } from './Component';
import { footer, blog, check, eatoutv1, features, header } from './containers';

function App() {
  return (
    <div className="App">
        <div className='gradient_bg'>
          <navbar />
          <header />
        </div>
      <food />
      <snacks />
      <drinks />
      <features />
      <cta />
      <blog />
      <footer />
    </div>
  
  );
}

export default App;
