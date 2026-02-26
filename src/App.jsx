import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import Menu from './layouts/Menu'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import ProjectLayout1 from './layouts/ProjectLayout1'
import Product from './pages/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<ProjectLayout1 />} >
        <Route path='' element={<Home />}></Route>
        <Route path='product' element={<Product />}></Route>
      </Route>
      <Route path='login' element={<Login />} ></Route>
    </Routes>
  )
}

export default App
