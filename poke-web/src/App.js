import logo from './logo.svg';
import Pokedex from './components/Pokedex';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <Pokedex />
      </header>
    </div>
  );
}

export default App;
