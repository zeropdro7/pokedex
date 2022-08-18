import logo from './logo.svg';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navbar />
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
      </header>
      <body>
        <Sidebar />
        <Pokedex />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
