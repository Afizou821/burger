import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import  HomePage from './pages/HomePage'
import {  } from 'react-router-dom/dist';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
            
        
      </Routes>
    </BrowserRouter>
  )
}
