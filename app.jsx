import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  "./index.css";
import Header from './Header';

function App() {

  return (
       <React.Fragment>
        <Header/>
        <h1>Home</h1>
    </React.Fragment>
  )
}

export default App
