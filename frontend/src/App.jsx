import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CodeforcesUser from './components/codeforces'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <CodeforcesUser />
    </>
  )
}

export default App
