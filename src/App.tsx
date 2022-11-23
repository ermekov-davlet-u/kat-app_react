import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Service from './pages/Service';
import ForYou from './pages/ForYou';
import { WebSocketDemo } from './pages/WebSocket';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
