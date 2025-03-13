import React from 'react';
import OtherLayout from './Layout/OtherLayout'
import AuthLayout from './Layout/AuthLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Home from './Component/Home';


export default function RoutContainer() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Layout */}
        <Route path='/login' element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
   
        {/* Other Layout */}
        <Route path='/' element={<OtherLayout />}>
          <Route path='/' index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
