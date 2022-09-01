import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.scss';
import { Home } from './home.js';
import { Habit } from './habit.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/habit' element={<Habit />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
