import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HorseView } from './view/HorseView';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardView } from './view/DashboardView';
import LoginPage from './view/LoginView';

function App() {
  return (

    <>  
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/dashboard' element={<DashboardView/>} />
      </Routes>
    </>
  );
}

export default App;
