import React, {createContext, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LogIn from './components/Login/LogIn';
import HomePage from './components/HomePage/HomePage';
import { auth, provider} from "./firebase-config";

function App() { 

  return (
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage />} /> :
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App