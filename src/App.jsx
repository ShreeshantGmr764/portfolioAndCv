import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App