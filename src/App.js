import logo from './logo.svg';
import './App.css';

import { cta, snacks, navbar, food, drinks } from './Component';
import { footer, blog, check, eatoutv1, features, header } from './containers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eat Out
        </p>
      </header>
    </div>
  );
}

export default App;
