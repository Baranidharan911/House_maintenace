import React, {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'
import Services from './pages/Services';
import { Login } from './pages/Login';
import { Register } from './pages/Register';


function App() {
  const [currentForm, setcurrentForm] =useState('login')

  return (
  
    <>
      <Navbar />
      <Home />
      <Services/>
      <About/>
      <Contact/>
    </>
  );
}

export default App
