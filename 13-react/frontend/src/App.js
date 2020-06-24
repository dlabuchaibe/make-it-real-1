import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const name = "Jesus";
function App() {
  return (
    <div>
      <Header />
      <h1>Hola {name}</h1>
      
      <Footer />
    </div>
  );
}

export default App;
