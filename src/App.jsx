import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import LogIn from './components/LogIn';
import NewsLetter from './components/NewsLetter';
import Counter from './components/Counter';
import './App.css';

function App() {
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
      <h1>Vite + React</h1>
      <div className="small-container">
        <Header />
        <NewsLetter />
      </div>
    </div>
  );
}

export default App;
