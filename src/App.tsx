import React from 'react';
import './App.css';
import Home from './pages/Message';
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
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/messager' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/service' element={<Service />}/>
          <Route path='/foryou' element={<ForYou />}/>
          <Route path='/messager' element={<Home />}/>
          <Route path='/websocket' element={<WebSocketDemo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
