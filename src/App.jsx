import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from "./components/background.jsx";
import Foreground from "./components/foreground.jsx";

function App() {
  return (
    <div className=" relative w-screen h-screen bg-white-800">
       <Background/>
        <Foreground/>
    </div>
  )
}

export default App
