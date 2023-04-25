import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import LogIn from './components/LogIn';
import NewsLetter from './components/NewsLetter';
import Mail from './components/Mail';
import Counter from './components/Counter';
import { SearchBar, OverView } from './components/Search';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const updateTermHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>garybuckle and ....Vite + React</h1>
      <div className="small-container">
        <Header />
        <SearchBar onUpdateSearch={updateTermHandler} />
        <OverView currentTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
