"use client"
import React, { useState } from 'react'
import './globals.css'

import Home from './Component/Home/Home'
import Dice from './Component/Dice/Dice'
function App() {
  const [click, setClick] = useState(false)
  const startgame=()=>{
    setClick((vle)=>!vle)
  }
  return (
    <>
    {click? <Dice/>:<Home startgame={startgame}/>}
    </>
  )
}

export default App
