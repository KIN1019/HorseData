import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HorseView } from './view/HorseView';
import { Route, Routes } from 'react-router-dom';
import { DashboardView } from './view/DashboardView';

function App() {
  return (

    <>  
      <Routes>
        <Route path='/' element={<HorseView/>} />
        <Route path='/dashboard' element={<DashboardView/>} />
      </Routes>
    </>
  );
}

export default App;
